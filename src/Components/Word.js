import React, { useState } from "react";
import "./Word.css";

const Word = (props) => {
  const [currentWord, setCurrentWord] = useState(props.words[0]);

  const currentWordHandler = () => {
    const randomIndex = Math.floor(Math.random() * props.words.length);
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
