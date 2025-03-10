/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
  constructor(num) {
    this.val = null;
    //アンスコをつけることで、プライベートメンバーを明示している
    this._operator;
  }

  set(val) {
    if (this.val === null) {
      this.val = val;
    } else {
      this._operator(this.val, val);
    }

    return this;
  }

  plus() {
    this._operator = function (val1, val2) {
      this._equal(val1 + val2);
    };
    return this;
  }

  minus() {
    this._operator = function (val1, val2) {
      this._equal(val1 - val2);
    };
    return this;
  }

  mutiply() {
    this._operator = function (val1, val2) {
      this._equal(val1 * val2);
    };
    return this;
  }

  divide() {
    this._operator = function (val1, val2) {
      this._equal(val1 / val2);
    };
    return this;
  }

  _equal(result) {
    this.val = result;
    console.log(result);
  }
}

const calc = new Calculator();

calc.set(10).minus().set(3).mutiply().set(6).divide().set(2).plus().set(2);
