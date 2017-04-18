---
title: "Build a Fearless Development Cycle With Git Hooks"
excerpt: "One of the greatest things about programming is that you can change stuff. You can modify them, shape, bend to your needs. But as good as it may sound, unfortunately it is a double-edged sword. Having the ability to change is tempting and dangerous at the same time."
---

_Originally posted on [x-team.com](https://x-team.com/blog/fearless-development-cycle-git-hooks/)_

---

One of the greatest things about programming is that you can change stuff. You can modify them, shape, bend to your needs. But as good as it may sound, unfortunately it is a double-edged sword. Having the ability to change is tempting and dangerous at the same time.

If you work in a development team, especially one made of mostly remote developers, you might find that without necessary preparations, you will spend plenty of time on obvious bugs fixes, coding guidelines changes (if you have one!) or linting errors patches.

That is one of the reasons why you have to be adequately prepared and automate tasks, which should be performed before someone sends any code change for a review. Even worse, when those changes go straight to the codebase without even realizing they are not written in a correct manner. You have to remember that adding an additional manual step to a development process is not the greatest idea, as people are just not perfect and they may sometimes simply forget one of the steps.

Fortunately, if you use Git, you have a great solution right before you. Git Hooks are just small scripts that are run in a specific time, based on what command you are trying to use at the given moment.

Right now there are 16 available hooks and some of them are `pre-commit`, `post-commit`, `pre-receive` or `pre-rebase`. For a full list you can visit [git hooks documentation](https://www.kernel.org/pub/software/scm/git/docs/githooks.html "git hooks documentation").

Every git repository has its own hooks in a form of separate files named after hook's type, which can be found in `.git/hooks` folder. You can place any script there – bash, node, ruby, as long as it will return valid exit codes, `0` for success or `>= 1` for an error.

The hook that we will use here is called `pre-commit` and is triggered right before our commit gets created. This will help us to warn and prevent the developer from committing broken or wrongly formatted code.

There are two common ways of doing that. You can use either configure hooks on your own, or if you are using npm, you can make use of [precommit-hook](https://github.com/nlf/precommit-hook "precommit-hook") module that will set up hook scripts for you, based on your `package.json` configuration.

Just to keep it simple, we will use only 3 tools as our pre-commit validation, `jshint` for linting process, `jscs` for coding style checks and `tape-run` as our unit tests runner, with addition of `jshint-stylish` and `tap-spec` as our reporters, so everything looks nice and readable. And we will also assume that we are using `npm` here, but if you don't want to use it, feel free to write your git hook by hand, it will work just fine as well.

Let's start by installing `precommit-hook` package and storing it in our package.json file as devDependency.

```sh
$ npm install --save-dev precommit-hook
```

What we only need to do is specify our checks in the exact same file and let the package do the rest (for the sake of simplicity I used only one file and not an entire project structure, so you'd rather want to use wildcards instead, eg. `./src/app/**/*.js` or `./tests/*.js`):

```json
"scripts": {
  "jshint": "jshint app.js --reporter node_modules/jshint-stylish/stylish.js",
  "jscs": "jscs app.js",
  "test": "browserify test.js | tape-run | tap-spec"
},
"precommit": [
  "jshint",
  "jscs",
  "test"
]
```

Now every time we run `git commit`, those three checks will be run in a given order and if any of them fails, a commit won't be created and we will have to fix our errors first.

Ok, but what if you use `gulp` or `grunt`? There is no problem at all, as they are capable of exiting with valid codes as well! In addition to that, `precommit-hook` or your own created hook can use exactly the same commands you'd normally do, as you can set specific environment in which scripts will be run.

As an example here, I will use `gulp` as this is the tool I use on a daily basis.  
 Basic `gulpfile` for our tasks could look like this:

```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var browserify = require('browserify');
var tapeRun = require('tape-run');
var tapSpec = require('tap-spec');

gulp.task('lint', function () {
    return gulp.src('app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

gulp.task('test', function () {
    return browserify('./test.js')
        .bundle()
        .pipe(tapeRun())
        .pipe(tapSpec())
        .pipe(process.stdout);
});

gulp.task('validate', ['lint', 'test']);
```

To make it work with `precommit-hook`, we have to modify what scripts should get run before our commit command will proceed, and since I already mentioned that it is able to work with any command we'd normally use in CLI, it is as easy as it sounds.

```json
"scripts": {
  "validate": "gulp validate"
},
"precommit": [
  "validate"
]
```

That is all. Now it will behave in the same way as we set it up without any build tool and will output exactly the same result in case anything goes wrong.

This was just a few minutes of work that can save you plenty of time in the long run, and for me it should be treated as **must-have** for any projects you are working on.

If you'd like to see whole repository used here, you can visit this [article's github repository](https://github.com/kamilogorek/githooks-article "article's github repository").

---
