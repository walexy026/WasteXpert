import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import "./Homepage.scss";
import { BsPlayCircle } from "react-icons/bs";
import man from "../../Assets/guyman2.png";
import bg from "../../Assets/aboutUsBg.svg";

const Homepage = () => {
  return (
    <div className="heroWrappper">
      <Container className="mt-5  w-100">
        <Row className=" d-flex justify-content-center heroSection">
          <Col className="col-sm-5  HeroText">
            <h1>Waste to Wealth just got better</h1>
            <p>
              The Waste to Wealth Mission brings scientific processing of waste
              to the forefront to build a zero landfill and zero waste nation.
            </p>

            <Stack direction="horizontal" className="mb-3">
              <Button
                desc="Get Started"
                style={{
                  backgroundColor: " #028C32",
                  boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.23)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  border: "none",
                  height: "2.5rem",
                  padding: "3px 20px",
                  marginRight:'1rem'
          
                }}
              />
              <Button
                icon={
                  <BsPlayCircle size="1.6rem" style={{ paddingRight: "5px" }} />
                }
                desc="Press Play"
                style={{
                  background: "#000000",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  color: "#ffffff",
                  height: "2.5rem",
                  padding: "3px 20px",
                  marginLeft:'1rem'
                }}
                className="btnn"
              />
            </Stack>
          </Col>

          <Col className="col-sm-7 man">
            <div className="bg">
              <img src={bg} alt="" />
            </div>
            <div className="manbg">
              <img src={man} alt="" className="img-fluid "  />
            </div>
      {/* <div className='horizontalLine'></div> */}
      <div className='horizontalLineImg'></div>
          </Col>
        </Row>
      </Container>
      <div className="horizontalLine"></div>
    </div>
  );
};

export default Homepage;
