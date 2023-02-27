import React from "react";
import "./style.scss";
import Jbl from "../assets/jbl.png";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="wrapper">
      <img src={Jbl} className="jbl-center" alt=" " />
      <div className="upper-content-wrapper">        
        <div className="right-side">
          <h1>Ouça suas músicas em qualquer lugar, até debaixo d'água.</h1>
          <div className="under-text">
            <p>
              Ouça suas músicas onde quiser por apenas <span>R$ 1.299,99</span>{" "}
            </p>
            <Button
              variant="contained"
              sx={{
                bgcolor: "coral",
                ":hover": { bgcolor: "white", color: "coral" },
              }}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
      <div className="lower-content-wrapper">    
        <div className="description-text">
          <h2>Jbl é a melhor e mais legal caixa de som</h2>
          <div className="card-wrapper">
            <div className="card">
              <div className="rounded-number">1</div>
              <div className="card-text">texto do card</div>
            </div>
            <div className="dot-separator">..........</div>
            <div className="card">
              <div className="rounded-number">2</div>
              <div className="card-text">texto do card</div>
            </div>
            <div className="dot-separator">..........</div>
            <div className="card">
              <div className="rounded-number">3</div>
              <div className="card-text">texto do card</div>
            </div>
            <div className="dot-separator">..........</div>
            <div className="card">
              <div id="heart" className="">4</div>
              <div className="card-text">texto do card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
