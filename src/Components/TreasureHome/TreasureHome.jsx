import React from "react";
import { Container, Row,Col, Card } from "react-bootstrap";
import "./TreasureHome.scss";
import Treasurecan from '../../Assets/treasureCan.svg'
import TreasurePaper from '../../Assets/treasurePaper.svg'
import TreasurePlastic from '../../Assets/treasureplastic.svg'
import Treasurebottle from '../../Assets/trasurebottle.svg'
import Button from "../Button/Button";

const TreasureHome = () => {
  return (
    <div className="treasureHome">
<h2 className="treasureText">Treasures</h2>
    
      <Container>
        <Row >
            <Col className=" treasureCol">
          <Card className="treasurecard" style={{ width: "15rem" }}>
            <Card.Img  src={Treasurecan} />
            <Card.Body>
              <Card.Text>Aluminium Can Containers</Card.Text>
             
            </Card.Body>
          </Card>
          <Card className="treasurecard" style={{ width: "15rem" }}>
            <Card.Img  src={TreasurePaper}  />
            <Card.Body>
              <Card.Text>Discarded/ New Cartons</Card.Text>
            </Card.Body>
          </Card>
          <Card className="treasurecard" style={{ width: "15rem" }}>
            <Card.Img  src={Treasurebottle} />
            <Card.Body>
              <Card.Text>Glass Containers </Card.Text>
            </Card.Body>
          </Card>
          <Card className="treasurecard" style={{ width: "15rem" }}>
            <Card.Img  src={TreasurePlastic} />
            <Card.Body>
              <Card.Text >Pet botles</Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      <Button desc='See More' className='tresureBtn'/>
    </div>
  );
};

export default TreasureHome;
