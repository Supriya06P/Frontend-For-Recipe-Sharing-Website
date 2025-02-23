import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Cards.css'

const Cards = ({ title, image, description, buttonText }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button className="card-button">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
