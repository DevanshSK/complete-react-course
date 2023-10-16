import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = (e) => {
    // counter = counter + 1;
    // console.log("clicked", counter);
    setCounter(counter + 1);
  };
  const removeValue = (e) => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
