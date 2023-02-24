import React from "react";
import "./style.scss";
import Jbl from "../assets/jbl.png";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="wrapper">
      <img src={Jbl} className="jbl-center" alt=" " />
      <div className="content-wrapper">
        <div className="right-side"></div>
        <div className="right-side">
          <h1>Ouça suas músicas em qualquer lugar, até debaixo d'água.</h1>
          <div className="under-text">
            <p>Ouça suas músicas onde quiser por apenas <span>R$ 299,99</span> </p>
            <Button variant="contained" sx={{ bgcolor: "coral", ':hover': {bgcolor: "white", color: "coral"}}}>Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
