import React from "react";
import { Main, DivApp } from "./Elements/StylesApp";
import Header from "./Components/Header"
import Footer  from "./Components/Footer";
import Formulario from "./Components/Form";
import Index from "./Components/Index";
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
 
function App() {
  return (

    <Router>
      <DivApp>
      
      <Header></Header>
      <Routes>  
          
          <Route path='/' element={<Formulario />}/>
      
      </Routes>
      <Footer></Footer>
      </DivApp>

      </Router>
   
  );
}
export default App;
