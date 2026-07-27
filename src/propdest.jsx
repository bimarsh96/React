import { createRoot } from "react-dom/client";

// function Bike({color}){

// return(
//     <>
//     <div>the color of bike is {color}</div>
//     </>
// )

// }

// export default Bike

//props children

function Parent(props) {
  return (
    <div>
      <h1>For 2 Children</h1>
      <Son>
        <p>Just a random sentence</p>
      </Son>
      <Daughter>
        <p>Just another random sentence</p>
      </Daughter>
    </div>
  );
}

function Son(props) {
  return (
    <div style={{ background: "green" }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  return (
    <div style={{ background: "lightblue" }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}
export default Parent;
