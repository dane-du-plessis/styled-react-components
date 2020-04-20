import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
// https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
function App() {
  const node = useRef();
  const [select = false, setSelect] = useState("All");
  const [expanded = false, setExpanded] = useState(false);
  const options = ["One", "Two", "Three"];

  useEffect(() => {
    // add when mounted
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setExpanded(false);
  };

  const handleSelect = (index) => {
    console.log("select!");
    setSelect(options[index]);
    setExpanded(false);
  };

  const expandOptions = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  return (
    <>
      <Container ref={node} onClick={() => {}}>
        <Selected onClick={expandOptions}>
          <p>{select}</p>
        </Selected>

        {expanded
          ? options.map((op, index) => (
              <Options onClick={(e) => handleSelect(index)}>
                <p>{op}</p>
              </Options>
            ))
          : null}
      </Container>
      <Container>
        <p>Some other part of doc</p>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  background-color: #aaaaaa;
  padding: 2px;
`;

export const Selected = styled.div`
  background-color: #cccccc;
  width: stretch;
  padding: 4px;
`;

export const Options = styled.div`
  width: stretch;
  border-radius: 8px;
  padding: 4px;
  &:hover {
    background-color: red;
  }
`;

export default App;
