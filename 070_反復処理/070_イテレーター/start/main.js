// function genIterator(max = 10) {
//   let i = 0;

//   return {
//     next: function () {
//       if (i > max) {
//         return {
//           done: true,
//           value: i++,
//         };
//       } else {
//         return {
//           done: false,
//           value: i++,
//         };
//       }
//     },
//   };
// }

// const it = genIterator(5);
// let a = it.next();
// // while (!a.done) {
// //   console.log(a.value);
// //   a = it.next();
// // }

// const obj = {
//   [Symbol.iterator]: genIterator.bind(null, 2),
// };

// for (const i of obj) {
//   console.log(i);
// }

// const s = new Set(obj);
// console.log(s);

// // フィボナッチ数列を生成するイテラブルオブジェクト
// const fibonacci = {
//   maxCount: 10, // 最大10個の数を生成
//   [Symbol.iterator]: function () {
//     let count = 0;
//     let prev = 0;
//     let current = 1;

//     return {
//       next: function () {
//         if (count++ < fibonacci.maxCount) {
//           const value = prev;
//           const next = prev + current;
//           prev = current;
//           current = next;
//           return { done: false, value: value };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (const num of fibonacci) {
//   console.log(num); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 が順に出力される
// }

const person = {
  name: "田中",
  age: 30,
  job: "エンジニア",

  [Symbol.iterator]: function () {
    // プロパティの配列を取得
    const keys = Object.keys(this);
    let index = 0;

    // thisを保存（イテレータの中ではthisが変わるため）
    const self = this;

    return {
      next: function () {
        // Symbol.iteratorプロパティ自体はスキップする
        while (keys[index] === Symbol.iterator.toString()) {
          index++;
        }

        if (index < keys.length) {
          const key = keys[index];
          const value = self[key];
          index++;
          return { done: false, value: [key, value] };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const [key, value] of person) {
  console.log(`${key}: ${value}`);
  // "name: 田中", "age: 30", "job: エンジニア" が順に出力される
}
