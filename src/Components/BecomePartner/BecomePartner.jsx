import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "../Button/Button";
import "./BecomePartner.scss";

const BecomePartner = () => {
  return (
    <div className="BecomePartner">
      <Container className="BecomePartner">
        <h2 className="bPH2 text-center">Become Our partner</h2>
        <Row>
          <Col>
            <div className="beText">
              <p>Becoming our agent with just a few simple steps </p>
            
              <p className="Greendot">  Sign up, Get screened, Provide the Needed Space </p> 

              <p> All neccessary set up kit provided </p> 
                
              <p> And start earning from every kilograms you provided space for </p>
            
            
              <Button desc='Become an Agent'/>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
