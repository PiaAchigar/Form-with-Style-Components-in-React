import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Main, DivApp } from "./Elements/StylesApp";
import Formulario from "./Components/Form";
import Principal from "./Components/Principal";

function App() {
  return (
    <DivApp>
      <Main>
        <Principal />
      </Main>
      <Formulario />
    </DivApp>
  );
}
export default App;
