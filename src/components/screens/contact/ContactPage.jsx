import React from 'react';

// package
import styled from 'styled-components';

// components
import Header from '../homepage/header/Header';
import Footer from '../homepage/footer/Footer';

// icons
import LocationIcon from '../../assets/icons/pin.png';
import EmailIcon from '../../assets/icons/email.png';
import PhoneIcon from '../../assets/icons/phone-call.png';


const ContactPage = () => {
    return (
    <>
        <Header />
        <ContactBox>
            <Container>
                <LeftBox>
                    <Heading>Let's Talk...!</Heading>
                    <Form>
                        <FormItem>
                            <Label>Name</Label>
                            <Input placeholder='Name' type="text" />
                        </FormItem>
                        <FormItem>
                            <Label>Email</Label>
                            <Input placeholder='Email' type="email" />
                        </FormItem>
                        <FormItem>
                            <Label>Phone Number</Label>
                            <Input placeholder='Phone Number' type="tel" />
                        </FormItem>
                        <FormItem>
                            <Label>Message</Label>
                            <Textarea placeholder='Message' />
                        </FormItem>
                        <Button type="submit">Submit</Button>
                    </Form>
                </LeftBox>
                <RightBox>
                    <Heading>Get in Touch with Accolades</Heading>
                    <Des>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quos saepe ipsa. ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quos saepe ipsa. At cumque earum error accusamus amet quia quasi, maiores minima odio suscipit laudantium delectus. Eius amet deserunt asperiores</Des>
                    <Content>
                        <Icons>
                            <Iconbox><Icon src={LocationIcon} /></Iconbox>
                            <ContentText>punaloor, Earnakulam ,Kerala</ContentText>
                        </Icons>
                        <Icons>
                            <Iconbox><Icon src={EmailIcon} /></Iconbox>
                            <ContentText>hello@example.com</ContentText>
                        </Icons>
                        <Icons>
                            <Iconbox><Icon src={PhoneIcon} /></Iconbox>
                            <ContentText>91-8776456543</ContentText>
                        </Icons>
                    </Content>
                </RightBox>
            </Container>
        </ContactBox>
        <Footer />
    </>
    );
};

const ContactBox = styled.section`
    padding: 80px 100px;
    @media all and (max-width: 1180px){
        padding: 80px 20px;
    }
`;
const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 96%;
    @media all and (max-width: 768px){
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
const LeftBox = styled.div`
    flex: 1;
    padding: 20px;
    width: 46%;
    @media all and (max-width: 768px){
        width: 96%;
        margin-bottom: 30px;
    }
`;
const RightBox = styled.div`
    flex: 1;
    padding: 20px;
    width: 46%;
    @media all and (max-width: 768px){
        width: 96%;
    }
`;
const Heading = styled.h2`
    color: #0c7479;
    font-size:30px;
    margin-bottom: 30px;
    font-family: "dm_sansbold";
`;
const Form = styled.form``;

const FormItem = styled.div`
    margin-bottom: 20px;
`;
const Label = styled.label`
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
`;
const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #0c7479;
    border-radius:10px;
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #0c7479;
    border-radius:10px;
`;
const Button = styled.button`
    display: inline-block;
    padding:12px 25px;
    border-radius:50px;
    background-color:#0c7479;
    color: #FFFFFF;
    text-align:center;
    cursor: pointer;
`;
const Des = styled.p`
    font-size: 16px;
    font-family: "dm_sansregular";
    margin-bottom: 20px;
`;
const Content = styled.span`
    display: inline-block;
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
`;
const Iconbox = styled.span`
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right:15px;
`;
const Icon = styled.img`
    display: block;
    width:100%;
    color: red;
`;
const ContentText = styled.p`
    margin: 5px 0;
    font-size: 16px;
    font-family: "dm_sansregular";
`;

export default ContactPage;
