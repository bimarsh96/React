import { createRoot } from "react-dom/client";

function Goal() {
  return <h1>GOAL HANYO</h1>;
}

function Missed() {
  return <h1>goal vayana</h1>;
}

function MyGoal(props) {
  const usGoal = props.usGoal;

  if (usGoal) {
    return <Goal />;
  }

  return <Missed />;
}

export default MyGoal;



