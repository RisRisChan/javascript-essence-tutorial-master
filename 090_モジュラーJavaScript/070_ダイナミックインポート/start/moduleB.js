import moduleA from "./moduleA.js";
import defultVal, { publicVal, publicFn } from "./moduleA.js";

// publicFn();
// console.log(defultVal);
// console.log(publicVal);

//ダイナミックインポート（ブラウザがサポートしているか確認）
//非同期で読み込まれる
// import("./moduleA.js").then(function (module) {
//   console.log(module);
//   module.publicFn();
// });

async function fn() {
  const modules = await import("./moduleA.js");
  modules.publicFn();
}

fn();
