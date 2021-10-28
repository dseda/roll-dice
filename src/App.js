import "./App.css";
import "./RollDice.css";
import "./Die.css";
import RollDice from "./RollDice";
function App() {
  // let rand1 = Math.floor(Math.random() * 6 + 1);
  // let rand2 = Math.floor(Math.random() * 6 + 1);
  return (
    <div className="App">
      <RollDice />
    </div>
  );
}

export default App;
