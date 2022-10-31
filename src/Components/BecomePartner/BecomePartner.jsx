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
            <div className="beText col-md-6">
              <p className="BpP1">Becoming our agent with just a few simple steps </p>
            
              <p className="Greendot">  Sign up, Get screened, Provide the Needed Space </p> 

              <p className="Greendot"> All neccessary set up kit provided </p> 
                
              <p className="Greendot"> And start earning from every kilograms you provided space for </p>
            
            
              <Button desc='Become an Agent' style={{
                    backgroundColor: " #028C32",
                    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.23)",
                    borderRadius: "6px",
                    color: "#ffffff",
                    border: "none",
                    height: "2.5rem",
                    padding: "3px 20px",
                    marginRight:'1rem'
            
                  }}/>
            </div>
          </Col>
          <Col>
          <div className="beText2 col-md-6">
              <p className="BpP1">Becoming our agent with just a few simple steps </p>
            
              <p className="Greendot">  Signup, Get Screened and approved </p> 

              <p className="Greendot"> Set up your tools  </p> 
                
              <p className="Greendot">Accept pickup request and Collect recyclables and make money from every kilograms</p>
                    
              <Button desc='Become a collector' style={{
                    backgroundColor: " #028C32",
                    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.23)",
                    borderRadius: "6px",
                    color: "#ffffff",
                    border: "none",
                    height: "2.5rem",
                    padding: "3px 20px",
                    marginRight:'1rem'
            
                  }}/>
              </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BecomePartner;
