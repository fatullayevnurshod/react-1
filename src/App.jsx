import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let n = count;
  const pilus = () => {
    setCount(++n);
  };
  const minus = () => {
    setCount(--n);
  };

  const clear = () => {
    setCount(0);
  };
  return (
    <header>
      <h1>{count}</h1>
      <div className="hero">
        <button onClick={pilus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={clear}>clear</button>
      </div>
    </header>
  );
}

export default App;
