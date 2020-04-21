import React , {useState} from "react";

import Dropdown from './Dropdown';

// https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
function App() {
  const [selected = false, setSelected] = useState("All");
  const options = ["One", "Two", "Three"];
  return (
    <>
      <p>A dropdown:</p>
      <Dropdown selected={selected} onSelect={(index) => setSelected(index) } options={options}/>
      <p> And there you have one!</p>
    </>
  );
}

export default App;
