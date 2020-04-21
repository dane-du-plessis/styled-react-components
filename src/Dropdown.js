import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

function Dropdown(props) {
  const node = useRef();
  const [expanded = false, setExpanded] = useState(false);

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

  const handleSelect = (option) => {
    console.log("select!");
    props.onSelect(option);
    setExpanded(false);
  };

  const expandOptions = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  return (
    <Container ref={node} onClick={() => {}}>
      <Selected onClick={expandOptions}>
        <p>{props.selected}</p>
      </Selected>

      <OptionsMenu>
        {expanded
          ? props.options.map((op) => (
              <Options onClick={(e) => handleSelect(op)}>
                <p>{op}</p>
              </Options>
            ))
          : null}
      </OptionsMenu>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  align-items: center;
  background-color: #aaaaaa;
  padding: 2px;
`;

export const Selected = styled.div`
  background-color: #cccccc;
  width: stretch;
  padding: 4px;
`;

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: stretch;
  background-color: #cccccc;
  position: absolute;
  top: 100%;
`;

export const Options = styled.div`
  width: stretch;
  border-radius: 8px;
  padding: 4px;
  &:hover {
    background-color: red;
  }
`;

export default Dropdown;
