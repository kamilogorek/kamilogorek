---
title: "Debug Your Node.js Projects With Source Maps"
description: "As you probably know, source maps allow you to view source code context obtained from stack traces in their original, untransformed form. This view is particularly useful when attempting to debug minified code (like UglifyJS) or transpiled code (like TypeScript or ES6). We’ve made the analogy before, but source maps act as the decoder ring to your secret (minified or transpiled) code.

As of recently, we support source maps for Node.js projects. Here’s what you need to know to generate and make those source maps available for Sentry."
---

_Originally posted on [sentry.io](https://blog.sentry.io/2019/02/20/debug-node-source-maps/)_

---

As you probably know, source maps allow you to view source code context obtained from stack traces in their original, untransformed form. This view is particularly useful when attempting to debug minified code (like UglifyJS) or transpiled code (like TypeScript or ES6). We’ve [made the analogy before](https://blog.sentry.io/2018/10/18/4-reasons-why-your-source-maps-are-broken), but source maps act as the decoder ring to your secret (minified or transpiled) code.

As of recently, we support [source maps for Node.js](https://docs.sentry.io/platforms/node/sourcemaps/) projects. Here’s what you need to know to generate and make those source maps available for Sentry.

---

## Generating a source map

Most modern JavaScript transpilers support source maps. Below are instructions for two common tools: Webpack and Rollup.

**Webpack**

Webpack is a powerful build tool that resolves and bundles your JavaScript modules into larger chunks or a single file. It also supports many different “loaders” which can convert different flavors, like TypeScript, into plain JavaScript.

Webpack can be configured to output source maps by editing `webpack.config.js`.

```js
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  target: "node",
  devtool: "source-map",
};
```

**Rollup**

Rollup, another powerful bundler, is specifically focused on compiling small pieces of code into a larger structure, like a library. As an added benefit, Rollup is great at [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking), right out of the box.

Rollup can be configured to output source maps by editing `rollup.config.js`.

```js
export default {
  entry: "./src/app.js",
  output: {
    file: "bundle.js",
    format: "cjs",
    sourceMap: true,
  },
};
```

---

## Making source maps available to Sentry

Once the source maps for Node.js projects are generated, you can upload them directly to Sentry.

**Uploading source maps to Sentry**

Sentry provides an abstraction called Releases that is used to improve our error reporting abilities by correlating first seen events with the release that might have introduce the problem. Releases are necessary for source maps, and the Release API allows storage of source maps within Sentry.

Attaching source artifacts can be done with the help of the `sentry-webpack-plugin`, which internally uses our Sentry CLI, and these five steps:

1. Create a new authentication token under _[Account] > API_.
2. Select `project:write` under Scopes.
3. Install `@sentry/webpack-plugin` using `npm`.
4. Create `.sentryclirc` file with necessary config (see [Sentry Webpack Plugin](https://github.com/getsentry/sentry-webpack-plugin) docs).
5. Update your `webpack.config.json`.

_For more information on how to configure the plugin, check out the [Sentry Webpack Plugin](https://github.com/getsentry/sentry-webpack-plugin) documentation._

```js
const SentryPlugin = require("@sentry/webpack-plugin");
module.exports = {
  // ... other config above ...
  plugins: [
    new SentryPlugin({
      release: process.env.RELEASE,
      include: "./dist",
    }),
  ],
};
```

You’ll also need to configure the client to send the `release`:

```js
Sentry.init({
  dsn: "https://e6c75451eb1344d9865ac11985f46946@sentry.io/1274678",
  release: process.env.RELEASE,
});
```

If you use `process.env.RELEASE` in your application’s code, you’ll have to provide that environment variable every time you run the app. Using Webpack, it’s much more suitable to use [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) and “embed” it during build time.

In that case, the code for `webpack.config.js` is:

```js
const webpack = require("webpack");
// later in the config object, alongside sentry-webpack-plugin

plugins: [
  new webpack.DefinePlugin({
    "process.env.RELEASE": process.env.RELEASE,
  }),
];
```

You don’t _have_ to use `RELEASE` environment variables, but `release` from your upload needs to match `release` from your `init` call.

_For more information, check out the [Releases API](https://docs.sentry.io/api/releases/) documentation._

**Updating Sentry SDK configuration to support source maps**

For Sentry to understand how to resolve errors, the data we send needs to be modified. You can update the Sentry SDK with the help of our [RewriteFrames](https://docs.sentry.io/platforms/javascript/pluggable-integrations/#rewriteframes) integration, which modifies that data for you.

```js
Sentry.init({
  dsn: "https://e6c75451eb1344d9865ac11985f46946@sentry.io/1274678",
  integrations: [new Sentry.Integrations.RewriteFrames()],
});
```

This config assumes that you’ll bundle your application into a single file, which will be served and then uploaded to Sentry from the root of the project’s directory.

If you’re not doing this, because perhaps you’re using TypeScript and uploading your compiled files to the server separately, then we need to use a different approach. This different approach is outside the scope of the current post, but you’ll find some helpful hints and a details example over in our [TypeScript](https://docs.sentry.io/platforms/node/typescript/) documentation.

---

That’s it! Use it. Break things. Repair them. Break them some more. Repair them again. Break them one more time. Repair — you get the idea.

Post feedback in our [forum](https://forum.sentry.io/) or [issue tracker](https://github.com/getsentry/sentry-javascript/issues), or [shout out](https://sentry.io/contact/support/) to our support engineers for help. And, of course, don’t forget to check out the [source maps for Node.js](https://docs.sentry.io/platforms/node/sourcemaps/) documentation.
