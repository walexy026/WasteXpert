import React from 'react'
import { Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import './Footer.scss'
import WasteXpertLogo from '../../Assets/footerLogo.svg'

const Footer = () => {
  return (
    <div className='footer'>Footer
        <Container>
<Row>
    <Col md={8}>
    <img src={WasteXpertLogo} alt="WasteXpertLogo" />
    <p>Wastexpert</p>
    </Col>
    <Col md={4}>
    Subscribe to our Newsletter
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your email address here"
          aria-label="Enter your email address here"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Sign up</InputGroup.Text>
      </InputGroup>
    </Col>
</Row>
        </Container>
    </div>
  )
}

export default Footer
