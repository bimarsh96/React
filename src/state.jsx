// import { useState } from "react";
// import { createRoot } from "react-dom/client";

// function Favouritecolor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>my favourite color is {color}</h1>

//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//     </>
//   );
// }
// // //1st value color is our current  state
// // //2nd value setcolor  is the fxn that is used to update  our state

// export default Favouritecolor;

//updating arrays and obkects:

import { useState } from "react";
import { createRoot } from "react-dom/client";

function Myupd() {
  const [brand, setbrand] = useState("ford");
  const [model, setmodel] = useState("mustang");
  const [year, setyear] = useState(1996);



  const updatemodel=()=>{
  setmodel(previousState => 'bbbb')
    
  }

  return (
    <>
      <h1>the brand of my car is {brand}</h1>
      <p>
        the model is {model} and launched at {year}
      </p>
      <button onClick={updatemodel}>update Model </button>
    </>
  );
}

export default Myupd;


// or can just add the one state that can hold an object instead

// const[brand,setbrand]= usestate({
//   brand:'ford',
//   year:4434,
//   color:'red'
// })


// updating arrays  and objects