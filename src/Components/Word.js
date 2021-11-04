const Word = (props) => {
  return (
    <div className="word-div">
      <h1>{props.word}</h1>
      <button> New Word</button>
    </div>
  );
};

export default Word;
