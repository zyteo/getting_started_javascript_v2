// 10 Jan 2024, ZY
// Coercion

let msg1 = "There are ";
let numStudents = 16;
let msg2 = " students in the class.";
console.log(msg1 + numStudents + msg2);

// 16 coerced from number to string

console.log(`There are ${numStudents + ""} students in the class.`);
// with the +"" we are coercing the number to a string
// this is explicit cosercion
console.log(`There are ${numStudents} students in the class.`);
// this is implicit coercion

// number + number = number
// number + string = string
// string + number = string
// string + string = string

const addAStudent = (numStudents) => {
  return numStudents + 1;
};

addAStudent(Number(studentsInputElem.value));
