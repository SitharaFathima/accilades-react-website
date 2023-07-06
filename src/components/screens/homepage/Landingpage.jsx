import React from 'react'

//components
import MainPage from './home/MainPage';
import Intro from './intro/Intro';
import Service from './service/Service';
import Testimonial from './testimonials/Testimonial';
import Talk from './talk/Talk';
import Footer from './footer/Footer';

function Landingpage() {
  return (
    <>
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