// 08 Jan 2024, ZY
// New

// use new:
// Object()
// Array()
// Date()
// RegExp()
// Function()
// Error()

// don't use new:
// String()
// Number()
// Boolean()
// use as functions. because when calling these, the variable changes into that type.
// above are useful for type conversion

let yesterday = new Date("January 7, 2024");
console.log(yesterday.toDateString());
console.log(yesterday.toUTCString());

transcript = { gpa: 4.56 };
let myGPA = String(transcript.gpa);
console.log(myGPA);
console.log(typeof myGPA);
console.log(typeof transcript.gpa);