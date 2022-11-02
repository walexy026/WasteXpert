import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./RollWithUs.scss";
import truck from "../../Assets/truck.svg";
import settings from "../../Assets/settings.svg";
import saveMoney from "../../Assets/save-money.svg";

const RollWithUs = () => {
  return (
    <div className="rollwithus">
      RollWithUs
      <Container>
        <h2 style={{ textAlign: "center", color: "#000000" }}>
          Here is why You should roll with us
        </h2>
        <Row>
          <Col md={4}>
            <img src={saveMoney} alt="saveMoney" className="img-fluid text-align-center"/>
            <p>Get paid on every kilogram of Waste collected</p>
          </Col>
          <Col md={4}>
            <img src={truck} alt="truck" className="img-fluid" />
            <p>
              Get a branded tricycle, IOT scale and all other neccessary tools
              to work with
            </p>
          </Col>
          <Col md={4}>
            <img src={settings} alt="settings" className="img-fluid" />
            <p>
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
