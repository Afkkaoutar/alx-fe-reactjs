import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "20px auto",
        width: "250px",
        textAlign: "center",
        borderRadius: "8px",
        backgroundColor: "#f7f7f7"
      }}
    >
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
