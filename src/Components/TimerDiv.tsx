import React, { useState } from "react";
import Timer from "./Timer";
import "../Components/Rules.css";

const TimerDiv = (props: any) => {
  const [timerVisibility, setTimerVisibility] = useState(false);

  if (timerVisibility === true) {
    console.log("this should be working");

    return (
      <div>
        <button
          className="rules-button"
          onClick={() => setTimerVisibility(false)}
        >
          タイマーをハイドする{" "}
        </button>
        <Timer minSecs={props.minSecs} />
      </div>
    );
  } else {
    return (
      <button className="rules-button" onClick={() => setTimerVisibility(true)}>
        タイマーアンドカウントー{" "}
      </button>
    );
  }
};

export default TimerDiv;
