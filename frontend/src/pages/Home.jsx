import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import slide1 from '../assets/image1.jpg';
import slide2 from '../assets/image2.jpg';
import slide3 from '../assets/image3.jpg';
import slide4 from '../assets/Recipe.jpg';
import './Home.css';
import Cards from '../componenets/Cards';
import Footer from '../componenets/Footer';

const Home = ({ theme }) => {
  return (
    <div className="home">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>Some description about the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>Some description about the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>Some description about the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="cards-container">
        <Row className="g-4">
          <Col md={4} sm={6} xs={12}>
            <Cards
              title="Product 1"
              image={slide4}
              description="This is a short description of the product."
              buttonText="Buy Now"
            />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Cards
              title="Product 2"
              image={slide4}
              description="This is a short description of the product."
              buttonText="Buy Now"
            />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Cards
              title="Product 3"
              image={slide4}
              description="This is a short description of the product."
              buttonText="Buy Now"
            />
          </Col>
        </Row>
      </Container>
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
