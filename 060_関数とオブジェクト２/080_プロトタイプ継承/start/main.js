function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

function Japanies(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

Japanies.prototype = Object.create(Person.prototype);
Japanies.prototype.hello = function () {
  console.log("こんにちは " + this.name);
};
Japanies.prototype.bye = function () {
  console.log("さようなら " + this.name);
};

const taro = new Japanies("Taro", 20, "男");
taro.hello();
taro.bye();
