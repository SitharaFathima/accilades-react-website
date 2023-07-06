import React from 'react';

// package
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

// components

function Header() {
    return (
        <>
            <Head>
                <Heading>
                    <LogoBox>
                        <Logo src={require("../../../assets/images/logo.png")}
                            alt="Logo" />
                    </LogoBox>
                </Heading> 
                <Nav>
                    <Lists>
                        <List><Item to="/home">Home</Item></List>
                        <List><Item to="/about">About</Item></List>
                        <List><Item to="/service" >Services</Item></List>
                        <List><Item to="/gallery">Gallery</Item></List>
                        <List><Item to="/contact">Contact</Item></List>
                    </Lists>
                    <Hambergur>
                        
                    </Hambergur>
                </Nav>
            </Head>
        </>
    )
}

export default Header

const Head = styled.header`
    background-color: #ebebeb;
    padding: 10px 100px;
    display : flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding: 30px 100px;
    }
    @media all and (max-width: 1180px) {
        padding: 16px 60px;
    }
    @media all and (max-width: 480px) {
        padding: 16px 30px;
    }
`;
const Heading = styled.h1`
    width:10%;
    @media all and (max-width: 1080px) {
        width: 18%;
    }
    @media all and (max-width: 768px) {
        width: 25%;
    }
    @media all and (max-width: 480px) {
        width: 44%;
    }
`;
const LogoBox = styled.a`
    display: block;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Nav = styled.nav`
    
`;
const Hambergur = styled.div`
    display: none;
    @media all and (max-width: 768px) {
        display : block;
    }
`;
const Lists = styled.ul`
    display: flex;
    @media all and (max-width: 768px) {
        display : none;
    }
`;
const List = styled.li`
    margin-right: 60px;
    &: last-child {
        margin-right: 0;
    }
    @media all and (max-width: 1380px) {
        margin-right:40px
    }
    @media all and (max-width: 980px) {
        margin-right:30px
    }
`;
const Item = styled(NavLink)`
    font-size: 16px;
    color: #0c7479;
    font-weight: 600;
    cursor: pointer;
`;
