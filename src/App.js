import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Main, DivApp } from "./Elements/StylesApp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Formulario from "./Components/Form";
import Principal from "./Components/Principal";

function App() {
  return (
    <DivApp>
      <Main>
        <Principal />
      </Main>
      <Formulario />
      <Footer></Footer>
    </DivApp>
  );
}
export default App;
