import React from "react";
import Header from "../components/header";
import Homecontent from "../components/homecontent";
import { useState } from "react";



function Home() {

  const [toggleRegistration, setRegistration] = useState(false);
  const handleRegToggle = () => {
    setRegistration(!toggleRegistration);
  };

  return (
    <div>
      <Header clickRegister={handleRegToggle}/>
      <Homecontent regToggleValue={toggleRegistration} />
    </div>
  ) 
  

}

export default Home;
