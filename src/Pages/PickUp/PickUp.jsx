import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { BsPlayCircle } from "react-icons/bs";
import Button from '../../Components/Button/Button'
import './PickUp.scss'
import dropOff from '../../Assets/dropOff.svg'
import pickUp from '../../Assets/pickUp.svg'
import baskettrash from '../../Assets/waste.svg'
import fliptruck from '../../Assets/busWithShadow.svg'

const PickUp = () => {
  return (
    <div>PickUp
<Container  className="mt-5  w-100" >
    <Row className="mt-5">
        <Col className='p-2'>
        {/* <h2>Pick up </h2> */}
        <img src={pickUp} alt="pickUp"/>

        <p className='pickupP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. </p>
        <Stack direction="horizontal" className="mb-3">
        <Button desc='Pick up Request' className='btnPickUp1'/>
        <Button desc='Pick up Request' className='btnPickUp2'  icon={
                  <BsPlayCircle size="1.6rem" style={{ paddingRight: "5px" }} />
                }/>
            </Stack>

        </Col>
        <Col>

        <img src={fliptruck} alt="fliptruck" className='img-fluid' />
        </Col>
    </Row>
    <Row className='mt-5'>
        <Col>
        <img src={baskettrash} alt="baskettrash" className='img-fluid' />
        </Col>
        <Col className='p-3'>
        {/* <h2>Drop Off </h2> */}
        <img src={dropOff} alt="dropOff" />

        <p className='pickupP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.  </p>


        <Stack direction="horizontal" className="mb-1">

        <Button desc='View locations' className='btnPickUp1'/>
        <Button desc='Watch Video' className='btnPickUp2' icon={
                  <BsPlayCircle size="1.6rem" style={{ paddingRight: "5px" }} />
                }/>
            </Stack>

        </Col>
    </Row>
</Container>

    </div>
  )
}

export default PickUp