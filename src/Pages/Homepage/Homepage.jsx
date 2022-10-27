import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import "./Homepage.scss";
import { BsPlayCircle } from "react-icons/bs";
import man from '../../Assets/guyManWX.svg'



const Homepage = () => {
  return (
    <div>
      <Container className=" md">
        <Row>
          <Col sm={4}>
            <div className="heroSection">
              <h1>Waste to Wealth just got better</h1>
              <p>
                The Waste to Wealth Mission brings scientific processing of
                waste to the forefront to build a zero landfill and zero waste
                nation.
              </p>
              
              <Stack direction="horizontal" gap={5}>
              
              <Button 
                desc="Get Started"
                style={{
                    backgroundColor: " #028C32",
                    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.23)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  border: "none",
                  height: "2.5rem",
                  padding:'3px 15px'
                  
                }}
               
              />
              <Button
              
              icon={<BsPlayCircle size="1.6rem" style={{paddingRight:"5px"}} />}
                desc="Press Play"
                style={{
                    background: "#000000",
                    border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  height: "2.5rem",

                }}
                className='btnn'
                />
                </Stack>
            </div>
          </Col>
          <Col sm={4} className="man">cjdjhd
          <img src={man} alt=""  />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
