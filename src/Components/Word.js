import React, { useState } from "react";

const Word = (props) => {
  const [currentWord, setCurrentWord] = useState(props.words[0]);

  const currentWordHandler = () => {
    const randomIndex = Math.floor(Math.random() * props.words.length);
    setCurrentWord(props.words[randomIndex]);
  };

  return (
    <div className="word-div">
      <h1>{currentWord}</h1>
      <button onClick={currentWordHandler}>新しい単語</button>
    </div>
  );
};

export default Word;
