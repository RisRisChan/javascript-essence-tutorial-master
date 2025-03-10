"use strict";
// const obj = { prop: 0 };
// const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
// console.log(descriptor);

const obj = {};
Object.defineProperty(obj, "prop", {
  value: 0,
  writable: true,
});

obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);
