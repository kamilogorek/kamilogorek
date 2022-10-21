---
title: "Speed Up Your GitHub Workflow With Hub"
excerpt: "As awesome as Github's web interface is, trying to use it alongside your terminal can be rather time consuming and may slow down your workflow.

Why couldn't you just perform all your common actions straight from the CLI? Well, you can. And it's not just another homemade application. It comes straight from GitHub itself."
---

_Originally posted on [x-team.com](https://x-team.com/blog/speed-up-your-github-workflow-with-hub/)_

---

As awesome as Github's web interface is, trying to use it alongside your terminal can be rather time consuming and may slow down your workflow.

Why couldn't you just perform all your common actions straight from the CLI? Well, you can. And it's not just another homemade application. It comes straight from GitHub itself.

Let me introduce you to [Hub](http://hub.github.com/), a simple wrapper around Git's CLI which allows you to make any operation that can be done with GitHub's API.

Opening pull requests, issues or forking are just a few basic and helpful things that'll make your life better.

Installation is pretty straight-forward. Nothing fancy.

```sh
$ brew install hub
$ alias git=hub
```

Or if you're not an OSX user, you can install it straight from a source.

```sh
$ git clone https://github.com/github/hub.git && cd $_
$ rake install prefix=/usr/local
$ alias git=hub
```

---

## Basic repositories actions

Let's start from the most common scenario, creating and forking a repository for a new project.

The regular process using a CLI looks like this:

```sh
Go to github.com, create a new repository.
Either clone newly created repository or `$ git init` locally and then `$ git remote add upstream <repo-url>`.
$ git add -A
$ git commit -m "Init commit"
$ git push upstream master
Go to github.com/<username>/<repo> and fork repository manually.
$ git remote add <username> <fork-url> or $ git remote add origin <fork-url> (if you use origin/upstream naming convention)
```

It doesn't look like something that can be done within seconds. Let's now look how you can do the same thing using Hub:

```sh
$ git init
$ git add -A
$ git commit -m "Init commit"
$ git create -d "Brand new project" (this will create repository with the same name as current directory)
$ git push origin master
$ git fork
```

If you want to repeat the first scenario using the origin/upstream naming convention, all you need to do are two additional steps:

```sh
$ git branch -m origin upstream
$ git branch -m <username> origin
```

**That's all.** Everything straight from your terminal with a few simple steps.

You could even write a small script, which could execute all those commands for you.

Everything that you need to remember is to _correctly set your global Git config_.

---

## Remotes management and fetching data

Now let's say that after few days into your project, you need to get some changes from multiple forks from your teammates.

Instead of manually adding all remotes and fetching them, you can do the same thing in one step.

Instead of using:

```sh
$ git remote add <username> <fork-url>
$ git fetch <username>
times number of forks you want to add
```

you can now just type `$ git fetch <username>, <username>, <username>` which will repeat above operations for every comma-separated user for you.

---

## Maintaining commits

Want to do a QA or local code-review for a friend?

I assure you that `$ git checkout https://github.com/<username>/<repo>/pull/<PR.number>` is much smoother and easier to type than:

```sh
$ git remote add <username> <fork-url>
$ git fetch <username>
$ git checkout <PR-branch-name>
```

Or maybe you just want to grab one commit from your friend's fork without all remote/fetch/cherry-pick hassle.

Easy: Just use `$ git cherry-pick https://github.com/<username>/<repo>/commit/<commit-hash>` and all changes will be applied to your current branch.

---

## Pull requests

And the thing that saved me the most of my precious time. **Pull requests straight from a CLI**.

```sh
$ git push <username> <branch-name>
$ git pull-request -m "Fix for slow workflow process"
```

As simple as that. You don't have to go to github.com, select repos, branches, etc.

By default, Hub opens a pull request for an `origin/master`. If you want to use this shorthand you have to set your main repository remote as `origin` and `<username>` as your fork.

If you want to use any remotes names, you can specify BASE and HEAD for a pull request using -b and -h flag.

```sh
$ git pull-request -m "Fix for slow workflow process" -b <username>/<repo> -h <your-fork>/<repo>
```

**One helpful tip from the official Hub page:** If you're making a new PR, append `| pbcopy` to the whole command. This way you'll instantly get the PR URL copied into your clipboard, ready to post into a ticket or send to co-workers.

Additional shortcuts like opening your GitHub project on a specific page like `git browse` or `git browse -- issues` are just a cherry on top, but it's always good to keep them in mind.

There are many more commands which Hub provides. If you want to wrap your head around it, you can find the documentation in the official project manual [http://hub.github.com/hub.1.html](http://hub.github.com/hub.1.html "http://hub.github.com/hub.1.html").

/Fives!
