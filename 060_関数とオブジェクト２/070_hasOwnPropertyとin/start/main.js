function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.hello = function () {
  //     console.log("Object: hello " + this.name);
  //   };
}

Person.prototype.hello = function () {
  console.log("Object: hello " + this.name);
};

// Object.prototype.hello = function () {
//   console.log("Object: hello " + this.name);
// };

const bob = new Person("Bob", 18);
//プロトタイプチェーンは遡らない
console.log(bob.hasOwnProperty("hello"));

//プロトタイプチェーンも遡る
console.log("hello" in bob);
