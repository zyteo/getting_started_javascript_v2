// 08 Jan 2024, ZY
// NaN

let greeting = 'Hello, Everyone!';

let something = greeting / 2;

console.log(something);
console.log(Number.isNaN(something));
console.log(Number.isNaN(greeting));

// NaN is generally thought of as not a number. however, it's not quite that.

// example: greeting is a string. it's not a number.
// but is it the case that greeting is the not a number special NaN value? no.

// NaN can appear anytime math/numeric operations are performed.
// always test/check for NaN when doing math operations.