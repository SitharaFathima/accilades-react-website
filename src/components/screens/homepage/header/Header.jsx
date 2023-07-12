import React, { useState } from 'react';

// package
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


function Header() {
    const Items = [
        { 
            id: 1, 
            title: "Home",
            link: "/home",
        },
        { 
            id: 2, 
            title: "About",
            link: "/about",
        },
        { 
            id: 3, 
            title: "Services",
            link: "/service", 
        },
        { 
            id: 3, 
            title: "Gallery",
            link: "/gallery", 
        },
        { 
            id: 3, 
            title: "Contacts",
            link: "/contact", 
        },
    ];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Head>
                <Heading>
                    <LogoBox>
                        <Logoes src={require("../../../assets/images/logo.png")}
                            alt="Logo" />
                    </LogoBox>
                </Heading> 
                <NavItem>
                    <Lists>
                    {Items.map((item, key) => (
                        <List 
                            >
                            <Item 
                                key={key}
                                to={item.link}
                            >{item.title}
                            </Item>
                        </List>
                    ))}
                    </Lists>
                    <MobileMenu>
                        <HambergurIcon> 
                            <Logo onClick={toggleMenu}>
                                {isOpen ? (
                                    <CloseIcon>
                                        <span></span>
                                        <span></span>
                                    </CloseIcon>
                                ) : (
                                    <MenuIcon>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </MenuIcon>
                                )}
                            </Logo>
                        </HambergurIcon>
                        <Nav>
                            <Menu isOpen={isOpen}>
                                <MenuItem exact to="/" onClick={toggleMenu}>
                                    Home
                                </MenuItem>
                                <MenuItem to="/about" onClick={toggleMenu}>
                                    About
                                </MenuItem>
                                <MenuItem to="/service" onClick={toggleMenu}>
                                    Services
                                </MenuItem>
                                <MenuItem to="/gallery" onClick={toggleMenu}>
                                    Gallery
                                </MenuItem>
                                <MenuItem to="/contact" onClick={toggleMenu}>
                                    Contact
                                </MenuItem>
                            </Menu>
                        </Nav>
                    </MobileMenu>
                </NavItem>
            </Head>
        </>
    )
}

export default Header



const Head = styled.header`
position: relative;

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
const Logoes = styled.img`
    display: block;
    width: 100%;
`;
const NavItem = styled.nav`
    
`;
const HambergurIcon = styled.div`
`;
const MobileMenu = styled.div`
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
const Nav = styled.div`
`;
const Logo = styled(NavLink)`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
`;
const MenuIcon = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 3px;
        width: 25px;
        background-color: #333;
        margin-bottom: 4px;
    }
`;
const CloseIcon = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 3px;
        width: 25px;
        background-color: #333;
        margin-bottom: -3px;
        transform: rotate(45deg);
        transition: transform 0.3s ease-in-out;
    }
    span:nth-child(2) {
        transform: rotate(-45deg);
    }
`;
const Menu = styled.div`
    position:absolute;
    z-index: 200;
    left:0px;
    top: 73px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    width: 100%;
    transition: all 0.3s ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        max-height: initial;
        width: auto;
        margin-top: 0;
    }
`;
const MenuItem = styled(NavLink)`
    padding: 10px 50px;
    color: #333;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #ddd;
    }
    &.active {
        background-color: #ddd;
    }
    @media (min-width: 768px) {
        margin-left: 20px;
    }
`;