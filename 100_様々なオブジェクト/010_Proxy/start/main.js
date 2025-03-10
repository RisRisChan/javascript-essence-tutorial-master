const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, newVal, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = newVal;
    // throw new Error("aは変更できません");
  },
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    // console.log(`[receiver]: ${receiver}`);
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return -1;
    }
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};

const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
console.log(pxy.a);
console.log(pxy.b);
delete pxy.a;
console.log(pxy.a);
