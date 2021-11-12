import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";

import { Main, DivApp } from "./Elements/StylesApp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Formulario from "./Components/Form";
import Principal from "./Components/Principal";

function App() {
  return (
    <Router>
      <DivApp>
        <Header />
        <Main>
          <Routes>
            <Route path="/">
              <Principal />
            </Route>
            <Route path="/registro">
              <Formulario />
            </Route>
          </Routes>
        </Main>

        <Footer></Footer>
      </DivApp>
    </Router>
  );
}
export default App;
