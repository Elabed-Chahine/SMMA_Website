import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/thumbnail.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/InstagramM.png";
import colorSharp from "../assets/img/color-sharp.png";
import MY_VIDEO from "../assets/img/Case_study.mp4"
import ReactPlayer from "react-player";
export const CaseStudy = () => {


  
  return (
    <section className='skill' id='study'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h1>Case study</h1>
              <p>
                This small tweak in our system dramatically improved the results
                we get our clients with a minimum of 700% a month. <br />
              </p>

              <div>
                <video width='750' height='440' controls poster={meter1}>
                  <source src={MY_VIDEO} type='video/mp4' />
                 
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className='background-image-left' alt='' />
    </section>
  );
};
