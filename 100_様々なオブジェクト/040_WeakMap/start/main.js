const wm = new WeakMap();

let obj = {};
wm.set(obj, "value1");
console.log(wm.get(obj));

// obj = {};
// console.log(wm.get(obj));

console.log(wm.has(obj));

console.log(wm.delete(obj));
console.log(wm.get(obj));
