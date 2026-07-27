import { useState } from "react";
import { createRoot } from "react-dom/client";

function Favouritecolor() {
  const [color, setColor] = useState("red");

  return(
  <>
    <h1>my favourite color is {color}</h1>

    <button 
    type="button" 
    onClick={() =>setColor("blue") }>
      Blue
    </button>
  </>
  )
}
//1st value color is our current  state
//2nd value setcolor  is the fxn that is used to update  our state

export default Favouritecolor;
