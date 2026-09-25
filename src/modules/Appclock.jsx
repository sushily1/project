
import React, { useEffect, useState } from "react";

function Appclock() {
  const [color, setColor] = useState("green");
  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">

      <h1 className="clh">
        Digital Clock in React JS
      </h1>

      <h1
        style={{
          color: color,
          background: "black",
          width: "120px",
          padding: "10px",
          borderRadius: "20px",
          border: "2px solid red",
        }}
      >
        {time}
      </h1>

      <select
        value={color}
        onChange={(event) => setColor(event.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

    </div>
  );
}

export default Appclock;

