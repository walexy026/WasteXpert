import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import "./Collectors.scss";
import collectorWithClasss from "../../Assets/CollectorWclass.png";
import RollWithUs from "../../Components/RollWithUs/RollWithUs";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";

const Collectors = () => {
  return (
    <div>
      Collectors
      <Container className="mt-3  w-100">
        <Row className="collectors">
          <Col md={5}>
            <h1>A Collector With Class</h1>
            <p>
              Simply sign up, Get screened to be a Collector and Start earning
              cool cash immediately! Easy peasy
            </p>
            <Button desc="Become a Collector" className='btnCollector' />
          </Col>
          <Col md={7}>
            <img src={collectorWithClasss} alt="collectoWithClasss" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <div className="horizontalLine"></div>
      <RollWithUs/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Collectors;
