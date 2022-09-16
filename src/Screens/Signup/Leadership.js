import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/CEO.jpg";
import systemImg from "../../assets/img/Marketing.jpg";
export default function Leadership() {
 
 
  
  return (
    <section className='contact ' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={4} className='signup'>
            <img src={contactImg} alt='contact Us' /> <br />
            <div className='bio'>
              <p> CEO | Founder | Software engineer</p> <br />
            </div>
            <div className='paragraph'>
              <p>
                I am the Founder of Digital Navigator X, I spent my life
                studying software engineering. I know how marketing websites
                work. algorithmes? I develop them. We know what works and what
                doesn't online. we give you results, not half assed leads, My
                team handles every step of the way through an educated pipeline
                that generates no less than 10 booked appointments a month.{" "}
              </p>
            </div>
          </Col>

          <Col md={8} className=" process">
            <h3>What you can expect from us:</h3>
            <img src={systemImg} alt='contact Us' /> <br />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
