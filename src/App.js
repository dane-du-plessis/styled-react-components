import React from "react";

import Dropdown from './Dropdown';

// https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
function App() {
  return (
    <>
      <p>A dropdown:</p>
      <Dropdown></Dropdown>
      <p> And there you have one!</p>
    </>
  );
}

export default App;
