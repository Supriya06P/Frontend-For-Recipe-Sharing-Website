import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import slide1 from '../assets/image1.jpg';
import slide2 from '../assets/image2.jpg';
import slide3 from '../assets/image3.jpg';
import slide4 from '../assets/Recipe.jpg';
import './Home.css';
import Cards from '../componenets/Cards';
import Footer from '../componenets/Footer';

const Home = ({ theme }) => {
  const handleSaveRecipe = async (recipe) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No authentication token found!");
        alert("You must be logged in to save recipes!");
        return;
      }

      console.log("Saving recipe:", recipe);

      const response = await axios.post(
        "http://localhost:5000/api/myrecipes/save",
        recipe,
        {
          headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        }
      );

      console.log("Recipe saved:", response.data);
      alert("Recipe saved successfully!"); 
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Failed to save recipe!");
    }
  };

  return (
    <div className={`home ${theme}`}>
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
              title="Spaghetti Carbonara"
              image={slide4}
              description="A classic Italian pasta dish with creamy sauce and crispy pancetta."
              buttonText="Save Recipe"
              difficulty="Easy"
              cookingTime="30 minutes"
              rating="4.5"
              onSave={() =>
                handleSaveRecipe({
                  title: 'Spaghetti Carbonara',
                  image: slide4,
                  description: 'A classic Italian pasta dish with creamy sauce and crispy pancetta.',
                  difficulty: 'Easy',
                  cookingTime: '30 minutes',
                  rating: '4.5',
                })
              }
            />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Cards
              title="Chocolate Chip Cookies"
              image={slide4}
              description="Delicious homemade cookies with chunks of chocolate."
              buttonText="Save Recipe"
              difficulty="Medium"
              cookingTime="45 minutes"
              rating="4.8"
              onSave={() =>
                handleSaveRecipe({
                  title: 'Chocolate Chip Cookies',
                  image: slide4,
                  description: 'Delicious homemade cookies with chunks of chocolate.',
                  difficulty: 'Medium',
                  cookingTime: '45 minutes',
                  rating: '4.8',
                })
              }
            />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Cards
              title="Mushroom Risotto"
              image={slide4}
              description="A creamy, flavorful rice dish with mushrooms and Parmesan."
              buttonText="Save Recipe"
              difficulty="Intermediate"
              cookingTime="1 hour"
              rating="4.7"
              onSave={() =>
                handleSaveRecipe({
                  title: 'Mushroom Risotto',
                  image: slide4,
                  description: 'A creamy, flavorful rice dish with mushrooms and Parmesan.',
                  difficulty: 'Intermediate',
                  cookingTime: '1 hour',
                  rating: '4.7',
                })
              }
            />
          </Col>
        </Row>
      </Container>
      <Footer theme={theme} />
    </div>
  );
};

export default Home;
