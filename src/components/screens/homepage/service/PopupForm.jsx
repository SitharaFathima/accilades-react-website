import React from 'react';

// package
import styled from 'styled-components';

const PopupForm = ({ formData, closePopup }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Overlay>
            <FormContainer>
                    <CloseButton onClick={closePopup}>Close</CloseButton>
                    <Form onSubmit={handleSubmit}>
                        <Label>
                                Name:
                                <Input placeholder='Name' type="text" name="projectName" />
                        </Label>
                        <Label>
                                Email:
                                <Input placeholder='Email' type="email" name="email" />
                        </Label>
                        <Label>
                                Requirements:
                                <Textarea name="message" rows="4" />
                        </Label>
                        <Label>
                                Service:
                            <Select name="service">
                                <option value="service1">Web application</option>
                                <option value="service2">Mobile application</option>
                                <option value="service2">Digital marketing</option>
                                <option value="service2">Website Development</option>
                                <option value="service2">Hosting</option>
                            </Select>
                        </Label>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </Form>
            </FormContainer>
        </Overlay>
    );
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const FormContainer = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    width: 50%;
    @media all and (max-width: 768px){
        width: 80%;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    top: 44px;
    color: #fff;
    right: 55px;
    padding: 8px 12px;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;
const Form = styled.form`
`;
const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
`;
const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Textarea = styled.textarea`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
const SubmitButton = styled.button`
    display: inline-block;
    padding:12px 25px;
    border-radius:50px;
    background-color:#0c7479;
    color: #FFFFFF;
    text-align:center;
    cursor: pointer;
    margin-top:10px;
`;

export default PopupForm;
