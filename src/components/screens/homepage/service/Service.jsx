import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

// images
import backimg from "../../../assets/images/backImg.png"
import Rightarrow from "../../../assets/icons/right-arrow.png"


// components
import Xplain from './Xplain';

function Service() {

const datas = [
    {
        id:1,
        title: 'Website Development',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/icons/green.png'),
    },
    {
        id:2,
        title: 'Web Application',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/icons/green1.png'),
    },
    {
        id:3,
        title: 'Degital Marketing',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/icons/green2.png'),
    },
    {
        id:4,
        title: 'Website Development',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/icons/green.png'),
    },
    {
        id:5,
        title: 'Web Application',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/icons/green2.png'),
    },
    
]

return (
    <>
    <Container>
        <Topbox>
            <New>Our Customer services</New>
            <ButtonBox>
                <Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tenetur illo iure harum cumque deserunt quisquam omnis autem illum modi delectus sint nemo fugiat, ipsum maxime quod repudiandae minima nostrum?</Para>
                <Button to={"/service"}>Learn more <Span><RightArrow src={Rightarrow} /></Span></Button>
            </ButtonBox>
        </Topbox>
        <FlexBox>
        
            <Cards>
            {datas.map((item) => (
                <Card>
                    <Item>
                        <Image src={item.image} alt="item.title" />
                    </Item>
                    <Containeres>
                        <Text>{item.title}</Text>
                        <Description>{item.description}</Description>
                    </Containeres>
                </Card>
                ))}
            </Cards> 
        </FlexBox>
    </Container>
    <Xplain />
    </>
    ) 
}

export default Service;

const Container = styled.div`
    background:url(${backimg}); 
    background-repeat: no-repeat;
    padding: 60px 100px 80px;
    @media all and (max-width: 1180px) {
        padding: 50px 50px 80px;
    }
    @media all and (max-width: 980px) {
        padding: 30px 50px 80px;
    }
    @media all and (max-width: 768px) {
        padding: 30px 16px 80px;
    }
`;
const Topbox = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto 80px;
    @media all and (max-width: 640px){
    margin-top: 50px;
    }
`;
const Para = styled.p`
    width: 80%;
    margin-bottom: 20px;
`;
const Span = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
`;
const RightArrow = styled.img`
    display: inline-block;
    width: 12px;100%
`;
const New = styled.h2`
    font-size: 34px;
    width: 50%;
    color:#0c7479;
    font-family: "dm_sansbold";
    @media all and (max-width: 480px){
        font-size: 18px;
    }
    @media (max-width: 480px){
        font-size: 14px;
    }
`;
const FlexBox = styled.div``;
const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;
const Card = styled.div`
    width: 32%; 
    padding-top: 30px;
    transform: scale(0.9);
    transition: all 0.2s ease-in-out 0s;
    &:hover {
        transform: scale(1);
        background: linear-gradient(90deg, #FFE4E2 2%, #FFB6C1 97.59%);
    }
    @media all and (max-width: 768px){
        width: 95%;
    }
    @media all and (max-width: 640px){
        width: 95%;
        margin: 0 auto 30px;
    }
`;
const Item = styled.div`
    width: 30px;
    height:30px;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Containeres = styled.div`
    padding: 30px 10px;
`;
const Text = styled.h3`
    font-size: 14px;
    color:#0c7479;
    text-align: center;
    font-family: "dm_sansmedium";
    margin-bottom: 20px;
    font-weight: bolder;
    @media all and (max-width: 980px){
        font-size: 12px;
    }
    @media all and (max-width: 768px){
        font-size: 14px;
    }
    @media all and (max-width: 640px){
        font-size: 22px;
    }
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`;
const Description = styled.p`
    font-size: 16px;
    text-align: center;
    width: 90%;
    margin: 0 auto 20px;
    color: #9e9696;
    font-family: "dm_sansregular";
    @media all and (max-width: 768px){
        font-size: 11px;
    }
    @media all and (max-width: 640px){
        font-size: 18px;
    }
    @media all and (max-width: 480px){
        font-size: 12px;
    }
`;
const ButtonBox = styled.div`
    width: 50%;
`;
const Button = styled(Link)`
    display: inline-block;
    border-radius:50px;
    color:#0c7479;
    text-align:center;
`;

