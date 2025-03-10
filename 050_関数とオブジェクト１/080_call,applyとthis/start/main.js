function a(age) {
  console.log("hello " + this.name + age);
}

const tim = { name: "Tim" }
const b = a.bind(tim);

b();

a.apply(tim, [16]);
a.call(tim, 16);

const array = [1,2,3,4,5];
let max = Math.max.apply(null, array); //ES5までの書き方
let max2 = Math.max(...array); //ES6〜

console.log(max);
console.log(max2);

