import React from "react";

// package
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import Header from "../../screens/homepage/header/Header";
import { datas } from "./data";
import Footer from "../homepage/footer/Footer";

// images
import rose from "../../assets/images/rose1.png";
import Rightarrow from "../../assets/icons/right-arrow.png"


function Gallery() {

return (
    <>
        <Header />
        <Container>
            <Top>
                <Name>Our Gallery Section</Name>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero illo ducimus ullam maiores? Id placeat ducimus,
                    amet ad accusamus facilis in assumenda, officiis illum distinctio perferendis mollitia dolore quasi dolorum.
                </Description>
            </Top>
        </Container>
        <Full>
            <ImaArrow>
                <Black src={require("../../assets/images/Arrow.png")}
                    alt="Arrow" />
            </ImaArrow>
            <Bottom>
                <Titl>Gallery section</Titl>
                <Lists>
                {datas.map((item) => (
                    <List key={item.id} to={`/details/${item.id}`}>
                        <Listimg>
                            <Image src={item.image} />
                        </Listimg>
                        <Whitebox>
                            <Whitename>{item.title}</Whitename>
                            <Whites>
                                <Button>Learn more <Span><RightArrow src={Rightarrow} /></Span></Button>
                            </Whites>
                        </Whitebox>
                    </List>
                ))}
                </Lists>
            </Bottom>
        </Full>
        <Footer />
    </>
    );
}


export default Gallery;

const Container = styled.div`
    background:url(${rose}); 
    background-size:cover;
    padding: 8% 12%;
    @media all and (max-width: 1280px) {
        padding: 8% 8%;
    }
    @media all and (max-width: 768px) {
        padding: 7% 5%;
    }
    @media all and (max-width: 640px) {
        padding: 9% 5%;
    }
`;
const Top = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 50px;
`;
const Name = styled.h2`
    color: #0c7479;
    font-size: 30px;
    font-family: "dm_sansbold";
    margin-bottom: 25px;
    @media all and (max-width: 1380px) {
        font-size: 45px;
    }
    @media all and (max-width: 1280px) {
        font-size: 40px;
    }
    @media all and (max-width: 480px) {
        font-size: 28px;
    }
    @media all and (max-width: 360px) {
        font-size: 28px;
    }
`;
const Description = styled.p`
    color: #747474;
    width: 80%;
    font-size: 20px;
    margin: 0 auto;
    font-family: "dm_sansregular";
    @media all and (max-width: 1380px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
    @media all and (max-width: 360px) {
        font-size: 14px;
    }
`;
const Full = styled.div`
    background: linear-gradient(#fff, #FFB6C1);
    padding: 80px 90px;
    display: flex;
    justify-content: space-between;
`;
const ImaArrow = styled.div`
    width: 15%;
    margin-right: 80px;
`;
const Black = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    width: 90%;
`;
const Titl = styled.h2`
    margin-bottom: 20px;
    color: #0c7479;
    font-size:35px;
`;
const Lists = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const List = styled(Link)`
    width: 32.33%;
    background-color: #f9f9f9;
    margin-bottom: 21px;
    border-radius: 8px;
    padding-bottom: 12px;
    transform: scale(0.9);
        transition: all 0.2s ease-in-out 0s;
        &:hover {
            transform: scale(1);
        }
    }
    @media all and (max-width: 980px) {
        width: 48.33%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        margin: 0 auto;
    }
`;
const Listimg = styled.div`
    maregin-bottom: 20px;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const Whitename = styled.h4`
    color: #0c7479;
    font-size:16px;
    padding: 5px 15px;
    font-family: "dm_sansregular";
`;
const Whites = styled.div`
`;
const Button = styled.button`
    display: inline-block;
    border-radius:50px;
    color:#0c7479;
    font-size:16px;
    text-align:center;
`;
const Span = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-left: 6px;
`;
const RightArrow = styled.img`
    display: inline-block;
    width: 12px;100%
`;
const Whitebox = styled.div`
    display: flex;
    padding-top: 12px;
    justify-content: space-between;
    align-items: center;
    left: 36%;
    @media all and (max-width: 1380px) {
        left: 21%;
    }
    @media all and (max-width: 980px) {
        left: 23%;
    }
    @media all and (max-width: 640px) {
        left: 28%;
    }
    @media all and (max-width: 360px) {
        left: 23%;
    }
`;
