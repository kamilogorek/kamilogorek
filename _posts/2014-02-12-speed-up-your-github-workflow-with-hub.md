---
title: Speed up your GitHub workflow with Hub
---

<span style="line-height: 1.5em;">As awesome as Github's web interface is, trying to use it alongside your terminal can be rather time consuming and may slow down your workflow.</span>

Why couldn't you just perform all your common actions straight from the CLI? Well, you can. And it's not just another homemade application. It comes straight from GitHub itself.

Let me introduce you to [Hub](http://hub.github.com/), a simple wrapper around Git's CLI which allows you to make any operation that can be done with GitHub's API.

Opening pull requests, issues or forking are just a few basic and helpful things that'll make your life better.

Installation is pretty straight-forward. Nothing fancy.

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-install-brew.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

Or if you're not an OSX user, you can install it straight from a source.

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-install-source.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

##Basic repositories actions

Let's start from the most common scenario, creating and forking a repository for a new project.

The regular process using a CLI looks like this:

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-repo-raw.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).

</noscript>It doesn't look like something that can be done within seconds. Let's now look how you can do the same thing using Hub:

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-repo.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).

</noscript>If you want to repeat the first scenario using the origin/upstream naming convention, all you need to do are two additional steps:

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-repo-naming.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).

</noscript>**That's all.** Everything straight from your terminal with a few simple steps.

You could even write a small script, which could execute all those commands for you.

Everything that you need to remember is to *correctly set your global Git config*.

## Remotes management and fetching data

Now let's say that after few days into your project, you need to get some changes from multiple forks from your teammates.

Instead of manually adding all remotes and fetching them, you can do the same thing in one step.

Instead of using:  
<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-forks-raw.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

you can now just type `$ git fetch <username>, <username>, <username>` which will repeat above operations for every comma-separated user for you.


## Maintaining commits

Want to do a QA or local code-review for a friend?

I assure you that `$ git checkout https://github.com/<username>/<repo>/pull/<PR.number>` is much smoother and easier to type than:

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-commits.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

Or maybe you just want to grab one commit from your friend's fork without all remote/fetch/cherry-pick hassle.

Easy: Just use `$ git cherry-pick https://github.com/<username>/<repo>/commit/<commit-hash>` and all changes will be applied to your current branch.


## Pull requests

And the thing that saved me the most of my precious time. **Pull requests straight from a CLI**.

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-pr.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

As simple as that. You don't have to go to github.com, select repos, branches, etc.

By default, Hub opens a pull request for an `origin/master`. If you want to use this shorthand you have to set your main repository remote as `origin` and `<username>` as your fork.

If you want to use any remotes names, you can specify BASE and HEAD for a pull request using -b and -h flag.

<script src="https://gist.github.com/b7d3682af00a5ada17bc.js?file=hub-pr-pointers.sh"></script><noscript>View the code on [Gist](https://gist.github.com/b7d3682af00a5ada17bc).</noscript>

**One helpful tip from the official Hub page:** If you're making a new PR, append `| pbcopy` to the whole command. This way you'll instantly get the PR URL copied into your clipboard, ready to post into a ticket or send to co-workers.

Additional shortcuts like opening your GitHub project on a specific page like `git browse` or `git browse -- issues` are just a cherry on top, but it's always good to keep them in mind.

There are many more commands which Hub provides. If you want to wrap your head around it, you can find the documentation in the official project manual [http://hub.github.com/hub.1.html](http://hub.github.com/hub.1.html "http://hub.github.com/hub.1.html").

/Fives!
