var Rx = require('rx');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//配列から配列の要素ごとに10回イベントが起きるストリームを作成する。
var source = Rx.Observable.fromArray(array);

//イベントの発生源から3の倍数だけを取り出すフィルターを追加
//フィルターもまたイベント源
var filtered = source.filter(function (x) {
  //3の倍数時だけOKを返却。
  if (x % 3 == 0) {
    return true;
  }
});

//filterされたイベント源からイベントを受け取るよう指定してストリームが完成
filtered.subscribe(function (x) {
  console.log(x);
});
