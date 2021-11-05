import React, { useState } from "react";
import "../Components/Rules.css";

const Rules = (props) => {
  const [language, setLanguage] = useState("English");
  const [rulesVisiblity, setRulesVisiblity] = useState(false);

  const setRulesVisiblityHandler = () => {
    setRulesVisiblity(!rulesVisiblity);
  };

  const changeLanguage = () => {
    if (language === "English") {
      setLanguage("Japanese");
    } else {
      setLanguage("English");
    }
  };

  if (language === "English" && rulesVisiblity === true) {
    return (
      <div>
        <button onClick={setRulesVisiblityHandler}>Hide Rules </button>
        <div className="rules-div">
          <h3>Rules</h3>
          <p>
            GOAL:
            <br />
            <br /> have the other player guess your choosen word correctly
            without using any katakana/foreign loan words (like
            チーズ　or　コーヒー)
            <br />
            <br />
            HOW TO PLAY:
            <br />
            <br /> 1st: open this site on your phone and your friends phone.
            <br />
            <br /> 2nd: the first player explains the word on their screen to
            the other player without using any foreign loan words.
            <br />
            <br />
            3rd: if the second player guess the word correctly switch roles.
          </p>
          <button onClick={changeLanguage}> 日本語 </button>
        </div>
      </div>
    );
  }

  if (language === "Japanese" && rulesVisiblity === true) {
    return (
      <div>
        <button onClick={setRulesVisiblityHandler}>ルールを課かす </button>
        <div className="rules-div">
          <h3>ルール</h3>
          <p>
            『カタカナ語を日本語だけで説明する』というカタカナ禁止カードゲームです。
            <br />
            <br />
            「チョコレート」や「キャンプ」といったカタカナ語のお題を説明するのにカタカナを使用することができません。この制限の中でお題を表現しようとすると、面白い発言や意味不明な言葉が飛び出したりして、その度に大盛り上がりできます！
            <br />
            <br />
            やり方：
            <br />
            <br />
            1日：お使いの携帯電話とお友達の携帯電話でこのサイトを開きます。
            <br />
            <br />
            2番目：最初のプレーヤーは、外国語を使用せずに、画面上の単語を他のプレーヤーに説明します。
            <br />
            <br />
            3番目：2番目のプレーヤーが単語を正しく推測した場合、役割を切り替えます。
          </p>
          <button onClick={changeLanguage}> English </button>
        </div>
      </div>
    );
  } else {
    return <button onClick={setRulesVisiblityHandler}> Rules・ルール </button>;
  }
};

export default Rules;
