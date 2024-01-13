// 13 Jan 2024, ZY
// Immediately Invoked Function Expression (IIFE)

// different from function declarationa
let teacher = "Kyle";

(function anotherTeacher() {
  let teacher = "Suzy";
  console.log(teacher);
})();
// new block of scope in the function anotherTeachers
// making a teacher variable inside this function
// not overriding the teacher variable in the outer scope
// allows for encapsulation so don't pollute other parts of program

//teacher is still Kyle
console.log(teacher);
