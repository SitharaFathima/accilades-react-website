import React, { useState, useEffect } from 'react';

// package
import styled from 'styled-components';

//components
import MainPage from './home/MainPage';
import Intro from './intro/Intro';
import Service from './service/Service';
import Testimonial from './testimonials/Testimonial';
import Talk from './talk/Talk';
import Footer from './footer/Footer';



function Landingpage() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalShownBefore = sessionStorage.getItem('modalShownBefore');
    if (!modalShownBefore) {
      setShowModal(true);
      sessionStorage.setItem('modalShownBefore', 'true');
    }
  }, []);

  const handleSubmit = (formData) => {
    console.log('Submitted data:', formData);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
    
    {showModal && (
        <ModalWrapper>
          <ModalContent>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                handleSubmit(data);
              }}
            >
              <Label htmlFor="name">Name</Label>
              <br />
              <Input type="text" id="name" name="name" required placeholder='Name' />
              <br />
              <Label htmlFor="phone">Phone Number</Label>
              <br />
              <Input type="tel" id="phone" name="phone" required placeholder='Phone Number' />
              <br />
              <Button type="submit">Submit</Button>
            </Form>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
          </ModalContent>
        </ModalWrapper>
      )}
    
        <MainPage />
        <Intro />
        <Service />
        <Testimonial />
        <Talk />
        <Footer />
    </>
  )
}

export default Landingpage

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width:30%;
    border: 1px solid #0c7479;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 38px;
    font-size: 35px;
    right: 74px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
const Form = styled.form`
  
`;
const Label = styled.label`
    
`;
const Input = styled.input`
    width: 100%;
    padding: 10px;
    display: inline-block;
    border: 1px solid #0c7479;
    border-radius: 12px;
    margin-bottom: 15px;
`;
const Button = styled.button`
  padding: 12px 25px;
  border-radius: 50px;
  background-color: #0c7479;
  color: #fff;
`;
