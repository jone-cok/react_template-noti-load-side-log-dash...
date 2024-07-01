import React from "react";

import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";

import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/login/Register.js";
import Reset from "./pages/login/Reset.js";

import NotFound from "./pages/404/NotFound.js";

import { Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin.js";

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/register" element={<Register />} />

        <Route exact path="/reset" element={<Reset />} />

        <Route exact path="/admin/*" element={<Admin />} />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
