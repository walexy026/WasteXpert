import React from 'react'
import { Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap';
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {AiFillTwitterCircle} from 'react-icons/ai';
import './Footer.scss'
import WasteXpertLogo from '../../Assets/footerLogo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
<Row>
    <Col md={8} >
    <img src={WasteXpertLogo} alt="WasteXpertLogo" />
    <p style={{color:'#ffffff', paddingLeft:'1rem',fontWeight: '700'}}>Wastexpert</p>
    </Col>
    <Col md={4}>
   <p style={{color:'#ffffff'}}> Subscribe to our Newsletter</p>
    <InputGroup className="mb-3">
        <Form.Control
        placeholder="Enter your email address here"
        aria-label="Enter your email address here"
        aria-describedby="basic-addon2"
        />
        <Button style={{backgroundColor:'#000000', color:'#ffffff', outline:'none' }} id="button-addon2">
        Sign up
        </Button>
      </InputGroup>
    
    </Col>
</Row>
<Row>
    <Col md={5}>
    <p className='footerP' style={{color:'#ffffff', textAlign:'justify'}}>Wastexpert is a waste recycling and social benefit venture borne out of sheer passion and vision to transform our environment into a zero landfill  and zero waste nation. We operates an incentive-based scheme which collects recyclable materials from post consumers and in turn rewards them with “Points” which they can accumulate overtime and cash out or use to redeem/shop for household items offered through our Wastexpert store.</p>
    </Col>
    <Col md={3}>
    <ul className='footerLink'>
        <li> <a href=""> About</a></li>
        <li> <a href="">Our Mission</a></li>
        <li> <a href="">Vision</a></li>
        <li> <a href="">Solutions</a></li>
        <li> <a href="">Teams</a></li>
    </ul>
    </Col>
    <Col md={2}>
    <ul className='footerLink'>
        <li> <a href=""> Contact Us</a></li>
        <li> <a href="">Our Mission</a></li>
        <li> <a href="">Vision</a></li>
        <li> <a href="">Solutions</a></li>
        <li> <a href="">Teams</a></li>
    </ul>
    </Col>
    <Col md={2}>
    <ul className='footerLink'>
        <li> <a href=""> Service</a></li>
        <li> <a href="">Waste to wealth pick up</a></li>
        <li> <a href="">Flip-it</a></li>
        <li> <a href="">Waste drop off point</a></li>
        <li> <a href="">Corporate Recycling</a></li>
    </ul>
    </Col>
</Row>
<hr style={{color:'#ffffff'}}/>
<Row>
    <Col md={10}>
        <b style={{color:'#ffffff'}}>Copyright © 2020, Created by Wastexpert Team</b>
    </Col>
    <Col md={2} className='icons'>
        <BsFacebook style={{color:'#ffffff'}}/>
        <AiFillTwitterCircle style={{color:'#ffffff'}}/>
        <BsInstagram style={{color:'#ffffff'}}/>
        <BsLinkedin style={{color:'#ffffff'}}/>
        <SiGmail style={{color:'#ffffff'}}/>
    </Col>
</Row>
        </Container>
    </div>
  )
}

export default Footer
