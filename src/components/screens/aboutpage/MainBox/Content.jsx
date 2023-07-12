import React from 'react'

// package
import styled from "styled-components";

function Content() {

 // mapping
    const data = [
        {
            id: 1,
            title: "Awesome project in website development",
            description: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am et dolor e consequat lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am et dolor e consequat",
            image: require("../../../assets/images/service10.jpeg"),
        },
        {
            id: 2,
            title: "Awesome project in web development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolores iusto rem ipsa itaque! Corporis ratione unde quis. Illo voluptatum praesentium, dolores quidem velit placeat exercitationem quaerat. Ab, officiis aspernatur!",
            image: require("../../../assets/images/service12.jpeg"),
        },
        {
            id: 3,
            title: "Awesome project in Digital Marketing",
            description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am et dolor e consequat lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit am et dolor e consequat",
            image: require("../../../assets/images/service.jpg"),
        },
    ];
    return (
    <>
        <Containeres>
            <Name>Latest Work Updates!</Name>
            <Bottom>
                {data.map((item) => (
                    <Widgets key={item.index}>
                        <Left>
                            <Heading>{item.title} </Heading>
                            <Paragraph>{item.description}</Paragraph>
                        </Left>
                        <Right>
                            <Rightimg src={item.image} alt="Frames" />
                        </Right>
                    </Widgets>
                ))}
            </Bottom>
            </Containeres>
    </>
    )
}


const Containeres = styled.div`
    padding: 5% 12%;
    background: #fcfbf8;
    @media all and (max-width: 1280px) {
        padding: 5% 7%;
    }
    @media all and (max-width: 980px) {
        padding: 7% 5%;
    }
    @media all and (max-width: 640px) {
        padding: 9% 5%;
    }
    @media all and (max-width: 480px) {
        padding: 11% 5%;
    }
`;
const Name = styled.h2`
    color:#0c7479;
    font-size: 30px;
    font-family: "dm_sansbold";
    margin-bottom: 35px;
    text-align: center;
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
const Bottom = styled.section`
    margin-bottom: 50px;
`;
const Widgets = styled.div`
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff6f9;
    box-sizing: border-box;
    margin-bottom: 30px;
    border-radius: 12px;
    border: 1px solid rgb(255, 234, 241);
    &:nth-child(2n) {
        flex-direction: row-reverse;
        background-color: #f1fcff;
        border: 1px solid #c8efef;
        @media all and (max-width: 980px) {
            flex-flow: column-reverse;
        }
        transform: scale(0.9);
        transition: all 0.2s ease-in-out 0s;
        &:hover {
            transform: scale(1);
            background: linear-gradient(90deg, #D1FFBD 2%, #90EE90 97.59%);
        }
    }
    transform: scale(0.9);
    transition: all 0.2s ease-in-out 0s;
    &:hover {
        transform: scale(1);
        background: linear-gradient(90deg, #FFE4E2 2%, #FFB6C1 97.59%);
    }
    @media all and (max-width: 1380px) {
        padding: 50px;
    }
    @media all and (max-width: 1280px) {
        padding: 35px;
    }
    @media all and (max-width: 980px) {
        flex-flow: column-reverse wrap;
    }
`;
const Left = styled.div`
    width: 54%;
    @media all and (max-width: 1380px) {
        width: 50%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Heading = styled.h3`
    font-size: 16px;
    color:#0c7479;
    font-size: 24px;
    font-family: "dm_sansbold";
    margin-bottom: 20px;
    width: 95%;
    margin-bottom: 20px;
    @media all and (max-width: 1380px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        width: 100%;
        font-size: 22px;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
`;
const Paragraph = styled.p`
    color: #adadad;
    font-size: 18px;
    margin-bottom: 64px;
    width: 100%;
    @media all and (max-width: 1380px) {
        margin-bottom: 10px;
    }
    @media all and (max-width: 980px) {
        font-size: 16px;
    }
`;

const Right = styled.div`
    width: 42%;
    @media all and (max-width: 1380px) {
        width: 45%;
    }
    @media all and (max-width: 980px) {
        width: 80%;
        margin: 0 auto 30px;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const Rightimg = styled.img`
    width: 100%;
    display: block;
    border-radius:20px;
`;

export default Content