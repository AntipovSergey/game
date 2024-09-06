import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <NavLink to={`/quiz/${category.id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={category.img} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
        </Card.Body>
      </Card>
    </NavLink>
  );
}