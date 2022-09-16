import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Client1 from "../assets/img/Client1.jpg";
import Client3 from "../assets/img/Client3.jpg";
import Client4 from "../assets/img/Client4.jpg";
import Client2 from "../assets/img/Client2.png";
import { PopupModal } from "react-calendly";


export default function BookACall() {
  const [isOpen, setIsOpen] = useState(false);


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};




  return (
    <section className='contact' id='connect'>
      <div className='testi'>
        <h1 className='ml-8 mb-6'>Are you still not sure?</h1>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='contact Us' />
          </Col>

          <Col md={6}>
            <div className='skill-bx1'>
              <Carousel responsive={responsive} autoPlay infinite>
                <div className='item'>
                  <img
                    src={Client1}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Daniel Lopez| KW Realtor</h5>
                  <p>
                    I was skepticle at first But Chahine reassured me. He was
                    very professional, so organized and kept me updated every
                    part of the way. the results were incredible, but you have
                    to be patient at first. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client3}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Jason Kauffman| Luxury Homes</h5>
                  <p>
                    I was only relying on referrals for my client acquisition at
                    first and everything was okey, but when I decided to move
                    forward with Digital Navigator X my mind was blown with how
                    much leads we could get a month. Chahine really shifted my
                    vision I highly recommend. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client2}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Brandon mendes| expRealty</h5>
                  <p>
                    I Am very satisfied with their work, I highly recommend
                    working with them. you will appreciate how professional they
                    are and how effective their strategies are. <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
                <div className='item'>
                  <img
                    src={Client4}
                    style={{
                      height: "100px",
                      width: "90px",
                      borderRadius: "34px",
                      marginBottom: "10px",
                    }}
                    alt='Client photo'
                  />
                  <h5>Lauren Peterson| KW england</h5>
                  <p>
                    I recommend working with them so much, I stopped wasting my
                    money and time on bad leads that barely got me any listings.{" "}
                    <br />
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gold'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                      </svg>
                    </div>
                  </p>
                </div>
              </Carousel>
              <br />
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
        </Row>
      </Container>
    </section>
  );
}
