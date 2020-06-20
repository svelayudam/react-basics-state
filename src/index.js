import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(false);
  const brightness = isLit ? "lit" : "dark";

  const [temperature, setTemperature] = React.useState(75);

  return (
    <div className={`room ${brightness}`}>
      the room is {brightness}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
      <button onClick={() => setLit(true)}>ON</button>
      <button onClick={() => setLit(false)}>OFF</button>
      <br />
      <br />
      the temperature is {temperature}
      <br />
      <button onClick={() => setTemperature(temperature + 1)}>+</button>
      <button onClick={() => setTemperature(temperature - 1)}>-</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
