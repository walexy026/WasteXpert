import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Button from "../Button/Button";

import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq">
      <h2 className="faqText">Frequently asked questions</h2>
      <Container>
        <Accordion defaultActiveKey="0" className="accHeader">
          <Accordion.Item eventKey="0" className="accHeader">
            <Accordion.Header className="accHeader" style={{color:'#028c32'}}>
              How much does it cost to be a wastexert agent?
            </Accordion.Header>
            <Accordion.Body className="accBody">
              It is initially totally free as we provide you with everything you
              need to get set up. After the first month when you must have
              started making money with us, a monthly charge of 5000 is charged
              for the first year after which it becomes 2000 monthly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is the payment plan of wastexpert like?
            </Accordion.Header>
            <Accordion.Body className="accBody">
              It is initially totally free as we provide you with everything you
              need to get set up. After the first month when you must have
              started making money with us, a monthly charge of 5000 is charged
              for the first year after which it becomes 2000 monthly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              As a new wastexpert Agent/ collector, will i be trained on how to
              transacts on wastexpert?
            </Accordion.Header>
            <Accordion.Body className="accBody">
              It is initially totally free as we provide you with everything you
              need to get set up. After the first month when you must have
              started making money with us, a monthly charge of 5000 is charged
              for the first year after which it becomes 2000 monthly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is the size of space i need?
            </Accordion.Header>
            <Accordion.Body className="accBody">
              It is initially totally free as we provide you with everything you
              need to get set up. After the first month when you must have
              started making money with us, a monthly charge of 5000 is charged
              for the first year after which it becomes 2000 monthly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can anyone work as agent or collector, Also, can i operate from
              anywhere in Nigeria?
            </Accordion.Header>
            <Accordion.Body className="accBody">
              It is initially totally free as we provide you with everything you
              need to get set up. After the first month when you must have
              started making money with us, a monthly charge of 5000 is charged
              for the first year after which it becomes 2000 monthly.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="furtherQuestion">
          <h3>Still have a questions?</h3>
          <p>
            If you cannot find answer to your question in our FAQ, you can
            always Contact us. we will get back to you shortly!
          </p>
          <Button desc="Contact us" className='faqbtn'/>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
