import { createRoot } from "react-dom/client";

// function Football() {
//   const shoot = () => {
//     alert("great shot");
//   };
//   return <button onClick={shoot}>Take the ball</button>;
// }


function Football(){
    const shoot =(a) =>{
            alert(a);
    }
    return(
        <button onClick={()=> shoot("Goal")}>Take the goal</button>
    );

}
export default Football;


