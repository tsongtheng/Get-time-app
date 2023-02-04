import React, { useState } from "react";

function App() {
  let [time, setTime] = useState("Time");

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setInterval(updateTime, 1000);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
