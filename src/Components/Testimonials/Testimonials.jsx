import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.scss";
import testimonyguy1 from "../../Assets/Testimony1guy.svg";
import testimonyguy2 from "../../Assets/Testimony2guy.svg";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <h2 className="testText">Testimonial</h2>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-comtent-center align-items-center">
            <div className="testimony1">
              <b>Kolade babalola ( Uber Driver) </b>
              <p>
                “tincidunt urna non, lobortis tincidunt. Faucibus felis nulla
                faucibus tellus nunc. Platea risus nibh feugiat dui phasellus
                phasellus viverra ac leo. Pellentesque venenatis, ut risus at.
                dolor sit amet, consectetur adipiscing elit. Vitae, faucibus
                tellus nunc. Platea risus nibh feugiat dui phasellus”{" "}
              </p>
            </div>
            <img src={testimonyguy1} alt="testimonyguy1"className="img-fluid d-none"  />
          </Col>
          <Col md={12} className="d-flex justify-comtent-center align-items-center">
            <img src={testimonyguy2} alt="testimonyguy2" />
            <div className="testimony1">
              <b>Kunle Johnson( restaurant Owner) </b>
              <p>
                “Wastexpert is a life saver for me. It has taken the hassle and
                burdens of trashing my waste off my shoulders. and the most
                exciting thing about wastexpert trashing my waste is that they
                are doing it while am getting paid”{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
