---
title: "Sentry Now Translates Errors From Edge and IE"
description: "Internet Explorer and Edge throw errors in the end user’s language. If your end user speaks Polish, they throw a Polish language error. If your end user speaks French, they throw a French language error. If your end user speaks German they throw a Spanish language error, but only if that end user accidentally set their Windows language to Spanish and they aren’t sure how to fix it; otherwise the error is in German."
---

_Originally posted on [sentry.io](https://blog.sentry.io/2018/02/28/internet-explorer-translations/)_

---

Internet Explorer and Edge throw errors in the end user’s language. If your end user speaks Polish, they throw a Polish language error. If your end user speaks French, they throw a French language error. If your end user speaks German they throw a Spanish language error, but only if that end user accidentally set their Windows language to Spanish and they aren’t sure how to fix it; otherwise the error is in German.

Now, if both you and your end user are Brazilian, seeing the error in Portuguese is not unhelpful.

![Selenium Graph](/assets/images/blog/polish-error.png)

_An error in Polish, not Portuguese, but you get the point_

The problem is that:

- No other browser does this. Chrome, Firefox, and Safari all throw errors in English.
- You’re very likely to have users who speak a wide variety of languages, which means you’re almost certainly going to end up with plenty of individual errors that each appear to be multiple different errors.

So if you had the same IE issue in 20 different countries, you’d end up with 20 different error messages. Though Sentry would still use the stack trace to group all these errors into a single Issue, the variety of messages could make it more difficult to measure an issue’s impact and severity, and then to appropriately resolve it once you’ve managed to do so. We’ve experienced this problem ourselves, puzzling over errors thrown in languages we don’t speak.

Which is exactly why Sentry now automatically translates Edge and IE errors to English.

How do we do that?

We have a large, indexed dictionary of almost every error across all IE supported languages (taken from this open-sourced [dataset](https://github.com/errorception/ie-error-languages)). Once the error is extracted from the client, we look over each frame of the stack trace to ensure it’s actually an error and not a custom message created by you, since a custom message wouldn’t be easily translatable.

We have the message. We have our dictionary. Now we can check to see if there’s a match somewhere. Let’s say we have an IE error in Spanish and it’s indexed in the dictionary as IE error number 962. We can then grab the number 962 message in English and create a regex that parses out the placeholders, like “There’s been an error [something here] with a value of [something else here] and yada yada yada.”

![Translated Error](/assets/images/blog/translated-error.png)

_A translated error_

And that’s pretty much that. Now most errors thrown in Edge or IE across ten languages will appear to you as one error in one language, making the problem easier to tackle.

Have questions? Don’t hesitate to reach out to our [support engineers](https://sentry.io/contact/support/). They’re here to help. And also to code. But mostly to help.
