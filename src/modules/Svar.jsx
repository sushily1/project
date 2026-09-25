import React, { useState } from 'react';

const Svar = () => {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Banana");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change fruit Name</button>
    </div>
  );
};

export default Svar;
