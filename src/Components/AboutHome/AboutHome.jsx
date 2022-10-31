import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUsVol from "../../Assets/aboutUsImg.png";
import Button from "../Button/Button";
import { BsPlayCircle } from "react-icons/bs";


const AboutHome = () => {
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center abt">
          <Col className="col-md-6 p-5">
            <img src={AboutUsVol} alt="AboutUsVol" className="img-fluid " />
          </Col>
          <Col className="col-md-6">
            <div className="aboutText mt-5 mb-3">
              <h2 style={{color: '#028C32'}}> About us </h2>
              <p style={{color:'rgba(0, 0, 0, 0.5)', textAlign:'justify'}}>
                tincidunt urna non, lobortis tincidunt. Faucibus felis nulla
                faucibus tellus nunc. Platea risus nibh feugiat dui phasellus
                phasellus viverra ac leo. Pellentesque venenatis, ut risus at.
                dolor sit amet, consectetur adipiscing elit. Vitae, non,
                lobortis tincidunt. Faucibus felis nulla faucibus tellus nunc.
                Platea risus nibh feugiat dui phasellus phasellus viverra ac
                leo. Pellentesque venenatis, ut risus at. dolor sit amet,
                consectetur adipiscing elit.
              </p>

              <Button desc="Read More"  style={{
                    backgroundColor: " #028C32",
                    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.23)",
                    borderRadius: "6px",
                    color: "#ffffff",
                    border: "none",
                    height: "2.5rem",
                    padding: "3px 20px",
                    marginRight:'1rem'
            
                  }} icon={
                  <BsPlayCircle size="1.6rem" style={{ paddingRight: "5px" }} 
                 
                  />
                } />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutHome;
