import React, { useState } from "react";
import "./Game.css";

const Word = (props: any) => {
  const [currentWord, setCurrentWord] = useState(props.words[0]);

  const currentWordHandler = () => {
    const randomIndex: number = Math.floor(Math.random() * props.words.length);

    setCurrentWord(props.words[randomIndex]);
  };

  return (
    <div className="word-div">
      <div className="word-card">
        <h1>{currentWord}</h1>
      </div>
      <button onClick={currentWordHandler} className="word-button">
        ニューワード
      </button>
    </div>
  );
};

export default Word;
