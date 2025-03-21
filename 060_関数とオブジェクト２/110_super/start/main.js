class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("hello " + this.name);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }

  hello() {
    super.hello();
    console.log("Konnichiwa " + this.name);
  }

  bye() {
    console.log("Sayonara " + this.name);
  }
}

const taro = new Japanese("Taro", 23, "Male");
console.log(taro);
taro.hello();

const american = {
  hello() {
    console.log("hello2 " + this.name);
  },
};

const bob = {
  name: "Bob",
  hello() {
    super.hello();
    console.log("hello3 " + this.name);
  },
};
//オブジェクトリテラルの中でしか使用不可
// bob.bye = function () {
//   super.hello();
// };

Object.setPrototypeOf(bob, american);
bob.hello();
