import React from 'react'

// package
import styled from "styled-components";

// images
import abou from "../../../assets/images/abou-img.png";


function Main() {
    return (
        <>
            <Container>
                <Left>
                    <Top>
                        <Name>
                            About Our Works
                        </Name>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos exercitationem quaerat dicta sint eaque eius! Dolore, exercitationem.
                        </Description>
                    </Top>
                </Left>
                <Right>
                    <Img>
                        <Image src={require("../../../assets/images/about-1.png")} />
                    </Img>
                </Right>
            </Container>
        </>
    )
}
const Container = styled.section`
    background:url(${abou}); 
    background-size: cover;
    padding:60px 100px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 60%;
`;
const Right = styled.div`
    width: 40%; 
`;
const Img = styled.div`
    width: 75%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Top = styled.div`
    position: relative;
    margin-bottom: 50px;
`;
const Name = styled.h2`
    color:#fff;
    font-size: 40px;
    font-family: "dm_sansbold";
    margin-bottom: 25px;
    @media all and (max-width: 1280px) {
        font-size: 40px;
    }
    @media all and (max-width: 768px) {
        font-size: 34px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
`;
const Description = styled.p`
    color: #fff;
    width: 60%;
    font-size: 20px;
    margin-bottom:50px;
    font-size: 18px;
    font-family: "dm_sansregular";
    @media all and (max-width: 1280px) {
        width: 85%;
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 15px;
    }
    @media all and (max-width: 360px) {
        font-size: 14px;
    }
`;
export default Main