import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import Next from '../logo/Next.png'
import Play from '../logo/Play.png'
import Previous from '../logo/Previous.png'
import Repeat from '../logo/Repeat.png'
import Shuffle from '../logo/Shuffle.png'

export default function PlayBarComponent() {
  return (
    <>
        <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className=''>
            <Col lg={10} className="offset-lg-2">
                <Row className=''>
                    <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1" id='playerControls'>
                        <Row>
                            <Col>
                                <button type='button'>
                                    <img src={Shuffle} alt="shuffle" />
                                </button>
                                <button type='button'>
                                    <img src={Previous} alt="previous" />
                                </button>
                                <button type='button'>
                                    <img src={Play} alt="play" />
                                </button>
                                <button type='button'>
                                    <img src={Next} alt="next" />
                                </button>
                                <button type='button'>
                                    <img src={Repeat} alt="repeat" />
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center playBar py-3">
                    <Col xs={8} md={6}>
                        <div id="progress">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            ></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container> 
    </>
  )
}
