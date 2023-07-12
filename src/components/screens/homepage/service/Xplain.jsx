import React from 'react'

// package
import styled from 'styled-components';

// images
import arrowkimg from "../../../assets/images/img2.png"
import arrowkimge from "../../../assets/images/img7.png"



function Xplain() {
    
    const datase = [
        {
            id:1,
            title: 'Security',
            description: 'This part of chemistry deals with atomic chemistry deals with atomic chemistry deals.',
            image: require('../../../assets/images/img.png'),
        },
        {
            id:2,
            title: 'Licence',
            description: 'This part of chemistry deals withchemistry deals with atomic chemistry deals with atomicchemistry .',
            image: require('../../../assets/images/img1.png'),
        },
        {
            id:3,
            title: 'Result',
            description: 'This part of chemistry deals with atomic structure and molecular structure.structure and molecular.',
            image: require('../../../assets/images/img4.png'),
        },  
    ]

    return (
        <>
            <FlexBox>
        <Cards>
        {datase.map((item) => (
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
        </>
    )
}

const FlexBox = styled.div`
    padding: 50px 180px 80px;
    position: relative;
`;
const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;
const Card = styled.div`
    width: 32%; 
    padding-top: 30px;
    @media all and (max-width: 768px){
        width: 95%;
    }
    @media all and (max-width: 640px){
        width: 95%;
        margin: 0 auto 30px;
    }
`;
const Item = styled.div`
    width: 150px;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Containeres = styled.div`
    &:before {
        background: url(${arrowkimg});
        position: absolute;
        content: '';
        height: 19px;
        width: 170px;
        left: 32%;
        top: 118px;
    }
    &:after {
        background: url(${arrowkimge});
        position: absolute;
        content: '';
        height: 19px;
        width: 170px;
        right: 32%;
        top: 138px;
    }
`;
const Text = styled.h3`
    font-size: 14px;
    text-align: center;
    font-family: "dm_sansmedium";
    margin: 25px 0;
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

export default Xplain

