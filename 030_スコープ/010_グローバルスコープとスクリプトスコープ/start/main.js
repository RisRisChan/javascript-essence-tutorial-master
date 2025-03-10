//スクリプトスコープ
const a = 0;
let b = 0;

//オブジェクトスコープ  （= windowオブジェクト）
var c = 0;
function d(){}

//debugger;

window.e = 1;
let e = 2;
console.log(e);