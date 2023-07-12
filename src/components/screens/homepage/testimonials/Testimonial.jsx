import React, { useState } from 'react';

// package
import styled from 'styled-components';

// images
import quotes from "../../../assets/icons/quotes.png";
import test from "../../../assets/images/Test.jpg";


// Dummy testimonial data
const testimonials = [
    {
        id:1,
        name: 'John Doe',
        position: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque id sem scelerisque, ac consectetur metus consequat.',
        image: require("../../../assets/images/profail.jpeg"),
    },
    {
        id:2,
        name: 'Jane Smith',
        position: 'CTO',
        description: 'Vestibulum id justo dapibus, efficitur felis eu, eleifend tortor. Suspendisse ac placerat libero. Nullam tincidunt lacus vel ligula malesuada pulvinar.',
        image: require("../../../assets/images/profail2.jpeg"),
    },
    {
        id:3,
        name: 'Michael Johnson',
        position: 'Lead Developer',
        description: 'Praesent tempor ex ac felis tristique lobortis. Suspendisse ut iaculis leo. Donec sed mi efficitur, aliquet lacus sed, ultrices lacus.',
        image: require("../../../assets/images/profail3.jpeg"),
    },
    {
		id:4,   
        name: 'Emily Davis',
        position: 'Marketing Manager',
        description: 'Aliquam scelerisque, nunc nec venenatis feugiat, neque leo cursus justo, in pellentesque tellus purus sit amet urna.',
        image: require("../../../assets/images/profail4.jpeg"),
    },
    {
		id:5,
        name: 'Alex Turner',
        position: 'Designer',
        description: 'Fusce eu justo tristique, congue risus et, malesuada neque. Suspendisse sit amet mauris in diam bibendum posuere.',
        image: require("../../../assets/images/profail5.jpeg"),
    },
    {
        id:6,
        name: 'John Doe',
        position: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque id sem scelerisque, ac consectetur metus consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque id sem.',
        image: require("../../../assets/images/profail.jpeg"),
    },
    {
        id:7,
        name: 'Jane Smith',
        position: 'CTO',
        description: 'Vestibulum id justo dapibus, efficitur felis eu, eleifend tortor. Suspendisse ac placerat libero. Nullam tincidunt lacus vel ligula malesuada pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque id sem.',
        image: require("../../../assets/images/profail2.jpeg"),
    },
    {
        id:8,
        name: 'Michael Johnson',
        position: 'Lead Developer',
        description: 'Praesent tempor ex ac felis tristique lobortis. Suspendisse ut iaculis leo. Donec sed mi efficitur, aliquet lacus sed, ultrices lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo neque id sem.',
        image: require("../../../assets/images/profail3.jpeg"),
    },
    {
		id:9,   
        name: 'Emily Davis',
        position: 'Marketing Manager',
        description: 'Aliquam scelerisque, nunc nec venenatis feugiat, neque leo cursus justo, in pellentesque tellus purus sit amet urna.',
        image: require("../../../assets/images/profail4.jpeg"),
    },
    {
		id:10,
        name: 'Alex Turner',
        position: 'Designer',
        description: 'Fusce eu justo tristique, congue risus et, malesuada neque. Suspendisse sit amet mauris in diam bibendum posuere.',
        image: require("../../../assets/images/profail5.jpeg"),
    }
];

const Testimonial = () => {
    const [sliderRef, setSliderRef] = useState(null);

const handlePrevClick = () => {
    if (sliderRef) {
        sliderRef.scrollBy({
            left: -sliderRef.offsetWidth,
            behavior: 'smooth'
		});
    }
};

const handleNextClick = () => {
    if (sliderRef) {
        sliderRef.scrollBy({
            left: sliderRef.offsetWidth,
            behavior: 'smooth'
        });
    }
};

	return (
		<Container>
			<Name>Testimonial</Name>
			<TestimonialContainer>
				<TestimonialSlider ref={setSliderRef}>
					{testimonials.map((testimonial, index) => (
					<TestimonialCard key={index}>
					<TestimonialImage src={testimonial.image} alt="Profile" />
					<TestimonialName>{testimonial.name}</TestimonialName>
					<TestimonialPosition>{testimonial.position}</TestimonialPosition>
					<TestimonialQuote>
				        <Quote src={quotes} alt="Quote" />
					</TestimonialQuote>
					<TestimonialDescription>{testimonial.description}</TestimonialDescription>
				</TestimonialCard>
			))}
			</TestimonialSlider>
				<ArrowButton onClick={handlePrevClick}>&#8249;</ArrowButton>
				<ArrowButtone onClick={handleNextClick}>&#8250;</ArrowButtone>
			</TestimonialContainer>
		</Container>
    );
};

const Container = styled.section`
    background:url(${test}); 
    padding: 60px 130px;
    background-repeat:no-repeat;
    background-size:cover;
    @media all and (max-width: 980px){
        padding: 60px 40px;
    }
    @media all and (max-width: 640px){
        padding: 60px 20px;
    }
`;
const TestimonialContainer = styled.div`
	position: relative;
`;
const Name = styled.h2`
    font-size:30px;
    color: #0c7479;
    font-family: "dm_sansbold";
    margin-bottom: 40px;
    text-align: center;
`;
const TestimonialSlider = styled.div`
    display: flex;
    overflow-x: auto;
    width: 78%;
    margin: 0 auto;
    scroll-behavior: smooth;
    @media all and (max-width: 1280px){
        width: 85%;
    }
`;
const TestimonialCard = styled.div`
    padding: 50px;
    border-radius: 8px;
    margin-right: 20px;
    min-width: 967px;
    @media all and (max-width: 1380px){
        min-width: 780px;
    }
    @media all and (max-width: 1180px){
        min-width: 601px;
    }
    @media all and (max-width: 980px){
        min-width: 580px;
    }
    @media all and (max-width: 768px){
        min-width: 460px;
    }
    @media all and (max-width: 640px){
        min-width: 322px;
    }
    @media all and (max-width: 480px){
        min-width: 261px;
        padding: 30px 14px;
    }
    @media all and (max-width: 360px){
        min-width: 231px;
        padding: 30px 14px;
    }
`;

const TestimonialImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 0 auto 10px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
`;
const TestimonialName = styled.h3`
    margin-bottom: 5px;
    text-align: center;
    color: #0c7479;
    font-family: "dm_sansbold";
`;
const TestimonialPosition = styled.p`
    margin-bottom: 15px;
    text-align: center;
    font-size:16px;
    font-family: "dm_sansregular";
`;
const TestimonialQuote = styled.span`
    width: 30px;
    display: inline-block;
    height; 30px;
`;
const Quote = styled.img`
    width: 100%;
    display: block;
`;
const TestimonialDescription = styled.p`
    text-align: center;
    font-family: "dm_sansregular";
`;
const ArrowButton = styled.button`
	position: absolute;
    background-color: #0c7479;
	border: none;
	padding: 0 12px;
	outline: none;
	font-size: 30px;
	color: #999;
	cursor: pointer;
	transition: color 0.3s ease;
	left: 25px;
	top: 46%;
    &:hover {
        color: #555;
    }
    @media all and (max-width: 768px){
        left: -4px;
    }
`;
const ArrowButtone = styled.button`
	position: absolute;
	background-color: #0c7479;
	border: none;
	padding: 0 12px;
	outline: none;
	font-size: 30px;
	color: #999;
	cursor: pointer;
	transition: color 0.3s ease;
	right: 25px;
	top: 46%;
    &:hover {
        color: #555;
    }
    @media all and (max-width: 768px){
        right: 7px;
    }
`;

export default Testimonial;
