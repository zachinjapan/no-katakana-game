import React, { useState } from "react";
import "../Components/Rules.css";

const Rules = (props) => {
  const [language, setLanguage] = useState("English");

  const changeLanguage = () => {
    if (language === "English") {
      setLanguage("Japanese");
    } else {
      setLanguage("English");
    }
  };

  if (language === "English") {
    return (
      <div className="rules-div">
        <button onClick={changeLanguage}> 日本語 </button>
        <h3>Rules</h3>
        <p>
          The goal of the game is to have the other player guess your choosen
          word correctly without using any katakana/foreign loan words (like
          チーズ　or　コーヒー)
          <br />
        </p>
      </div>
    );
  }

  if (language === "Japanese") {
    return (
      <div className="rules-div">
        <button onClick={changeLanguage}> English </button>
        <h3>ルール</h3>
        <p>
          ボブジテンは、『カタカナ語を日本語だけで説明する』というカタカナ禁止カードゲームです。
          <br />
          <br />
          「チョコレート」や「キャンプ」といったカタカナ語のお題を説明するのにカタカナを使用することができません。この制限の中でお題を表現しようとすると、面白い発言や意味不明な言葉が飛び出したりして、その度に大盛り上がりできます！
        </p>
      </div>
    );
  }
};

export default Rules;
