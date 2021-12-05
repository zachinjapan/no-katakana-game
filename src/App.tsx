import "./App.css";
import Title from "./Components/Title";
import Rules from "./Components/Rules";
import Game from "./Components/Game";
import TimerDiv from "./Components/TimerDiv";
const Words: object = [
  // a
  "アレルギー",
  "アバカド",
  "アウトドア",
  // i
  "イントネーション",
  "イヤリング",
  "インフルエンザ",
  "インタネット",
  // u
  "ウェブサイト",
  // e
  "エレガント",
  // o
  "オートマチック",
  // ka
  "カメラ",
  // ki
  // ku
  "クリーニング",
  "クレヨン",
  "クロール",
  "クイズ",
  // ke
  // ko
  "コンディショナー",
  "コーヒー",
  // sa
  "サウナ",
  "サンタクロース",
  // shi
  "ショッピング",
  "シャンデリア",
  // su
  "スリッパ",
  "ストロー",
  "スポーツ",
  "スムージー",
  "スカート",
  "スカイダイビング",
  "スマートフォン",
  // se
  "センチメートル",
  "セーター",
  // so
  "ソース",
  "ソーセージ",
  // ta
  "タイムカプセル",
  "タイムマシーン",
  "タオル",
  // chi
  "チョコレート",
  "チーズ",
  "チーズフォンデュ",
  // tsu
  "ツイッター",
  // te
  "テレビ",
  "テント",
  // to
  // na
  // ni
  // nu
  // ne
  "ネクタイー",
  // no
  // ha
  "ハンガー",
  "バニラシェイク",
  // hi
  // fu
  "フライドポテト",
  "フィクション",
  // he
  "ヘリコプター",
  // ho
  "ホームページ",
  "ホットサンド",
  // ma
  "マイクロソフト",
  "マウンテンバイク",
  // mi
  "ミートボール",
  // mu
  // me
  "メール",
  "メモ",
  // mo
  // ya
  // yu
  // yo
  "ヨーグルト",
  // ra
  "ランダム",
  // ri
  // ru
  // re
  // ro
  "ロケット",
  // wa
  "ワンピース",
  // wo
  // n
  // ga
  // gi
  // gu
  "グラタン",
  // ge
  // go
  "ゴルフ",
  // za
  // ji
  // zu
  // ze
  // zo

  // da

  // di
  // du
  // de
  "デジタル",
  "ディスプレイ",
  // do
  "ドッジボール",
  // ba
  "バター",
  // bi
  // bu
  "ブランデー",
  "ブレスレット",
  "ブルーベリー",
  // be
  "ベーコン",
  "ベストセラー",
  // bo
  "ボーリング",
  // pa
  "パラシュート",
  "パイナップル",
  // pi
  // pu
  "プライバシー",
  // pe
  // po
  "ポップコーン",
  // kya
  // kyu
  // kyo
  // za
  // ji
  // zu
  // ze
  // zo
  "ゾンビ",
];

function App() {
  const counterTime: object = { minutes: 5, seconds: 0 };
  return (
    <div className="App">
      <Title />
      <Game words={Words} />
      <Rules />
      <TimerDiv minSecs={counterTime} />
    </div>
  );
}

export default App;
