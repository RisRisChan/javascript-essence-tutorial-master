const items = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let i = 0;
  const _this = this;
  return {
    next() {
      let key = keys[i++];
      return {
        done: i > keys.length,
        value: [key, _this[key]],
      };
    },
  };
};

for (let [k, v] of items) {
  console.log(k, v);
}
