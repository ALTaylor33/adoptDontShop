import React, { useEffect, useState } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Adoption = ({ userId }) => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        const data = await response.json();
        setPet(data.animal);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  const handleSavePet = async (petId) => {
    try {
      //not sure if this fetch is correct
      const response = await fetch(`/api/user/pets/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ petId }),
      });

      if (!response.ok) {
        throw new Error('Failed to save/remove pet');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching pet data.</div>;
  }

  return (
    <div>
      <h2 className="text-center">{pet.name}</h2>
      <Carousel>
        {pet.photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={photo.medium} alt={`Photo ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card>
        <Card.Body>
          <Card.Text>
            <strong>Species:</strong> {pet.species}
          </Card.Text>
          <Card.Text>
            <strong>Age:</strong> {pet.age}
          </Card.Text>
          <Card.Text>
            <strong>Breed:</strong> {pet.breeds.primary}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {pet.description}
          </Card.Text>
          <Button variant="link" onClick={handleSavePet}>
            Save
            <FaRegHeart />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Adoption;