import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <>
      <Col className="col-lg-10 col-md-12 mainPage">
        <Row className="row w-100 mx-3">
          <Col className="col-12 d-none d-md-flex" id='mainLinks'>
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-md-3 pt-5 text-center" id="img-container"></Col>
          <Col className="col-md-8 p-5">
            <Row className="row">
              <div className="col-md-10 mb-5" id="trackList"></div>
            </Row>
          </Col>
        </Row>
      </Col>
    
    </>
  )
}
