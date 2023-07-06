import React from "react";

// package
import styled from "styled-components";

function Arrows({ prevSlide, nextSlide }) {
    return (
        <Box className="arrows">
            <SpanPrev className="prev" onClick={prevSlide}>
                &#10094;
            </SpanPrev>
            <SpanNext className="next" onClick={nextSlide}>
                &#10095;
            </SpanNext>
        </Box>
    );
}


const Box = styled.div`

`;
const SpanPrev = styled.span`
    color: #fff;
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top: 12%;
    right:5%;
    width: 20px;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 25px;
    @media all and (max-width: 1180px) {
        right:6%;
    }
    @media all and (max-width: 640px) {
        right:7%;
    }
    @media all and (max-width: 480px) {
        right:8%;
    }
    
`;
const SpanNext = styled.span`
    cursor: pointer;
    z-index: 100;
    width: 20px;
    position: absolute;
    top: 12%;
    padding: 1rem;
    margin-top: -3rem;
    font-size: 25px;
    right: 3%;
    color: #fff;
`;

export default Arrows;
