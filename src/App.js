import React, { useState } from "react";
import keyframes from "@emotion/core";
import styled from "@emotion/styled";

function App() {
  const [select=false, setSelect] = useState(0);

  return (
    <>
      <Container
        onClick={() => {
          console.log(select);
          console.log("Clicked!");
          setSelect(!select);
          console.log(select);
        }}
      >
        <Circle selected={select}/>
        <p>Some label</p>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: transparent;
  border-color: gray;
  border-style: solid;
  border-width: 2px;
  position: relative;
  transition-duration: 1s;
  &:after {
    content: ' ';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: blue;
  }

  ${(p) =>
    p.selected
      ? `&:after {
        width: 12px;
        height: 12px;
        top: 5px;
        left: 5px;
        background-color: blue;
        transition: all 0.2s;
      }`
      : `&:after {
        width: 0px;
        height: 0px;
        top: 11px;
        left: 11px;
        background-color: transparent;
        transition: all 0.2s;
      }`}

  &:hover {
    background-color: rgba(0, 0,255,0.5);
    transition: 1s;
  }

  &:focus {
    // todo style
    outline: none;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  color: black;
  padding-left: 8px;
  user-select: none;
`;

export default App;