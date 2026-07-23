import { createRoot } from "react-dom/client";

function Football() {
  const shoot = () => {
    alert("great shot");
  };
  return <button onClick={shoot}>take the ball</button>;
}

export default Football;
