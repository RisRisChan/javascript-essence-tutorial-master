function Person1(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    return this._name;
  },
  set: function (val) {
    this._name = val;
  },
});

const p1 = new Person1("Bob", 10);
// console.log(p1.name);
