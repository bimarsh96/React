import { createRoot } from "react-dom/client";

function Add() {
  //   const myobj = {
  //     name: "Fiat",
  //     model: "500",
  //     color: "white",
  //   };
  return (
    <>
      <p>Hello World </p>

      {/* <p>
        My car is a {myobj.color} {myobj.name} {myobj.model}
      </p> */}
      <Scooter />
    </>
  );
}

function Bike() {
  return <div>optional</div>;
}

function Scooter() {
  return (
    <>
      <div>3handler</div>
      <Bike />
    </>
  );
}

// createRoot(document.getElementById("root").render(<Scooter />));


export default Add;
