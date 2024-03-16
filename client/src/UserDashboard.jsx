import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import UserHome from "./UserHome";
import About from "./About";
import Help from "./Help";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";

export default function UserDashboard() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<UserHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Help />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}