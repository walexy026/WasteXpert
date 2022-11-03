import React from 'react'
import './Agent.scss'
import { Col, Container, Row } from "react-bootstrap";
import agent from '../../Assets/agentWithBackground.svg'
import Button from "../../Components/Button/Button";
import RollWithUs from "../../Components/RollWithUs/RollWithUs";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
const Agent = () => {
  return (
    <div>
      <div className='agentt' >
        <Container className="mt-5  w-100" >
        <Row className="Agent">
          <Col md={5}>
            <h1>Love to Chill with the ‘BIG’ boys?</h1>
            <p>
            Then sign up, Get screened to be our Agent. We will provide you with all the neccessary equipment to work with, as well as Customers to transact with. Start earn immediately! 

            </p>
            <Button desc="Become an agent" className='btnAgent' />
          </Col>
          <Col md={7}>
            <img src={agent} alt="collectoWithClasss" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      </div>
      <RollWithUs style={{background: 'white'}}/>
      <div className="horizontalLine"></div>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Agent