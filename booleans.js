// 10 Jan 2024, ZY
// Boolean

// Falsy and Truthy values
// Falsy values: -0, 0, "", null, undefined, NaN, false
// Truthy values: everything else. "abc", 1, {}, [], true, function () {}

if (studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}
// above function not very safe because input can be string, not number
// so need to check/filter for numbers

while (newStudents.length) {
  enrolStudents(newStudents.pop());
}

if (!!studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}
//!! is a double negation, which is a way to coerce a value to a boolean

while (newStudents.length > 0) {
  enrolStudents(newStudents.pop());
}

let workshopEnrolment1 = 16;
let workshopEnrolment2 = workshop2Elem.value;

if (Number(workshopEnrolment1) < Number(workshopEnrolment2)) {
  console.log("do something");
}

// implicit coercion can be useful sometimes
// as long as one value is a number, the other will be coerced to a number
if (workshopEnrolment1 < workshopEnrolment2) {
  console.log("do something");
}

// best practices for coercion
// quality JS program makes sure the types involved in every operation are clear

// "If a feature is sometimes useful and sometimes dangerous and if there is a better option, then always use the better option." - Douglas Crockford

// useful - when reader is focused on what's important
// dangerous - when reader can't tell what will happen
// better - when the reader understands the code
