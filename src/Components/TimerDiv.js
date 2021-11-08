import React, { useState } from "react";
import Timer from "./Timer";
import "../Components/Rules.css";

const TimerDiv = (props) => {
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
        <Timer hoursMinSecs={props.hoursMinSecs} />
      </div>
    );
  } else {
    return (
      <button className="rules-button" onClick={() => setTimerVisibility(true)}>
        タイマーをスタートする{" "}
      </button>
    );
  }
};

export default TimerDiv;
