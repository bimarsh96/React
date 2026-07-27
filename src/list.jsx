import { createRoot } from "react-dom/client";

// function Rar() {
//   const mycar = ["ford", "mustnag", "audi"];
//   return (
//     <>
//       <h1> My cars:</h1>
//       <p>
//         {mycar.map((car) =>
//           <p>I am a {car}</p>
//         )}
//       </p>
//     </>
//   );
// }


function Rar() {
  const cars = [
    { id: 100, brand: "ford" },
    { id: 101, brand: "mustang" },
    { id: 102, brand: ''},
  ];
  return (
    <>
      <h1>My cars</h1>
      <ul>
        {cars.map((car) => (
          <l1 key={car.id}> i am a {car.brand}</l1>
        ))}
      </ul>
    </>
  );
}
export default Rar;
