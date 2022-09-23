var Rx = require('rx');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//配列から配列の要素ごとに10回イベントが起きるストリームを作成する。
var source = Rx.Observable.fromArray(array);

//イベントの発生源からの内容を変換するmapを追加
var mapped = source.map(function (x) {
  var ret = [
    '-',
    'いち',
    'に',
    'さん',
    'よん',
    'ご',
    'ろく',
    'なな',
    'はち',
    'きゅう',
    'じゅう',
  ];
  return ret[x];
});

//filterされたストリームからイベントを受け取るよう指定する
mapped.subscribe(function (x) {
  console.log(x);
});
