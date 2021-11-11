import React from "react";
import { Main, DivApp } from "./Elements/StylesApp";
import Header from "./Components/Header"
import Footer  from "./Components/Footer";
import Formulario from "./Components/Form";
import Index from "./Components/Index";


function App() {
  return (
    <DivApp>
      
      <Header></Header>
      
    {/*  <Main>
        <Index />
      </Main> */}
       <Formulario /> 

       <Footer></Footer>
    </DivApp>
  );
}
export default App;
