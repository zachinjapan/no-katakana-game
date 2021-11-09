import React, { useState } from "react";
import Timer from "./Timer";
import "../Components/Rules.css";

const TimerDiv = (props) => {
  const [counter, setCounter] = useState(0);

  const [timerVisibility, setTimerVisibility] = useState(false);

  if (timerVisibility === true) {
    console.log("this should be working");

    return (
      <div>
        <button
          className="rules-button"
          onClick={() => setTimerVisibility(false)}
        >
          タイマーを隠す{" "}
        </button>
        <Timer minSecs={props.minSecs} />
      </div>
    );
  } else {
    return (
      <button className="rules-button" onClick={() => setTimerVisibility(true)}>
        タイマーとカウントー{" "}
      </button>
    );
  }
};

export default TimerDiv;
