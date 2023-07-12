import React, { useState } from 'react';

// images
import banner from "../../../assets/images/contactes.svg"

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";


function Talk() {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        setName('');
        setPhoneNumber('');
        setShowModal(false);
    };
    
    return (
        <>
            <Talks>
                <Hello>
                    <Heading>Let Us Talk</Heading>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam saepe sequi porro illum dolores temporibus cum qui eos excepturi sunt tenetur quis repudiandae vitae ex, voluptatem sapiente explicabo dolorem Cumque.</Para>
                    <ButtonBox>
                        <Button onClick={() => setShowModal(true)}>Click Here</Button>
                    </ButtonBox>
                </Hello>
                <BannerImg>
                    <Image src={banner} />
                </BannerImg>
            </Talks>
            {showModal && (
        <ModalWrapper>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            <Form onSubmit={handleSubmit}>
              <Label>
                Name:
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Label>
              <br />
              <Label>
                Phone Number:
                <Input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Label>
              <br />
              <ButtonMark type="submit" value="Submit" />
            </Form>
          </ModalContent>
        </ModalWrapper>
      )}
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
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
`;
const CloseButton = styled.span`
    position: absolute;
    top: 40px;
    right: 46px;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
`;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input`
    width: 100%;
    padding: 10px;
    display: inline-block;
    border: 1px solid #0c7479;
    border-radius: 12px;
    margin-bottom: 15px;
`;
const ButtonMark = styled.input`
    padding: 12px 25px;
    border-radius: 50px;
    color: #fff;
    background: #0c7479;
    display: inline-block;
`;


export default Talk

