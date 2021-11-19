import React from "react";

import { DivApp } from "./Elements/StylesApp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Formulario from "./Components/Form";
import Index from "./Components/Principal";
import Retos from "./Components/retos/Retos";
import Foro from "./Components/Foro/Foro";
import Login from "./Components/Login";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <DivApp>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/retos" element={<Retos />} />
          <Route path="/form" element={<Formulario />} />
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer></Footer>
      </DivApp>
    </Router>
  );
}
export default App;
