import { useState, useEffect } from "react";

const DataFetcher = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("ngefetch data");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>UseEffect and Fetch Data</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click to add 1</button>
    </div>
  );
};

export default DataFetcher;
