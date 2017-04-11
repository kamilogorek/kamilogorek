---
title: "JavaScript ES5 Array Iteration Methods Explained"
---

Although JavaScript ECMAScript 6 is just around the corner, there're still plenty of developers that are not aware of possibilities given to them in ES5 edition, in terms of arrays-based operations. Let's go through all seven of them and explain how they work one-by-one.

## New ES5 methods

### forEach

Let's start with the basics: the `forEach` method. A few years ago when we wanted to iterate through an array and perform some kind of action, we would probably just use a regular `for` loop. Something as simple as this:

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=for.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>

**#protip: V8 and other JS engines nowadays are performing some optimizations on their own, therefore you'd not have to cache array length anymore.**

But now, we're able to simplify it even more and use our `forEach` method instead:

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=foreach.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>We can think of `forEach` as a base for every other method, as internally the concept of iterating over an array and performing some kind of action is exactly the same.

*There's no way to break `forEach` iteration, therefore if you need that feature, you've to choose different approach.*

### map

But what if I want to immediately return a collection of those function calls? `map` method is here to help. It applies the given function to every single element of an array and return new one with modified values.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=map.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>*Please keep in mind that all methods we're going to talk about here are not mutating their input, therefore here, `foo` is still equal to `[0, 1, 2, 3]`.*

### reduce

To transform an array into a single value, you can use `reduce` method. Its signature has an additional argument after the function call, which is a starting accumulator value. If this value is not provided, then the first value of an array will be used and it will be skipped in an iteration process. Also arguments for a function itself are not in `value, index` form, but `accumulator, value, index` instead.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=reduce.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).
</noscript>
`reduce` in pair with `map` is widely used in programming and referred to as a `mapReduce` model, where given data set is first processed and only then generalized. You can find an example of similar usage in the next section.

A different common use case of the `reduce` function is creating a recursive `flatten` function, which can (as the name says), flatten a multidimensional array into a single-dimensional representation.

Here's an implementation of the `flatten` function:

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=flatten.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>

### reduceRight

It behaves exactly the same as `reduce` function, with the only difference of iterating an array backwards, from right to the left side.

### filter

Returns a copy of an array, including only values that pass the given condition.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=filter.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>
*In all array methods, passed functions can be defined before as well, just like we did here.*

### some

Returns `true` if *any* value passes the given condition, returns `false` otherwise.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=some.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>

### every

Returns `true` only if *all* values pass the given condition, returns `false` otherwise.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=every.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>
`some` and `every` function will help you get rid of redundant iteration flags, like the one in the example below:

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=every-flag.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>An additional benefit of using those methods is that they will break the iteration immediately when they find the first matching/non-matching value. If we'd iterate over thousands of values, this might give us small performance gain.


## Usage examples

### Counting total number of votes

You're working with an API that's returning an array of movies objects and every movie has a ‘votes' property. But of course that'd be too easy, so let's assume that you don't have a control over this API and ‘votes' is provided as a string containing `votes` prefix, eg. `1 vote`, `4 votes`, `48 votes` and so on.

It all can be boiled down to two function calls, `map` and `reduce`.  
`map` will get necessary data and modify it to our needs and `reduce` will squeeze it down to a single value.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=votes.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>It's very readable and descriptive approach. You can track data flow from the top to bottom, one call after another.

### Get movies with rating over N

Similar scenario, but this time we want to create a function for our imaginary select box, which can filter down a displayed list of movies.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=movies-rating.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>You could get even fancier by using partial function application (currying) and create predefined rating-based functions:

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=movies-rating-curried.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).</noscript>

### Making sure that user made choices for all select boxes from a form

Simple scenario. We have a form that the user has to fill in. There are 3 text inputs and 8 select boxes, and all of them are required. How can you quickly make sure that they're all filled in?

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=validation.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>Now if any of your `input` or `select` boxes will have an no or `0` value, the function will return `false` which will explicitly answer the given question `isFormFilled`?

Of course `every` method's check is completely up to you and you can perform any validation methods in there.

### Finding maximum string length with `reduce`

Iterate through all values, get their lengths and compare to each other. Then return characters count of the longest one.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=longest-word.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>
## Cross-browser compatibility issues

If you're still concerned about backward compatibility with browsers like IE8, there are plenty of options you can choose from. [Amp](http://amp.ampersandjs.com/), [Lo-Dash](http://lodash.com/), [Underscore](http://underscorejs.org/) to just name a few. Utilities libraries are very popular lately, therefore you won't have any problems with finding one that will suit your needs.

The only difference you'll probably encounter is that those functions won't be bound to array prototype, therefore you'll have to call them as a regular functions, passing an array as the first argument eg.

<script src="https://gist.github.com/ab14da9f84de14452a62.js?file=utils.js"></script><noscript>View the code on [Gist](https://gist.github.com/ab14da9f84de14452a62).

</noscript>
## More informations

If you want to read in depth about all available methods, their quirks, browser incompatibilities etc., go to [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), where you can find every piece of information you'll need.
