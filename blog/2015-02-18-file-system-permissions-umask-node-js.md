---
title: "File System Permissions and Umask in Node.js"
description: "Working as a developer sometimes requires more knowledge than just of programming itself. It's always a good idea to grasp some concepts from other IT fields as well. One of these concepts are file system permissions, proper management of which is a must when it comes to working with files, eg. using node.js fs module."
---

_Originally posted on [x-team.com](https://x-team.com/blog/file-system-permissions-umask-node-js/)_

---

Working as a developer sometimes requires more knowledge than just of programming itself. It's always a good idea to grasp some concepts from other IT fields as well.

One of these concepts are [file system permissions](http://en.wikipedia.org/wiki/File_system_permissions), proper management of which is a must when it comes to working with files, eg. using node.js `fs` module.

I won't write what exactly `777` or `r/w/x` exactly mean, as it's very broad topic, but I'll try to show how we can use those concepts in node.js world.

Where may it come handy? Definitely when we want to create new folders or files and be sure that only certain people have access to them. Let's take a look at signatures of some `fs` module functions.

```js
fs.mkdir(path[, mode], callback);
```

```js
fs.writeFile(filename, data[, options], callback);
```

In both cases we're able to set something called `mode`, where for `mkdir` it's passed as an argument and for `writeFile` it's one of the `options` object attributes.

Getting `mode` may be slightly overwhelming at first if you've never worked with it, but I'll explain every part separately.

```js
const mode = 0777 & ~process.umask();
```

- when you prefix a number with `0`, it becomes an octal (8 based) representation, eg. `12` decimal becomes `14` octal because `1*(8^1) + 4*(8^0) = 12`
- `process.umask()` returns decimal representation, which is dependent on the `node` process we're running (with what permissions it has been run)
- `~` inverts all bits in binary representation of the number eg. `0001` becomes `1110`. For decimals, `~` returns `-(x + 1)`, so `~5` returns `-6`
- `&` takes only those bits that are both `1` on the same positions – binary `AND` operator

And to make everything even more clear, let's write one quick example using real numbers, keeping in mind that first 0 is only telling JS to treat number as an octal representation.

```txt
Initial mode:                   0777(8) = 111111111(2) // user r/w/x, group r/w/x, other r/w/x
Process mask:                    022(8) = 000010010(2)
Reversed process mask:          0755(8) = 111101101(2) // user r/w/x, group r/x,   other r/x
Initial mode AND reversed mask: 0755(8) = 111101101(2) // user r/w/x, group r/x,   other r/x
```

If AND operation returns exactly the same result as reversed process mask itself, why don't we just return the mask, you may ask? Because this way we can restrict default permissions. Let me show you this on the second example.

```txt
Initial mode:                   0666(8) = 110110110(2) // user r/w,   group r/w, other r/w
Process mask:                    022(8) = 000010010(2)
Reversed process mask:          0755(8) = 111101101(2) // user r/w/x, group r/x, other r/x
Initial mode AND reversed mask: 0644(8) = 110100100(2) // user r/w,   group r,   other r
```

Here we've got `0664` instead of `0755` as our mode. Why is that?
– We've asked for `r/w` permissions for everyone
 – Process has `r/w/x` for user and `r/x` for group and other
 – Process allows us to use `read` permissions that we asked for
 – Process disallows us to use `write` permissions as process itself doesn't have them
 – Process has one additional permission which is `execute` for everyone, but because we haven't asked for it, it's ignored

Now that we've our `mode`, we can go ahead and be sure that we know what we're doing and what permissions to our newly created files people will have.

It's worth mentioning that `0777 & ~process.umask()` for folders and `0666 & ~process.umask()` for files are exactly what your system would do on it's own if you would leave those parameters.

If you got interested (remember, JavaScript is not the only thing worth knowing!), you should definitely dive more into studying the basics of IT science.
