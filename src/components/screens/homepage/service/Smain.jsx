import React, { useState } from 'react';

// package
import styled from 'styled-components';

// components
import PopupForm from './PopupForm';

// images
import backimg from "../../../assets/images/backImg.png"


function Smain() {

    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({});

    const openPopup = (data) => {
        setShowPopup(true);
        setFormData(data);
    };
    
    const closePopup = () => {
        setShowPopup(false);
        setFormData({});
    };

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
        {
            id:4,
            title: 'Website Development',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service12.jpeg'),
        },
        {
            id:5,
            title: 'Web Application',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service.jpg'),
        },
        {
            id:6,
            title: 'Degital Marketing',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service10.jpeg'),
        },
        {
            id:7,
            title: 'Website Development',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service12.jpeg'),
        },
        {
            id:8,
            title: 'Web Application',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service.jpg'),
        },
        {
            id:9,
            title: 'Website Development',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.This part of chemistry deals with atomic structure and molecular structure.structure and molecular structure.',
            image: require('../../../assets/images/service12.jpeg'),
        },
    ]

    return (
    <>
            <Containere>
                <Top>
                    <Name>Our Services</Name>
                    <Desc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero illo ducimus ullam maiores? Id placeat ducimus,
                        amet ad accusamus facilis in assumenda, officiis illum distinctio perferendis mollitia dolore quasi dolorum.
                    </Desc>
                </Top>
            </Containere>
            {showPopup && (
                <PopupForm formData={formData} closePopup={closePopup} />
            )}
            <Full>
                <ImaArrow>
                    <Black src={require("../../../assets/images/Arrow.png")}
                        alt="Arrow" />
                </ImaArrow>
                <Arrows>
                    <SHead>Our Major Services</SHead>
                    <FlexBox>
                        {datas.map((item) => (
                        <Cards key={item.id} onClick={() => openPopup(item)}>
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
                </Arrows>
            </Full>
    </>
    )
}


const Containere = styled.div`
    background:url(${backimg}); 
    background-size:cover;
    padding: 60px 120px;
    @media all and (max-width: 1380px) {
        padding: 60px 70px;
    }
    @media all and (max-width: 980px) {
        padding: 60px 46px;
    }
    @media all and (max-width: 360px) {
        padding: 60px 30px;
    }
`;
const Top = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 50px;
`;
const Name = styled.h2`
    color: #0c7479;
    font-size: 35px;
    font-family: "dm_sansbold";
    margin-bottom: 25px;
    @media all and (max-width: 1380px) {
        font-size: 45px;
    }
    @media all and (max-width: 1280px) {
        font-size: 40px;
    }
    @media all and (max-width: 640px) {
        font-size: 32px;
    }
    @media all and (max-width: 360px) {
        font-size: 28px;
    }
`;
const Desc = styled.p`
    color: #0c7479;
    width: 60%;
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
const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        flex-wrap: flex;
    }
`;
const Full = styled.div`
    background: linear-gradient(#fff, #FFB6C1);
    padding: 80px 120px;
    display: flex;
    justify-content: space-between;
`;
const ImaArrow = styled.div`
    width: 12%;
`;
const Black = styled.img`
    display: block;
    width: 100%;
`;
const Arrows = styled.div`
    width: 80%;
`;
const SHead = styled.h2`
    font-size: 30px;
    color:#0c7479;
    margin-bottom: 30px;
`;
const Cards = styled.div`
    width: 33%;
    margin-bottom: 40px;
    @media all and (max-width: 1280px) {
        width: 32%;
    }
    @media all and (max-width: 980px) {
        width: 50%;
    }
    @media all and (max-width: 480px){
        width: 100%;
        margin: 0 auto;
        margin-right:0;
    }
`;
const Card = styled.div`
    width: 90%; 
    border-radius:12px;
    box-shadow: -1px 0px 4px -2px #9e9696;
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
        margin-bottom: 30px;
        width: 85%;
    }
    @media all and (max-width: 480px){
        left: 220px;
        font-size: 20px;
    }   
`;
const Item = styled.div`
    width: 100%; 
`;
const Image = styled.img`
    width: 100%;
    display: block;
    border-top-right-radius:12px;
    border-top-left-radius:12px;
`;
const Containeres = styled.div`
    padding: 30px 14px;
`;
const Text = styled.h3`
    font-size: 14px;
    color:#0c7479;
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
    color: #9e9696;
    font-family: "dm_sansregular";
    @media all and (max-width: 768px){
        font-size: 14px;
    }
    
`;


export default Smain