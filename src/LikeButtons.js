import React, { useState } from "react";

function LikeButtons() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("White");
  const [textColor, setTextColor] = useState("black");

  const handleLike = () => {
    setState(state + 1);
    setColor("green");
    setTextColor("white");
  };

  const handleDislike = () => {
    setState(state - 1);
    setColor("red");
    setTextColor("yellow");
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h2 style={{ color: textColor }}>{state}</h2>

      <button onClick={handleLike}>Like 👍</button>
      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  );
}

export default LikeButtons
