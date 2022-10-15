import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/CEO.jpg";
import { PopupModal } from "react-calendly";
import MY_VIDEO from "../../assets/img/Who Are we_ .mp4";
import meter1 from "../../assets/img/thumbnail1.png";
import marketing from "../../assets/img/Marketing.jpg"
export default function Leadership() {
 
    const [isOpen, setIsOpen] = useState(false);
 
  
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
                I am the Founder of Digital Surges, I spent 5 years studying
                software engineering. I know how marketing works. algorithms? I
                develop them. We know what goes viral and what doesn't. we give
                you results, not half assed ads, My team handles every step of
                the way through an educated pipeline that is designed
                specifically for your own personal business. The point you reach
                in 3 months is nothing like the point you're in right now. If
                this sounds like something you're interested in, book a call now
                and we'll share with you some Ideas and strategies you can start
                implementing right away.{" "}
              </p>

              <Button className='vvd' onClick={() => setIsOpen(true)}>
                <span>Book a call</span>
              </Button>
              <PopupModal
                url='https://calendly.com/astral-media21/book-a-15-minute-meeting'
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")}
              />
            </div>
          </Col>

          <Col md={8} className=' process'>
            <div>
              <img  src={marketing} className="vidlead" width='800' height='460' />
                
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
