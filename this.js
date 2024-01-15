// 15 Jan 2024, ZY
// this

//A function's this references the execution context for that call, determined entirely by how the function was called.

// different context each time it's called, makes it more flexible and reusable
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");
// above line allows the ask function to use workshop as its context

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?");
}

otherClass();
