import React from "react";
import { Main, DivApp } from "./Elements/StylesApp";
import Formulario from "./Components/Form";
import Index from "./Components/Index";

function App() {
  return (
    <DivApp>
      <Main>
        <Index />
      </Main>
      <Formulario />
    </DivApp>
  );
}
export default App;
