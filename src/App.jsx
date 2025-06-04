import React from "react";


import Header from "./marvel/header/header.jsx";
import Body from "./marvel/Body/Body.jsx";
import Footer from "./marvel/footer/Footer.jsx";
import Card from "./marvel/footer/Card.jsx";
import Comics from "./marvel/footer/Comics.jsx";

const App = ()=>{
  return(
    <>
      <Header/>
      <Body/>
      <Comics/>
      <Card/>
      <Footer/>
      </>
  );
}

export default App;
