import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Cards from '../componenets/Cards';

const MyRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No authentication token found!");
          setLoading(false);
          return;
        }

        console.log("Fetching saved recipes with token:", token);

        const response = await axios.get("http://localhost:5000/api/myrecipes", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });

        console.log("Fetched saved recipes:", response.data);
        setSavedRecipes(response.data);
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div className="my-recipes">
      <Container>
        <h2>Your Saved Recipes</h2>
        {loading ? (
          <p>Loading...</p>
        ) : savedRecipes.length > 0 ? (
          <Row className="g-4">
            {savedRecipes.map((recipe, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <Cards
                  title={recipe.title}
                  image={recipe.image}
                  description={recipe.description}
                  buttonText="Saved"
                  difficulty={recipe.difficulty}
                  cookingTime={recipe.cookingTime}
                  rating={recipe.rating}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p>No saved recipes yet.</p>
        )}
      </Container>
    </div>
  );
};

export default MyRecipes;
