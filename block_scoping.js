// 13 Jan 2024, ZY
// Block scoping with let

// instead of IIFE, can use let
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);
  // using let in this block of scope
}
console.log(teacher);

function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
    // tmp exists only in this block of scope
  }
  return y - x;
}

function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }
  return result;
}

function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  if (/^FOO:/.test(str)) {
    return str;
  }
  return str.slice(4);
}

console.log(diff(3, 7));
console.log(formatStr("this is a test"));
console.log(formatStr("FOO: this is a test"));
