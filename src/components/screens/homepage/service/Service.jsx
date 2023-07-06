import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Service() {

const datas = [
    {
        id:1,
        title: 'Website Development',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/images/service12.jpeg'),
    },
    {
        id:2,
        title: 'Web Application',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/images/service.jpg'),
    },
    {
        id:3,
        title: 'Degital Marketing',
        description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
        image: require('../../../assets/images/service10.jpeg'),
    },
    
]

return (
    <Container>
        <Topbox>
            <New>Our services</New>
        </Topbox>
        <FlexBox>
        {datas.map((item) => (
            <Cards>
                <Card>
                    <Item>
                        <Image src={item.image} alt="item.title" />
                    </Item>
                    <Containeres>
                        <Text>{item.title}</Text>
                        <Description>{item.description}</Description>
                    </Containeres>
                </Card>
            </Cards> 
        ))}
        </FlexBox>
        <ButtonBox>
            <Button to={"/service"}>Learn more</Button>
        </ButtonBox>
    </Container>
    ) 
}

export default Service;

const Container = styled.div`
    padding: 60px 100px 120px;
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
    margin: 35px 30px 30px 0;
    @media all and (max-width: 640px){
    margin-top: 50px;
    }
`;
const New = styled.h2`
    font-size: 34px;
    color:#0c7479;
    text-align: center;
    font-family: "dm_sansbold";
    @media all and (max-width: 480px){
        font-size: 18px;
    }
    @media (max-width: 480px){
        font-size: 14px;
    }
`;
const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 96%;
    margin: 0 auto 50px;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
const Cards = styled.div`

`;
const Card = styled.div`
    width: 90%; 
    box-shadow: -1px 0px 4px -2px #9e9696;
    @media all and (max-width: 768px){
        width: 95%;
    }
    @media all and (max-width: 640px){
        width: 95%;
        margin: 0 auto 30px;
    }
`;
const Item = styled.div`
    width: 100%; 
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
    font-family: "dm_sansmedium";
    margin-bottom: 10px;
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
    margin-bottom: 20px;
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
    text-align:center;
`;
const Button = styled(Link)`
    display: inline-block;
    padding:12px 25px;
    border-radius:50px;
    background-color:#0c7479;
    color: #FFFFFF;
    text-align:center;
`;

