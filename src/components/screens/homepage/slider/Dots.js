import React from "react";

// package
import styled from "styled-components";

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <Dot className="all-dots">
      {sliderImage.map((slide, index) => (
        <Circle
          key={index}
          isActive={activeIndex === index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></Circle>
      ))}
    </Dot>
  );
}
const Dot = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	top: 90%;
	justify-content: center;
	z-index: 200;
`;
const Circle = styled.span`
	background-color: ${props => (props.isActive ? '#fff' : '#48484A')};
	cursor: pointer;
	height: 10px;
	width: 10px;
	margin: 0px 3px;
	border-radius: 50%;
	display: inline-block;

`;
export default Dots;
