function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

// Object.prototype.hello = function () {
//   console.log("Object:hello " + this.name);
// };

const bob = new Person("Bob", 18);
bob.hello();

console.log(bob.hasOwnProperty("name"));
