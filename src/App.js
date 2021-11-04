import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Rules from "./Components/Rules";
import Word from "./Components/Word";

function App() {
  return (
    <div className="App">
      <Title />
      <Rules />
      <Word word="peanut" />
    </div>
  );
}

export default App;
