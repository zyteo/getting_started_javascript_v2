// 06 Jan 2024, ZY
// Loops

let students = ["Harry", "Ron", "Hermione", "Draco", "Neville"];

const greetStudent = (student) => {
  // ` is an interpolation string
  console.log(`Hello, ${student}!`);
};
for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}

for (let student of students) {
  greetStudent(student);
}

// pop removes the last element of an array and returns it
// while (students.length > 0) {
//     let student = students.pop();
//     greetStudent(student);
// }

// shift removes the first element of an array and returns it
while (students.length > 0) {
  let student = students.shift();
  greetStudent(student);
}
