class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

//関数として扱うことができる
const obj = Reflect.construct(C, [1, 2]);
console.log(obj);

console.log("a" in obj);
console.log(Reflect.has(obj, "c"));

const bob = {
  name: "Bob",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: "Tom",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello();
  },
};

tom.hello;
Reflect.get(tom, "hello", bob);
