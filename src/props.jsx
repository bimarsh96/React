import { createRoot } from "react-dom/client";

function Car(props) {     
    
    const {carinfo}=props
    
    //props define
  return (
    <>
      <div>
        my car is the {props.carinfor[0]} model and friends is
        {props.carinfor[0]}
      </div>
       <div>
        for variabke example {props.years[0]} and {props.years[4]}
      </div> 
    </>
  );
}


export default Car;


