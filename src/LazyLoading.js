import React, { useState } from "react";

const LazyLoading = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };


  if (count > 10) {
    throw new Error("Count should be less than 10");
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default LazyLoading;
