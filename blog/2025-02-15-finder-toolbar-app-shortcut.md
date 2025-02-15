---
title: 'Customizing the macOS Finder Toolbar with "Open Current Directory in Zed"'
description: "How to add a handy shortcut to your Finder toolbar that allows you to open the current working directory in the editor of your choice."
---

<img src="/assets/images/blog/finder-toolbar-app-shortcut.png" alt="Finder App Shortcut" width="600" style="display: block; margin: 1.5em auto;" />

A friend of mine, Terry, asked a question on Twitter.

> A long time ago, I added this button to open the current folder in vscode.
>
> I obvs want it to open cursor now, but can't figure out how I put it up there!
>
> Anyone know?

— [https://x.com/saltcod/status/1890727453124968831](https://x.com/saltcod/status/1890727453124968831)


Well, I did not know how to do it, but because I always like to learn random things and, most of all, help people, I decided to figure it out. Here's how to do it in a few simple steps.

1. Open the `Automator` app and create a new Application.
2. Add two steps: `Run AppleScript` and `Run Shell Script`.
3. Fill the `AppleScript` step with the script below. It will grab the currently active `Finder` window and extract its current directory.
```txt
on run {input, parameters}
	tell application "Finder"
		set currentFolder to (target of front window) as alias
		return POSIX path of currentFolder
	end tell
end run
```
4. Fill the `Shell Script` step with `/usr/local/bin/zed "$1"` or any other editor of your choice.
5. Press `Cmd + S` to save the automation. It should now be accessible under `Applications` on your system.
6. Go to your `Applications`, right-click the newly saved automation, and select `Get Info`.
7. Drag the application you used in your script and drop it on top of the small icon in the top left corner of the info window. This will give you a nicely styled icon.
8. Open a new `Finder` window (you need two separate windows for this step), right-click on the toolbar, and select `Customize Toolbar...`.
9. Focus on your original `Finder` window with `Applications`, then drag and drop your automation next to the rest of your toolbar icons.
10. You're done! Now you can click your new shortcut in any `Finder` window, and it will open your editor with a workspace set to that very directory.
