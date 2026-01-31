import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Header from './pages/header/Header.jsx'
import Footer from './pages/header/Footer.jsx'
import Products from './pages/Products.jsx'
import DeliveryModel from './pages/DeliveryModel.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Careers from './pages/Careers.jsx'
import ContactUs from './pages/ContactUs.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/delivery-model" element={<DeliveryModel />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<ContactUs />} />





            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
