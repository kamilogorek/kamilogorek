---
title: "npm Scripts: Tips Everyone Should Know"
excerpt: "npm is not only the package manager for JavaScript, it's also used to set up tooling around your codebase. Linters, transpilers, testing, and servers. Everything can be configured and run using the very same thing. Basic usage is really simple, too."
---

_Originally posted on [corgibytes.com](http://corgibytes.com/blog/2017/04/18/npm-tips/)_

---

npm is not only the package manager for JavaScript, it's also [used to set up tooling around your codebase](https://docs.npmjs.com/misc/scripts). Linters, transpilers, testing, and servers. Everything can be configured and run using the very same thing. Basic usage is really simple, too.

You specify your scripts within the `scripts` attribute of the main object in `package.json` and then run it using `npm run <name>`.

For example:

```json
{
  ...
  "scripts": {
    "build": "webpack --progress",
    "test": "karma start",
    "server": "webpack-dev-server"
  }
  ...
}
```

There are, however, some details that may be useful while performing your setup.

---

## Running Scripts with Additional Arguments

Let's say that you want to run Karma, which by default is watching all of your files for changes, without this feature.

To do this, they provide a `--single-run` flag that can be used with their script.

The simplest way to achieve this would be to add a new entry in our scripts.

For example:

`"test:single-run": "karma start --single-run"`

If we'd like to modify our default test parameters, however, we'd have to do this in both places, `test` and `test:single-run`.

Or we can go around this issue by using our flag directly from the command line.

To achieve this, we use `--` at the end of our command, which tells npm that anything after this should be appended directly to the command itself.

```sh
$ npm run test -- --single-run
```

---

## Running Multiple Commands in Series or in Parallel

If you have one script that runs multiple commands, let's say CSS linter, JS linter and HTML linter, it'd be nice to run them all at once to speed things up.

If you have commands that are dependent on each other, however, like if you run transpiler before running the tests, you'll want to change the execution flow to be one after another, not all at once.

Because `npm` scripts are spawning a shell process under the hood, we can use its syntax to achieve what we need. Specifically `;` (and `&&`, more on this next) for running in series and `&` for running in parallel.

An example using this syntax could look something like this:

Parallel:

```json
"lint": "eslint & csslint & htmllint"
```

Series:

```json
"build": "babel; jest"
```

(I know, Jest test runner has a built-in functionality to precompile your code. It's only an example ;))

It will work just fine, but there's one rather huge issue with this approach. `&` syntax creates a subprocess, which results in the original `npm` process not being able to tell whether it already finishes or not. This can be problematic, especially with long running scripts.

To make things more coherent, we can use a package called [npm-run-all](https://www.npmjs.com/package/npm-run-all). It provides additional commands, more specifically `run-s` for series and `run-p` for parallel, and it will handle all of the subprocesses correctly.

Parallel:

```json
"lint": "run-p eslint csslint htmllint"
```

Series:

```json
"build": "run-s babel jest"
```

---

## Bailing out When a Command Fails

In our previous example, we run transpiler before we run our tests.

But what's the point of running the tests if transpilation failed in the first place?

`;` syntax waits until the former command finishes and then runs the next one, no matter what the exit code.

What we'd like to do instead is to stop the execution if any command in series failed.

To change this, we simply use `&&` instead of `;`:

```json
"build": "babel && jest"
```

Now, if `babel` exits with a code other than `0`, which means a successful command run, `jest` will never run.

We can, of course, chain this syntax as many times as we want:

```json
"build": "eslint && babel && jest && deploy"
```

---

## Using Life-Cycle Hooks

Every script in npm runs three separate scripts under the hood. A `pre` script, a script itself and a `post` script. Those two additional scripts are run, as their names imply, before and after the main script.

They are useful for setting up and cleaning up, for example, during deployment.

Both of those scripts can be written using `pre<script-name>` and `post<script-name>` in the same `scripts` object as before.

Let's say that we want to build our project, it'll be a very simple example just to show the concept.

What we'll do is this:

- create a new one `dist` directory and remove everything from it if there was already one
- create `tmp` directory
- build the project to `tmp` directory
- minify our bundle to `dist` directory
- remove the `tmp` directory

```json
"prebuild": "mkdir dist tmp; rm -rf dist/*",
"build": "browserify main.js -o tmp/bundle.js && uglifyjs -o dist/bundle.min.js -- tmp/bundle.js",
"postbuild": "rm -rf tmp"
```

Note that you should use the `rimraf` package for cross-platform compatibility, as it won't work on Windows.

Now, whenever you run `npm run build`, it will trigger all the commands, making sure they were called in a correct order.

---

## Running Group of Commands

The naming convention in npm uses a colon to group a whole set of specific tasks. In one of the code examples above, we run all lint tasks in parallel using `&` syntax.

What I often like to do is split those tasks into smaller chunks and run them as groups using the `npm run` command within the script itself.

Our previous example looked like this:

```json
"lint": "eslint & csslint & htmllint"
```

What we can do is separate every single one of them (in case we need to add some flags to configure them, for example) and group them together.

```json
"lint: "npm run lint:js & npm run lint:css & npm run lint:html",
"lint:js": "eslint --some-flag",
"lint:css": "csslint --that-will-change",
"lint:html": "htmllint --how-things-work"
```

After this change, it will work exactly the same way, but now we can run either all of them at once, or each one separately whenever we need.

To make it even cleaner, we could use an `npm-run-all` here again and change our main `lint` command to `npm-run-all lint:*`, which would then match all scripts starting with the `lint:` group.

---

## npm Completion

One of the things I learned recently is that npm itself provides us with a baked-in way to [add commands completion in the terminal](https://docs.npmjs.com/cli/completion). And what's even better is that it will also include all of your custom scripts!

Depending on your environment (bash or zsh), you just pipe the result of your `npm completion` command directly to `~/.bashrc` or `~/.zshrc`. Remember to reload this file afterwards using `source ~/.bashrc`!

```sh
$ npm completion >> ~/.bashrc
$ npm completion >> ~/.zshrc
```

---

## Writing Custom Checks for Your npm Scripts

Thanks to the `&&` syntax and npm understanding regular exit codes as described above, we can write very simple node scripts that will do some initial checks for us.

For example, making sure that the user specified all of the required ENV variables or that the command name doesn't contain any typos when trying to run it.

What I used recently, is this nodel.js script verifying that I have `NODE_ENV` set up and that developers are using one of the predefined env-specific scripts.

My scripts look something like this:

```json
"build": "node ./scripts/env-check.js && rimraf dist && webpack --bail --progress --profile --display-error-details",
"build:development": "NODE_ENV=development npm run build",
"build:staging": "NODE_ENV=staging npm run build",
"build:production": "NODE_ENV=production npm run build",
```

And `env-check.js` content:

```js
const task = process.env.npm_lifecycle_event;
const packageJSON = require("../package.json");
const availableEnvironments = Object.keys(packageJSON.scripts)
  .filter((key) => key.startsWith(task))
  .map((key) => key.split(":")[1])
  .filter((key) => key);

if (!process.env.NODE_ENV) {
  console.error(
    `[ Error ] NODE_ENV is required. Use ${task}:${availableEnvironments.join(
      "/"
    )} scripts instead.`
  );
  process.exit(1);
}

if (!availableEnvironments.includes(env)) {
  console.error(
    `[ Error ] ${env} is not valid NODE_ENV. Use ${task}:${availableEnvironments.join(
      "/"
    )} scripts instead.`
  );
  process.exit(1);
}

process.exit(0);
```

Now, whenever a developer types `npm run build` directly, this prompt will show up:

```sh
$ [ Error ] NODE_ENV is required. Use build:development/staging/production scripts instead.
```

One drawback of the code above is that it won't understand `pre` script, which seems like a perfect place for this check:

```json
"prebuild": "node ./scripts/env-check.js && rimraf dist",
"build": "webpack --bail --progress --profile --display-error-details",
```

To fix this, we'll have to update the `task` variable, as `process.env.npm_lifecycle_event` won't return a `build` name, but rather `prebuild`.

```js
const task = process.env.npm_lifecycle_event.startsWith("pre")
  ? process.env.npm_lifecycle_event.slice(3)
  : process.env.npm_lifecycle_event;
```

Now, we can place `node ./scripts/env-check.js` in any `pre` script, and it will perform all of those initial checks for us.

I personally use it for build, server and deploy scripts, but it can certainly be effectively used in many more places.

---
