// 16 Jan 2024, ZY
// Prototypes

function Workshop(teacher) {
  this.teacher = teacher;
}

// prototype is an object that is shared among all instances of a class
Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");

reactJS.ask("Isn't 'prototype' ugly?");
