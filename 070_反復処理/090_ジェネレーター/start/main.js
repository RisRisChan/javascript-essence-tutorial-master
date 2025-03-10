//ジェネレータ：イテレータを簡略化したもの

function* gen(max = 10) {
  let i = 0;
  while (i <= max) {
    yield i++;
  }
  //   return;
}

const it = gen(3);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const obj = {
  *[Symbol.iterator](max = 10) {
    let i = 0;
    while (i <= max) {
      yield i++;
    }
    //   return;
  },
};

for (o of obj) {
  console.log(o);
}

// for (s of gen()) {
//   console.log(s);
// }
