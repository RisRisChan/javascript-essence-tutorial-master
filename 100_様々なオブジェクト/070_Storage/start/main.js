localStorage.setItem("key1", "value1");
const result = localStorage.getItem("key1");
console.log(result);

// localStorage.clear();
// console.log(localStorage.getItem("key1"));

const obj = { a: 0, b: 1, c: 2 };
localStorage.setItem("keyObj", JSON.stringify(obj));
const result2 = localStorage.getItem("keyObj");
console.log(JSON.parse(result2));

console.log("end");
