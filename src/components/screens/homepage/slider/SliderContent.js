import React from "react";

// package
import styled from "styled-components";

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <ContentBox>
            {sliderImage.map((slide, index) => (
            <Container
                key={index}
                isActive={index === activeIndex}
                    className={index === activeIndex ? "slides active" : "inactive"}
            >
                <SpotlightImg className="slide-image" src={slide.urls} alt="Image" />
                <Heading className="slide-title">{slide.title}</Heading>
                <Text className="slide-text">{slide.description}</Text>
            </Container>
            ))}
        </ContentBox>
    );
}

const ContentBox = styled.div`
    
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    display: ${props => (props.isActive ? 'inline-block' : 'none')};
    
`;
const SpotlightImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
`;
const Heading = styled.h2`
    width: 100%;
    height: 100%;
    color: white;
    font-size: 60px;
    position: absolute;
    text-align: center;
    top: 35%;
    font-weight: bold;
    z-index: 10;
    @media all and (max-width: 980px) {
        font-size: 48px;
    }
    @media all and (max-width: 480px) {
        font-size: 30px;
    }
`;
const Text = styled.p`
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 50px;
    position: absolute;
    text-align: center;
    z-index: 10;
    top: 50%;
    font-weight: bold;
    font-size: 26px;
    @media all and (max-width: 480px) {
        font-size: 14px;
        top: 45%;
        
    }
`;
export default SliderContent;
