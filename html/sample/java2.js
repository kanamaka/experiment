// 変数宣言
// var ,調べたがほぼ使わなさそう 　再宣言が可能
// 理由　再宣言できる＝簡単に書き換えられる
// let , 大体使われている　再宣言が不可
// const ,　大文字のみの時に使っているけど小文字のみも使われる　再宣言が不可
//字体　var(let,constのどれかを使う) 変数名　= 初期値;
// varでの再宣言
var book = "マガジン";
console.log(book)
var book = "ジャンプ"
console.log(book)

// letによる再宣言　constでも同様
// エラーが出ます
// let book = "マガジン";
// console.log(book)
// let book = "サンデー"
// console.log(book)

// 定義には有効範囲(スコープがある)
// let のスコープ
function foo() {
  let x = "webcamp"
  {
    let y = "hello_hello"
    console.log(x)
    // これが正しい変数はブロック内で使わんとバグ
    console.log(y)
  }
}
　// console.log(x)ブロック外のためエラーが出る
  // console.log(y)

foo()
// 上のfooは特に意味ないらしい

// 巻き上げ　変数の巻き上げ
// 調べたがコード実行時定義だけが先頭に移動すること
// 関数内のどの部分で変数をしても頭で宣言したことになる

var apple = "りんご"
 function foo() {
   var apple;
   console.log(apple)
   apple = "ばなな"
   console.log(apple)
 }
 foo()