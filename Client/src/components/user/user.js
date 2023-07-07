import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const User = () => {
  // Sample data for saved pets and donation information
  const savedPets = [
    { id: 1, name: 'Buddy', species: 'Dog' },
    { id: 2, name: 'Whiskers', species: 'Cat' },
    { id: 3, name: 'Nibbles', species: 'Rabbit' },
  ];

  const donationAmount = 500;

  return (
    <Container>
      <h2 className="mt-4">User Page</h2>
      <h3 className="mt-4">Saved Pets</h3>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {savedPets.map((pet) => (
          <Col key={pet.id}>
            <Card>
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>Species: {pet.species}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <h3>Donation Information</h3>
        <p>Total Donation Amount: ${donationAmount}</p>
      </div>
    </Container>
  );
};

export default User;