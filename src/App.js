import logo from "./logo.svg";
import "./App.css";
import StatefulButton from "./StatefulButton";
import ButtonCoutner from "./ButtonCounter";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">React Hooks</h1>
      <div className="grid">
        <div className="question-one">
          <h2>Stateful Button</h2>
          A React button where I passed props, and also seemed to use some sort
          of state? It was a little hard to tell without seeing what that button
          did on the frontend.
          <StatefulButton default="Click me!" />
        </div>
        <div className="question-two">
          <h2>Counter</h2>
          If I were to encounter a class of that size, where all it did was show
          an incrimental counter, I would rewrite it for sure using hooks. 2
          lines of code vs at least 10 shown before.
          <ButtonCoutner />
        </div>
      </div>
    </div>
  );
}

export default App;
