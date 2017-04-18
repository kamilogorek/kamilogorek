---
title: "Highlights of This Year's EuroClojure and ReactiveConf"
excerpt: "If you love old architecture and castles, you'll fall for Bratislava. Easily one of the most beautiful places you can visit in Europe, this Slovakian capital is small enough that you can drive/walk quickly to most places, but big enough to fill your schedule for a few days. It may surprise some to find out that, when it comes to software development, the area is very quickly becoming one of the European tech hubs. Last month, Bratislava hosted two big conferences in one week."
---

_Originally posted on [corgibytes.com](http://corgibytes.com/blog/2016/11/08/bratislava-conferences/)_

---

If you love old architecture and castles, you'll fall for Bratislava. Easily one of the most beautiful places you can visit in Europe, this Slovakian capital is small enough that you can drive/walk quickly to most places, but big enough to fill your schedule for a few days. It's also very close to Vienna (Austria), making it a real two-for-one bargain! Both places are very cheap, offer plenty of attractions and great -- oooh great -- food! It may surprise some to find out that, when it comes to software development, the area is very quickly becoming one of the European tech hubs. Last month, Bratislava hosted two big conferences in one week:

* [EuroClojure](http://euroclojure.org/), the biggest Clojure-related conference, created by Cognicast (a company where Rich Hickey, creator of Clojure, and David Nolen, creator of ClojureScript, both work), and
* [ReactiveConf](https://reactiveconf.com), which gathers all the ideas around reactive programming, asynchrony, real-time, React.js or React Native.

---

## The Extras

Both conferences were hosted in the Old Market Hall, called [Stará tržnica](http://staratrznica.sk/). It's a huge, open-space building, and everything took place in the big room, which has a balcony surrounding it. It was a great idea to hold the event there, as you could always go grab a coffee, some pastries and still enjoy your talks, without missing a second. The sound was also very good, and you could hear everything from almost every place in the room. And the addition of a few screens only made it all that much easier.

The food (even though on the first day of EuroClojure I missed lunch :( because I went for a walk and they didn't have enough food) was just top-notch! I was even joking that they make my bulk-season very easy, as I could eat everything in there, and still wouldn't have enough. Slavic cuisine is just something that you have to try, and I promise, you'll fall in love with it.

Swag and promotional materials were very detailed and minimalistic. No unnecessary things, just a t-shirt, local honey wine and a snack. All useful things! I loved the schedule, which was printed as a page from an old paper, and the personalized stickers from ReactiveConf, where they used the speakers' talks to create wordplays: eg. "Clojure your eyes for David Nolen," "Rethink your DB with Michael Glukhovsky," "Look at the code from the different Angular with Igor Minar," "Spend 3 days in magic rEaLM with Richard Feldman." Unfortunately, the schedule wasn't useful during Day 1, as it changed quite a lot. I would have liked to have it printed on the small badge, or as an additional badge with only the schedule on it.

Oh, let's not forget about the after-parties! Although I'm a huge introvert and rarely talk to strangers (Ha! I forced myself just once during the last after-party, to talk to and thank David Nolen for all his talks, knowledge and work), I went to each one of them. And boy, oh boy, that Ice Bar after the first ReactiveConf's day was a blast! About -10 C (14 F), the room covered with ice, shot glasses made of ice that you could break after drinking your shot, and blue and red lights everywhere. Wow!

---

## The Talks

My one-sentence summary for each of the conferences would be:

* EuroClojure – "Am I really that stupid?"
* ReactiveConf – "I've already seen it somewhere."

I don't know much Clojure (yet!), but I really want to learn it. This conference simply showed me just how much of a long haul that will be. But I'll get there… one day!

And don't get me wrong on ReactiveConf, it was a great experience, and I learned a lot of new things. But as a person who follows "Twitter Trends" every day, watches all conference recordings and reads quite a lot of articles, I simply felt that I already knew most of the elements presented in the talks. It felt like some things were just iterations on technologies that our industry saw years ago, and we are now coming full circle on.

### EuroClojure

I enjoyed a lot of talks, but some of them just blew me away. My best of EuroClojure:

#### Keynote: Now What? – David Nolen

One of my favorite speakers ever. He's the creator of [ClojureScript](https://github.com/clojure/clojurescript), and every single talk of his is great. He takes and moves ideas from one programming paradigm or from one language to another, which so far works great. Heard of immutability, single state atom, hot-reloading or pure functions for UI development? ClojureScript has it all. This time, he was talking about how he wants to take ClojureScript to a much larger audience, what pieces of language he will focus on, what are the fundamentals that we should never forget, and how to make it easier for newcomers to get into the language.

#### Clojure Is Not Afraid of the GPU – Dragan Djuric

Performing millions of mathematical operations using a hardware that's more suitable than CPU, our good old GPU. How the internal works, why is it so hard to do that now, and how it compares to CPU operations. He described a few libraries that he wrote and how they compare to the same functions written in Clojure, Java, C, Python or other libraries written in mentioned languages. He was able to get as low as seconds instead of hours, or microseconds instead of milliseconds which sounds almost impossible!

#### Making Machines that Make Music – Srihari Sriraman

Generating music as close to "human" as possible. Using machine learning predictions to determine how to do it was a great idea. He showed how to translate music (Indian music, I believe, which sounds very different than our western music) and its concepts to a "computer language" and how to generate random melodies that sound like they have been actually written by us, humans.

#### Keynote: Genetic Programming with clojure.spec – Carin Meier

Self-healing code and [clojure.spec](http://clojure.org/about/spec), just wow! The concept of a function that's able to modify itself, based on other "donor" functions is simply awesome. And using clojure.spec to do that makes it much simpler than you thought. The first part of the talk covered how we can distinguish developers using the so-called "Four Tribes of Programmers": Explorers, Alchemists, Wrestlers and Detectives. I really like that idea, it reminds me of Corgibytes' [Makers and Menders](http://corgibytes.com/blog/makers/menders/software/2015/08/14/makers-vs-menders/). And what *is* clojure.spec exactly and how we can use it for genetic programming. You should definitely see that talk for yourself! But until it's released, here are the [slides](http://www.slideshare.net/gigasquidcm/genetic-programming-with-clojurespec-and-beyond). Enjoy!

### ReactiveConf

And, now, my best of ReactiveConf:

#### Testing the Way It Should Be – Brian Mann

[Cypress.io](https://www.cypress.io/), functional testing framework, written from scratch, without Phantom.js which was the main source of most of the problems with testing nowadays. It looks great, works great and is already in beta. You just have to ask for access. It provides you with time travel, dom snapshots, great error messages, a very simple and readable API and makes working with async code a cinch. Not only do they provide a library, but also an electron-based UI, which speeds up your workflow quite a lot! I will definitely use it with my next project as soon as I can.

#### Visualizing the Data Flow With Cycle.js – André Staltz

A lot of people say André Staltz is a very controversial persona, but I have to admit that he is frequently right and he's able to change how people think about some concepts. And that's huge! I also heard that he's a Rockstar, but I cannot confirm that, as he forgot his shades (see the very same talk's vid from FutureFest to see what I'm talking about ;)). How observables work presented using Legos, yes, the very same Legos you probably played with as a child. How they work, why it is easy to debug them and how to do this, why we lack good debugging tools and why debugger just shows you a detailed picture of your code, instead of a whole picture. Mental model of a software is something that we don't think enough about, and this is one of the issues that he is trying to solve. He presented [Cycle.js](https://cycle.js.org/) Developer Tools that makes reasoning about your code much easier by visualizing a whole data flow for every single action or observable event.

#### No Xcode, Android Studio, Java, Swift, Objective C - How Far Can JavaScript Get You? – Brent Vatne

He talked about [Exponent](https://getexponent.com/), which is a "framework" on top of React Native. It helps you with a lot of mundane tasks that require plenty of boilerplates and unify some things across Android/iOS development. But best of all, it doesn't make you use XCode or Android Studio! I had the "pleasure" of working with React Native last month on a new project, and the biggest pinpoint was indeed Android Studio. It's slow, CPU and memory heavy and it takes some time to actually get it running, even when following a simple step-by-step tutorial. I'll definitely give Exponent a try the next time I'm working with a mobile app.

That's it for now.

See you next year, folks!

---
