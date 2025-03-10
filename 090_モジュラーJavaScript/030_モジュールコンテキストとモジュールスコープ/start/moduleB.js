import "./moduleA.js";
//モジュールコンテキスト
console.log(this);
const a = 0;

function fn() {
  console.log(this);
  console.log(a);
}

fn();

const obj = {
  fn,
};

obj.fn();

//window越しに変数を渡すのは良くない
console.log(window.d);
