import React, { useState } from "react";

function CounterButton() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to handle button click
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Click Me
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterButton />
    </div>
  );
}

export default App;
