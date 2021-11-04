import React, { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Rules from "./Components/Rules";
import Word from "./Components/Word";

const Words = ["コーヒー", "バニラシェイク", "テレビ"];

function App() {
  return (
    <div className="App">
      <Title />
      <Rules />
      <Word words={Words} />
    </div>
  );
}

export default App;
