import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Add from "./addd.jsx";
import Car from "./props.jsx";
// import Bike from './propdest.jsx';
import Parent from "./propdest.jsx";
import Football from "./event.jsx";
import Rar from "./list.jsx";
import Myform from "./formstat.jsx";
import Favouritecolor from "./state.jsx";



const x = [2, 3, 45, 6, 7, 8];
const carinfo = ["ford", "mustnag"];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Add />
    <Car carinfor={carinfo} years={x} />
    {/* <Bike color='red'/> */}
    <Parent />
    <Football />
    <Rar/>
    <Favouritecolor/>
    <Myform/>
  </StrictMode>,
);
