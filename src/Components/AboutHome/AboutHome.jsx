import React from "react";
import './AboutHome.scss'
import { Carousel, Container } from "react-bootstrap";
import nestle from "../../Assets/nestleWX.svg";
import UBA from "../../Assets/UBA-WX.svg";
import OGSWX from "../../Assets/OGSWX.svg";
import NaijaBrewery from "../../Assets/Nigerian-BreweriesWX.svg";
import Jaiz from "../../Assets/jaiz-bankWX.svg";
import cocacola from "../../Assets/Coca-ColaWX.svg";
import tobacco from "../../Assets/britTobaccoWX.svg";
import accessbank from "../../Assets/AccessBankWX.svg";

function AboutHome() {
  return (
    <Container>
      <div className="aboutText">
        <h2> Partners </h2>
      </div>

      <Carousel className="d-flex justify-content-center px-5">
        <Carousel.Item>
          <img src={cocacola} alt="First slide" />
          <img src={Jaiz} alt="First slide" />
          <img src={accessbank} alt="First slide" />
          <img src={tobacco} alt="First slide" />
          <img src={nestle} alt="First slide" />
          <img src={NaijaBrewery} alt="First slide" />
          <img src={UBA} alt="Third slide" />
          <img src={OGSWX} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cocacola} alt="First slide" />
          <img src={Jaiz} alt="First slide" />
          <img src={accessbank} alt="First slide" />
          <img src={tobacco} alt="First slide" />
          <img src={nestle} alt="First slide" />
          <img src={NaijaBrewery} alt="First slide" />
          <img src={UBA} alt="Third slide" />
          <img src={OGSWX} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cocacola} alt="First slide" />
          <img src={Jaiz} alt="First slide" />
          <img src={accessbank} alt="First slide" />
          <img src={tobacco} alt="First slide" />
          <img src={nestle} alt="First slide" />
          <img src={NaijaBrewery} alt="First slide" />
          <img src={UBA} alt="Third slide" />
          <img src={OGSWX} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AboutHome;
