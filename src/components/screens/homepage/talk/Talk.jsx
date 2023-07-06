import React from 'react'

// images
import banner from "../../../assets/images/contactes.svg"

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Talk() {
    return (
        <>
            <Talks>
                <Hello>
                    <Heading>Let Us Talk</Heading>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe sequi porro illum dolores temporibus cum qui eos excepturi sunt tenetur quis repudiandae vitae ex, voluptatem sapiente explicabo dolorem Cumque.</Para>
                    <ButtonBox>
                        <Button to={"/contact"}>Click Here</Button>
                    </ButtonBox>
                </Hello>
                <BannerImg>
                    <Image src={banner} />
                </BannerImg>
            </Talks>
        </>
    )
}

const Talks = styled.section`
    padding: 60px 135px;
    display: flex;
    align-items: center;
    @media all and (max-width: 1180px){
        padding: 60px 70px;
    }
    @media all and (max-width: 768px){
        padding: 60px 45px;
    }
    @media all and (max-width: 640px){
        flex-wrap: wrap;
    }
`;
const Hello = styled.div`
    width:48%;
    @media all and (max-width: 640px){
        width: 90%;
        margin: 0 auto;
    }
`;
const Heading = styled.h2`
    font-size: 40px;
    color: #0c7479;
    margin-bottom: 30px;
    font-family: "dm_sansbold";
`;
const Para = styled.p`
    font-size: 16px;
    width: 80%;
    margin-bottom: 30px;
    @media all and (max-width: 980px){
        width: 90%;
    }
    @media all and (max-width: 640px){
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
`;
const BannerImg = styled.div`
    width: 50%;
    @media all and (max-width: 640px){
        width: 90%;
        margin: 0 auto;
        margin-top: 30px;
    }
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
export default Talk