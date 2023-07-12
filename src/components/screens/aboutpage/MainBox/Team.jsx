import React from 'react'

// package
import styled from "styled-components";

// images
import rose from "../../../assets/images/rose1.png";

function Team() {

const datas = [
    {
        id:1,
        title: 'John',
        description: 'president',
        image: require('../../../assets/images/man1.png'),
    },
    {
        id:2,
        title: 'Honay',
        description: 'president',
        image: require('../../../assets/images/man.png'),
    },
    {
        id:3,
        title: 'Doe',
        description: 'president',
        image: require('../../../assets/images/man2.jpeg'),
    },
    {
        id:4,
        title: 'Alex',
        description: 'president',
        image: require('../../../assets/images/man3.png'),
    },
    {
        id:5,
        title: 'Martin',
        description: 'president',
        image: require('../../../assets/images/man1.png'),
    },
]
    return (
        <>
            <Container>
                <Mem>Our Team Members</Mem>
                <Teame>
                {datas.map((item) => (
                    <List>
                        <Item>
                            <Image src={item.image} alt="item.title" />
                        </Item>
                        <Containeres>
                            <Text>{item.title}</Text>
                            <Description>{item.description}</Description>
                        </Containeres>
                    </List>
                ))}
                </Teame>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding: 80px 0px 30px;
    background:url(${rose}); 
    background-size:cover;
`;
const Teame = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;
const Mem = styled.h2`
    font-size:35px;
    text-align: center;
    margin-bottom: 25px;
    color:#0c7479;
`;
const List = styled.div`
    width: 20%;     
    padding-top: 20px;
    &:hover{
        background: #fff;
        border-radius: 20px;
        box-shadow: -1px 3px 7px -1px #9e9696;
    }
`;
const Item = styled.div`
    width: 72%;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 100%;
    display: block;
    border-radius:50px;
`;
const Containeres = styled.div`
    padding: 30px 14px 0;
`;
const Text = styled.h3`
    font-size: 14px;
    text-align: center;
    font-family: "dm_sansmedium";
    margin-bottom: 10px;
    font-weight: bolder;
    @media all and (max-width: 980px){
        font-size: 16px;
    }
`;
const Description = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
    color: #9e9696;
    font-family: "dm_sansregular";
    @media all and (max-width: 768px){
        font-size: 14px;
    }
    
`;

export default Team