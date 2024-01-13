// 13 Jan 2024, ZY
// Equality

// == vs ===
// normally, it is stated that == is loose equality and === is strict equality
// should see as == allows coercion and === disallows coercion

let studentName1 = "Frank";
let studentName2 = `${studentName1}`;

let workshopEnrolment1 = 16;
let workshopEnrolment2 = workshopEnrolment1 + 0;

console.log(studentName1 == studentName2);
console.log(studentName1 === studentName2);

console.log(workshopEnrolment1 == workshopEnrolment2);
console.log(workshopEnrolment1 === workshopEnrolment2);

//true for all above

let workshop1 = { topic: null };
let workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined)
) {
  console.log("do something");
}

if (workshop1.topic == null && workshop2.topic == null) {
  console.log("do something");
}

// above two are equivalent. but second much shorter and easier to read/understand

// == is not about comparison with unknown types
// is about comparison with known types. optionally, where conversions are helpful
// JS has a dynamic type system, uses various forms of coercion for value type conversion, including equality comparisons

// cannot write quality JS programs without knowing the types involved in every operation
