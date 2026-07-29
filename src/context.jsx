import { createContext, useContext, useState } from "react";
import { createRoot } from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setuser] = useState("macUser");
  
  return (
    <UserContext.Provider value={user}>
      <h1>{`hello ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const driver = useContext(UserContext);
  return (
    <>
      <h1>Component3</h1>
      <h2> {`hello ${driver} again`}</h2>
    </>
  );
}

export default Component1;
