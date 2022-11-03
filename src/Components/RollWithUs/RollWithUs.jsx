import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./RollWithUs.scss";
import truck from "../../Assets/truck.svg";
import settings from "../../Assets/settings.svg";
import saveMoney from "../../Assets/save-money.svg";

const RollWithUs = ({style}) => {
  return (
    <div style={style} className="rollwithus"  >

      <Container>
        <h2 style={{ textAlign: "center", color: "#000000", paddingTop:'2rem' }}>
          Here is why You should roll with us
        </h2>
        <Row>
          <Col md={4} className='rollItems'>
            <img src={saveMoney} alt="saveMoney" className="img-fluid pb-3"/>
            <p className="rollP" >Get paid on every kilogram of Waste collected</p>
          </Col>
          <Col md={4} className='rollItems'>
            <img src={truck} alt="truck" className="img-fluid pb-3" />
            <p className="rollP">
              Get a branded tricycle, IOT scale and all other neccessary tools
              to work with
            </p>
          </Col>
          <Col md={4} className='rollItems'>
            <img src={settings} alt="settings" className="img-fluid pb-3" />
            <p className="rollP">
              Get train on how wastexpert platform works and how to calculate
              your earning
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RollWithUs;
