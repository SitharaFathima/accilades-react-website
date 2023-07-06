import React from "react";

// packages
import styled from "styled-components";
import { useParams, useNavigate  } from 'react-router-dom';

// components
import Header from "../../screens/homepage/header/Header";
import { datas } from "../gallery/data";
import Footer from "../homepage/footer/Footer";


function Details() {
  const { id } = useParams();
  const item = datas.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  return (
    <>
        <Header />
        <Container>
            <Button type='button' onClick={() => navigate("/gallery")}>
                <Span>Go Back</Span>
            </Button>
            <Main>
                <ImageContainer>
                    <Image src={item.image} alt={item.title} />
                </ImageContainer>
                <DetailsContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                </DetailsContainer>
            </Main>
        </Container>
        <Footer />
    </>
    );
}

const Container = styled.div`
    padding:120px 160px;
    @media all and (max-width: 1280px) {
        padding: 5% 8%;
    }
    @media all and (max-width: 980px) {
        padding: 10% 5%;
    }
`;
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
const Button = styled.button`
    margin-bottom: 30px;
    display: inline-block;
    padding:12px 25px;
    border-radius:50px;
    background-color:#0c7479;
`;
const Span = styled.span`
    margin-left: 15px;
    font-weight: bold;
    color: #FFFFFF;
    display: inline-block;
`;
const ImageContainer = styled.div`
    width: 46%;
    @media all and (max-width: 768px) {
        width: 96%;
    }
`;
const Image = styled.img`
    display: block;
    width: 100%;
    border-radius: 20px;
`;
const DetailsContainer = styled.div`
    width: 48%;
    @media all and (max-width: 768px) {
        width: 96%;
    }
`;
const Title = styled.h2`
    color: #0c7479;
    font-size: 30px;
    font-family: "dm_sansbold";
    margin-top: 50px;
`;
const Description = styled.p`
    color: #747474;
    font-size: 18px;
    margin-top: 10px;
    font-family: "dm_sansregular";
`;

export default Details;
