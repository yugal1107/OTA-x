import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import AdminHome from "./AdminHome";
import About from "./About";
import Contact from "./ContactHelp";

export default function AdminDashboard() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<AdminHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
