import React from 'react'

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Intro() {
    return (
        <>
            <Introduction>
                <Wrapper>
                    <LeftBox>
                        <BoxImg>
                            <IntroImg src={require("../../../assets/images/about.png")} alt="Image" />
                        </BoxImg>
                    </LeftBox>
                    <RightBox>
                        <Heading>What We Are !</Heading>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias est dicta, accusantium voluptas consequuntur amet doloribus expedita nisi beatae iste? Ullam sit magnam rerum itaque maxime a illo neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium dolorum veniam ipsam inventore voluptate laboriosam! Quod mollitia cum, porro consequuntur doloribus, voluptate fugit nam labore, corrupti ipsam sunt odio.</Paragraph>
                        <Paragraph>Ipsum dolor sit amet consectetur adipisicing elit. Quidem alias est dicta, accusantium voluptas consequuntur amet doloribus expedita nisi beatae iste? Ullam sit magnam rerum itaque maxime a illo neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis praesenti.</Paragraph>
                    </RightBox>
                </Wrapper>
                <ButtonBox>
                    <Button to={"/about"}>Learn more</Button>
                </ButtonBox>
                
            </Introduction>
        </>
    )
}

const Introduction = styled.section`
    background-color: #ebebeb;
    padding: 70px 0;
`;
const Wrapper = styled.section`
    width: 90%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
`;
const LeftBox = styled.div`
    width: 48%;
    @media all and (max-width: 980px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;
const BoxImg = styled.div`
    width: 90%;
`;
const IntroImg = styled.img`
    display: block;
    width: 100%;
`;
const RightBox = styled.div`
    width: 48%;
    @media all and (max-width: 980px) {
        width: 80%;
        margin: 0 auto;
    }
`;
const Heading = styled.h2`
    color: #0c7479;
    font-size:30px;
    font-family: "dm_sansbold";
    margin-bottom: 20px;
`;
const Paragraph = styled.p`
    width: 85%;
    margin-bottom:20px;
    font-size:16px;
    font-family: "dm_sansregular";
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Button = styled(Link)`
    display: inline-block;
    padding:12px 25px;
    border-radius:50px;
    background-color:#0c7479;
    color: #FFFFFF;
`;
const ButtonBox = styled.div`
    text-align:center;
`;
export default Intro

