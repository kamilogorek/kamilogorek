---
title: "Starting a Journey with Clojure and ClojureScript"
excerpt: "If you've never tried functional programming development, I assure you that this is one of the best time investments you can make. You will not only learn a new programming language, but also a completely new way of thinking. A completely different paradigm."
---

_Originally posted on [corgibytes.com](http://corgibytes.com/blog/2017/01/03/clojure-journey/)_

---

![Stack of Books](/assets/images/blog/stack-of-books.jpg)

[Clojure](https://clojure.org), as described on their official page:

"_Clojure is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming. Clojure is a compiled language, yet remains completely dynamic – every feature supported by Clojure is supported at runtime. Clojure provides easy access to the Java frameworks, with optional type hints and type inference, to ensure that calls to Java can avoid reflection._

_Clojure is a dialect of Lisp, and shares with Lisp the code-as-data philosophy and a powerful macro system. Clojure is predominantly a functional programming language, and features a rich set of immutable, persistent data structures. When mutable state is needed, Clojure offers a software transactional memory system and reactive Agent system that ensure clean, correct, multithreaded designs._"

---

## Why Functional Programming

If you've never tried functional programming development, I assure you that this is one of the best time investments you can make. You will not only learn a new programming language, but also a completely new way of thinking. A completely different paradigm.

Functional programming is on the rise. Clojure, Scala, F#, Erlang, Elixir, Elm, Haskell, only to name a few. Those are all functional languages, used by the biggest companies in the world to drive their major systems.

It's good to understand how they work, but it's even better to be able to write something using them. Always remember one thing: "A programming language is just another tool." You should always pick a language based on your needs, not on how hyped it is or how much you love it. FP is the biggest paradigm next to OO and learning its basics will be worth it long term.

---

## Why Clojure

### "Made simple"

[Rich Hickey](https://twitter.com/richhickey?lang=en) made it very clear that Clojure is, and will always be, a simple language. Minimal syntax, very condensed and short API, no types. That simplicity, when comparing to other functional languages, makes it relatively easy to learn Clojure.

There's no better way to understand the reasoning behind the choices than to listen to the creator himself. In just an hour, you'll get it:

[Clojure Made Simple - Rich Hickey](https://www.youtube.com/watch?v=VSdnJDO-xdg)

If you still need convincing, here is more of his reasoning:

[Simplicity Matters — Rich Hickey](https://www.youtube.com/watch?v=rI8tNMsozo0)

[Hammock Driven Development — Rich Hickey](https://www.youtube.com/watch?v=f84n5oFoZBc)

Even [Robert C. Martin](https://twitter.com/unclebobmartin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) aka Uncle Bob likes it! In my eyes, that's an extra five points in favor of "why I should choose Clojure."

### Java

I know, people tend to hate on [Java](https://www.java.com/en/) because it's a huge monolith, yada, yada, yada, and it's Java. And for most of them, it should be put on the cons list rather than on the pros. But take a look at it from this perspective:

- plenty of people already know Java
- you can run it on almost anything
- there are well-established tooling and libraries
- it's battle tested

Other than for personal beliefs, I don't see why you wouldn't give it a try. Just like when you were introduced to new foods as a child, there's a huge chance that "you don't like it" without even having tried it. Yeees, I know everyone has done that at least once in their lifetime!

### ClojureScript

> [ClojureScript](https://clojurescript.org/) is a compiler for Clojure that targets JavaScript.

To paraphrase [Sauron](https://en.wikipedia.org/wiki/One_Ring): "One language to rule them all, One language to find them, One language to bring them all and in the darkness bind them."

What if you could kill two birds with one stone? Would that convince you even more?

"Developers hate him! See how he targeted all the biggest platforms using one simple trick!"

Java is huuuge, we all know that. But you know what's the second biggest platform? Web. Browsers. Internet of Things. You can target all of those platforms with one language.

ClojureScript is exactly the same thing as Clojure, but it's compiled and emits JavaScript code. It takes care of all the quirks and can be transpiled almost exactly 1-to-1. Almost. There's always something, and this time we have to keep in mind that there's Java interop for Clojure and browsers API interop for ClojureScript, but it's a minor part of the language. All the core things work in the very same way. You can find plenty of case studies where people have taken their huge Clojure applications and translated them to JavaScript within a day or two.

The best introduction to this concept is this talk: [Clojure All the Way Down: Finally a Useful LISP — Ricardo J. Méndez](https://www.youtube.com/watch?v=do-_nQL6tJg)

---

## How

"Alright, but how should I approach my learning process?"

There are two ways: books and videos. Some people prefer the former and some the latter. I tried both and, to be honest, the latter one is my preferred method (although you might think it's the other way around by the photo I chose as an intro to this post). I enjoy the feeling of being "mentored" very much. I just like it more when someone is talking to me and demonstrating how things are done, rather than just reading about it.

### Books

There are tons of books about Clojure. _[Clojure in Action](https://www.amazon.com/Clojure-Action-Elegant-Applications-JVM/dp/1935182595)_, _[Clojure Programming](https://www.amazon.com/Clojure-Programming-Practical-Lisp-World/dp/1449394701)_, _[The Joy of Clojure](https://www.amazon.com/Joy-Clojure-Michael-Fogus/dp/1617291412/ref=dp_ob_title_bk)_, but I'd like to focus on two positions:

- _[Clojure for the Brave and True](http://www.braveclojure.com/) — Daniel Higginbotham_  
  It's not often the case, but this book is **FREE** and you can jump to reading it straight away. Of course, I highly encourage you to buy a printed copy! It's one of the best books you can find on the topic. It explores it in a very easy to digest manner and approaches it from the point of view of people completely new to the functional programming world.

- _[Living Clojure](http://www.goodreads.com/book/show/24701168-living-clojure) — Carin Meier_  
  Carin's writing is the shortest of all the mentioned books, and it's also the most condensed one. You'll find everything you need to start your journey with Clojure. It's also written somewhat as a tale about "Alice's Adventures in Wonderland." How cool is that?! It also contains what I found to be a great concept that could also help many of you: a "Weekly Living Clojure Training Plan!" It's split into seven weekly assignments, and step-by-step guide to learning Clojure.

### Courses

**[PurelyFunctionalTV — Eric Normand](https://purelyfunctional.tv)**

This is the best resource I've ever found when it comes to learning a new language from scratch. It holds your hand and guides you through all the basics, advanced topics and writing a whole complex application, explaining everything along the way.

**[The Clojure Language — Brian Will](https://www.youtube.com/watch?v=9A9qsaZZefw&list=PLAC43CFB134E85266)** and **[Clojure Fundamentals — Alan Dipert](https://www.pluralsight.com/courses/clojure-fundamentals-part-one)**

Those two series are front-to-back introductions to Clojure. They both go through all the core concepts of the language and contain everything you need to know to start working on your projects.

**[Lambda Island](https://lambdaisland.com)**

This one isn't a course "per se," but rather a series of tutorials on Clojure and ClojureScript. Very useful when we are at a given point in our learning process and would like to dive deeper into a specific topic.

### Additional resources

Although I'll openly admit that I haven't read them yet, these are books that were often recommended. I am told they provide more understanding about Functional Programming. I'll read them one day!

- [The Little Schemer](http://www.goodreads.com/book/show/548914.The_Little_Schemer) by Daniel P. Friedman and Matthias Felleisen
- [Structure and Interpretation of Computer Programs](http://www.goodreads.com/book/show/43713.Structure_and_Interpretation_of_Computer_Programs) by Harold Abelson, Gerald Jay Sussman and Julie Sussman
- [Purely Functional Data Structures](http://www.goodreads.com/book/show/594288.Purely_Functional_Data_Structures) by Chris Okasaki
- [An Introduction to Functional Programming Through Lambda Calculus](http://www.goodreads.com/book/show/12169041-an-introduction-to-functional-programming-through-lambda-calculus) by Greg Michaelson

---
