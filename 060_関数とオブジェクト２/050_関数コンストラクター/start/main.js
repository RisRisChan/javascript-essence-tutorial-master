let d = 0;

function fn() {
  let d = 1;
  const fn1 = new Function("a", "b", "return a + b + d");
  return fn1;
}

const result = fn(1, 2);
console.log(result);

function fn2(a, b) {
  return a + b;
}

console.log(fn2 instanceof Function);
