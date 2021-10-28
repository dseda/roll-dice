import "./App.css";
import Die from "./Die";
function App() {
  let rand1 = Math.floor(Math.random() * 6 + 1);
  let rand2 = Math.floor(Math.random() * 6 + 1);
  return (
    <div>
      <Die face={rand1} />
      <Die face={rand2} />
    </div>
  );
}

export default App;
