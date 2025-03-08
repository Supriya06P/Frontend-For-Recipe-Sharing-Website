import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css';

const Cards = ({ title, image, description, buttonText, difficulty, cookingTime, rating, onSave }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="recipe-info">
          {cookingTime && <p><strong>Cooking Time:</strong> {cookingTime}</p>}
          {difficulty && <p><strong>Difficulty:</strong> {difficulty}</p>}
          {rating && <p><strong>Rating:</strong> {rating} ⭐</p>}
        </div>

        <Button onClick={onSave} className="card-button">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
