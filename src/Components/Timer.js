import React, { useState } from "react";
import "../Components/TimerDiv.css";

const CountDownTimer = (props) => {
  const { minutes = 0, seconds = 60 } = props.minSecs;
  const [[mins, secs], setTime] = React.useState([minutes, seconds]);

  // function to incrase count

  const [counter, setCounter] = useState(1);

  const tick = () => {
    if (mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([59, 59]);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  //button to reset the timer
  const resetTimer = () => {
    reset();
    setCounter(0);
  };

  return (
    <div>
      <h3>{`カウンター: ${counter} `}</h3>
      <h3>{`残り時間: ${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</h3>
      <div className="button-div">
        <button onClick={resetTimer}>リセット</button>
        <button onClick={() => setCounter(counter + 1)}>カウントアップ</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
