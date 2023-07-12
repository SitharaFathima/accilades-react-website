import React from 'react';

// package
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

// images
import greyimg from "../../../assets/images/grey.jpg"

function Footer() {
    return (
    <>
        <FooterBox>
            <FooterContainer>
                <LogoContainer>
                    <Item><Logobox><Logo src={require("../../../assets/images/logo.png")} alt="Logo" /></Logobox></Item>
                    <Item><Heading>Accolades</Heading></Item>
                    <Item><Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iusto nam quidem ab expedita dignissimos laboriosam quod cupiditate quasi commodi dicta, itaque nihil even Dummy content description goes here.</Description></Item>
                </LogoContainer>
                <LinkContainer>
                    <Item><Heading>Company</Heading></Item>
                    <Item><Link to="/home">Home</Link></Item>
                    <Item><Link to="/about">About</Link></Item>
                    <Item><Link to="/service">service</Link></Item>
                    <Item><Link to="/gallery">Gallery</Link></Item>
                    <Item><Link to="/contact">Contact</Link></Item>
                </LinkContainer>
                <LinkContainer>
                    <Item><Heading>Resources & Tools</Heading></Item>
                    <Item><Link href="#">Digital Marketing blog</Link></Item>
                    <Item><Link href="#">Blog Title Generator</Link></Item>
                    <Item><Link href="#">Beginer's Guide to SEO</Link></Item>
                    <Item><Link href="#">Marketeting Budget calculator</Link></Item>
                    <Item><Link href="#">Construction wise Videos</Link></Item>
                </LinkContainer>
            </FooterContainer>
            <BottomBox>
                <Social>
                    <Spans href="#"><Icon src={require("../../../assets/icons/social.png")} alt="social" /></Spans>
                    <Spans href="#"><Icon src={require("../../../assets/icons/social1.png")} alt="social" /></Spans>
                    <Spans href="#" ><Icon src={require("../../../assets/icons/social2.png")} alt="social" /></Spans>
                    <Spans href="#"><Icon src={require("../../../assets/icons/social3.png")} alt="social" /></Spans>
                </Social>
            </BottomBox>
        </FooterBox>
    </>
    )
}
const FooterBox = styled.footer`
    background:url(${greyimg}); 
    background-size: cover;
    padding: 60px 140px 30px;
    @media all and (max-width: 1180px){
        padding: 60px 80px 30px;
    }
    @media all and (max-width: 768px){
        padding: 60px 50px 30px;
    }
    @media all and (max-width: 480px){
        padding: 60px 30px 30px;
    }
`;
const FooterContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom:20px;
    border-bottom: 1px solid #0c7479;
    @media all and (max-width: 980px){
        flex-wrap: wrap;
    }
`;
const LogoContainer = styled.ul`
    text-decoration: none;
    width: 60%;
    margin-bottom:20px;
    @media all and (max-width: 980px){
        width: 90%;
    }
    @media all and (max-width: 640px){
        width: 100%;
    }
`;
const LinkContainer = styled.ul`
    text-decoration: none;
    width: 30%;
    margin-bottom:20px;
    @media all and (max-width: 980px){
        width: 35%;
    }
    @media all and (max-width: 640px){
        width: 50%;
    }
`;
const Item = styled.li`
    margin-bottom: 10px;
`;
const Logobox = styled(NavLink)`
    display: inline-block;
    width: 100px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h4`
    font-size: 18px;
    margin-bottom: 10px;
    text-align:left;
    color: #0c7479;
    font-weight: bold;
    @media all and (max-width: 480px){
        font-size: 16px;
    }
    @media all and (max-width: 360px){
        font-size: 14px;
    }
`;
const Description = styled.p`
    font-size: 16px;
    width:  80%;
    color: #0c7479;
    @media all and (max-width: 640px){
        width: 100%;
    }
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`;
const Link = styled(NavLink)`
    color: #0c7479;
    font-size: 16px;
    text-decoration: none;
    margin-right: 10px;
    @media all and (max-width: 480px){
        font-size: 14px;
    }
`; 
const BottomBox = styled.div`
    margin-top: 30px;
`; 
const Social = styled.div`
    text-align: center;
`; 
const Spans = styled(NavLink)`
    display: inline-block;
    width:18px;
    height:18px;
    margin-right: 15px;
`; 
const Icon = styled.img`
    display: inline-block;
    width: 100%;
`; 
export default Footer