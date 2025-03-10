function F(a, b) {
  this.a = a;
  this.b = b;

  return { a: 1 };
}
F.prototype.c = function () {};

// const instance = new F(1, 2);
// console.log(instance);

function G(a, b) {
  this.a = a;
  this.b = b;

  return 1;
}
G.prototype.h = function () {};

// const instanceG = new G(1, 2);
// console.log(instanceG);

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  //console.log(result, _this);
  //console.log(typeof result);

  if (typeof result === "object" && result !== null) {
    return result;
  }

  return _this;
}
const instanceOpe = new newOpe(F, 1, 2);
console.log(instanceOpe);
