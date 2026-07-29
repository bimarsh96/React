import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    let timer = setTimeout(() => {
        setCount((count) => count + 1);
    //   console.log("hello");
    }, 3000);

    return () => clearTimeout(timer);
  },[count]);

  return (
    <>
      <h1>i have rendered{count}</h1>

      <button onClick={() => setCount((c) => c + 2)}>+ </button>
      {/* <button onClick={() => setCount(0)}>-</button> */}
    </>
  );
}
export default Timer;
