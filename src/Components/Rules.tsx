import React, { useState } from "react";
import "../Components/Rules.css";

const Rules = (props: any) => {
  const [language, setLanguage] = useState("Japanese");
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
      <div className="rules-control-div">
        <button onClick={setRulesVisiblityHandler} className="rules-button">
          Hide Rules{" "}
        </button>
        <div className="rules-div">
          <h3>Rules</h3>
          <p>
            GOAL:
            <br />
            <br /> Give hints to the other player about your word without using
            ANY katakana/foreign loan words (like チーズ　or　コーヒー).
            <br />
            <br />
            <br />
            <h3>HOW TO PLAY: </h3>
            <br />
            <br /> 1st: open this site on your phone and your friends phone.
            <br />
            <br /> 2nd: the first player explains the word on their screen to
            the other player without using any foreign loan words.
            <br />
            <br />
            3rd: when the other player guesses the word correctly, switch roles.
            <br />
            <br />
          </p>
          <button onClick={changeLanguage} className="language-button">
            {" "}
            日本語{" "}
          </button>
        </div>
      </div>
    );
  }

  if (language === "Japanese" && rulesVisiblity === true) {
    return (
      <div className="rules-control-div">
        <button onClick={setRulesVisiblityHandler} className="rules-button">
          ルールをハイドする{" "}
        </button>
        <div className="rules-div">
          <h3>ルール</h3>
          <p>
            『カタカナ語を日本語だけで説明する』というカタカナ禁止カードゲームです。
            <br />
            <br />
            「チョコレート」や「キャンプ」といったカタカナ語のお題を説明するのにカタカナを使用することができません。
            <br />
            <br />
            <h3>やり方</h3>
            <br />
            <br />
            ファスト：お使いの携帯電話とお友達の携帯電話でこのサイトを開きます。
            <br />
            <br />
            セコンド：最初のプレーヤーは、カタカナ語を使用せずに、画面上の単語を他のプレーヤーに説明します。
            <br />
            <br />
            サード：2番目のプレーヤーが単語を正しく推測した場合、役割を切り替えます。
            <br />
            <br />
          </p>
          <button onClick={changeLanguage} className="language-button">
            {" "}
            English{" "}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <button onClick={setRulesVisiblityHandler} className="rules-button">
        {" "}
        Rules・ルール{" "}
      </button>
    );
  }
};

export default Rules;
