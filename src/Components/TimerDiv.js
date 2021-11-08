import React, { useState } from "react";
import Timer from "./Timer";
import "../Components/Rules.css";

const TimerDiv = (props) => {
  const [timerVisibility, setTimerVisibility] = useState(false);

  if (timerVisibility === true) {
    console.log("this should be working");

    return (
      <div>
        <Timer hoursMinSecs={props.hoursMinSecs} />
        <button
          className="rules-button"
          onClick={() => setTimerVisibility(false)}
        >
          Hide Timer : タイマーを隠す{" "}
        </button>
      </div>
    );
  } else {
    return (
      <button className="rules-button" onClick={() => setTimerVisibility(true)}>
        Start Timer{" "}
      </button>
    );
  }
};

export default TimerDiv;
