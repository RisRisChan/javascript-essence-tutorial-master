//new演算子は用いない
const s1 = Symbol("hello");
const s2 = Symbol("hello");
console.log(s1);
console.log(s2);
console.log(s1 === s2);

String.prototype[s1] = function () {
  return "hello" + this;
};

const tom = "Tom";
console.log(tom[s1]());
