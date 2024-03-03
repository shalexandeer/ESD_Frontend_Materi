import { useState, useMemo, useEffect } from "react";

function ExpensiveComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleInputChange = (event, setter) => {
    setter(Number(event.target.value));
  };

  useEffect(() => {
    // Increment render count on each render
    setRenderCount((prevCount) => prevCount + 1);
  }, [a, b]);

  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value...");
    // Simulating an expensive computation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h1>Use Memo</h1>
      <label>
        A:
        <input
          type='number'
          value={a}
          onChange={(e) => handleInputChange(e, setA)}
        />
      </label>
      <label>
        B:
        <input
          type='number'
          value={b}
          onChange={(e) => handleInputChange(e, setB)}
        />
      </label>

      <p>Expensive Value: {expensiveValue}</p>
      <p>Render Count: {renderCount}</p>
    </div>
  );
}

export default ExpensiveComponent;
