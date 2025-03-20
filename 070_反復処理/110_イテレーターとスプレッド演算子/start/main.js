//スプレット演算子はイテレーターの操作に従う
const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};

const array3 = [...obj1];
console.log(array3);

const obj4 = { ...obj1 };
console.log(obj4);
