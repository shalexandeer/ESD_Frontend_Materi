import { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Use State</h1>
      <p>hitung: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
