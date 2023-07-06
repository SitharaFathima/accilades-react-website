// style
import "./App.css";

// package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

// components
import Landingpage from "./components/screens/homepage/Landingpage";
import About from "./components/screens/aboutpage/About";
import ServiceDetail from "./components/screens/homepage/service/ServiceDetail";
import Gallery from "./components/screens/gallery/Gallery";
import Details from "./components/screens/gallery/Details";
import ContactPage from "./components/screens/contact/ContactPage";

function App() {
    return (
        <>
            <Helmet>
                <title>Accolades</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/home" element={<Landingpage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<ServiceDetail />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;