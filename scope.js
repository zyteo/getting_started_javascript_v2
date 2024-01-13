// 13 Jan 2024, ZY
// Scope

// Scope: where to look for things
let teacher = "Kyle";

const otherClass = () => {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
};

otherClass();
// teacher changes from Kyle to Suzy
// topic is not declared before, so after otherClass() is called, topic is declared as a global variable
// this is in non strict / sloppy mode, so topic is declared as a global variable
console.log(teacher);
console.log(topic);

// undefined vs undeclared
// not the same thing
// undefined, is a variable that has been declared but not assigned a value
// undeclared variable, the JS engine doesn't know where to find it
