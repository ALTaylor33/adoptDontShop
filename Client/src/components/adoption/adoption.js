import React, { useEffect, useState } from 'react';
import { Card, Carousel, Button } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const testPet = {
  "id": 65387115,
  "organization_id": "CA3028",
  "url": "https://www.petfinder.com/cat/private-65387115/ca/el-segundo/baby-kitten-rescue-ca3028/?referrer_id=fe3fd184-b4c4-419a-812d-aaae94b97abb",
  "type": "Cat",
  "species": "Cat",
  "breeds": {
      "primary": "Domestic Short Hair",
      "secondary": null,
      "mixed": true,
      "unknown": false
  },
  "colors": {
      "primary": "Black",
      "secondary": "Black & White / Tuxedo",
      "tertiary": "White"
  },
  "age": "Baby",
  "gender": "Male",
  "size": "Small",
  "coat": "Short",
  "attributes": {
      "spayed_neutered": true,
      "house_trained": true,
      "declawed": false,
      "special_needs": false,
      "shots_current": true
  },
  "environment": {
      "children": null,
      "dogs": null,
      "cats": true
  },
  "tags": [
      "Friendly",
      "Affectionate",
      "Curious",
      "Independent",
      "Playful",
      "Funny",
      "Athletic"
  ],
  "name": "Private",
  "description": "Private is a funny and sweet little guy who loves affection. Private loves to chase his tail and play with...",
  "organization_animal_id": null,
  "photos": [
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/2/?bust=1689125523&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/2/?bust=1689125523&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/2/?bust=1689125523&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/2/?bust=1689125523"
      },
      {
          "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/3/?bust=1689125524&width=100",
          "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/3/?bust=1689125524&width=300",
          "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/3/?bust=1689125524&width=600",
          "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/3/?bust=1689125524"
      }
  ],
  "primary_photo_cropped": {
      "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=300",
      "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=450",
      "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523&width=600",
      "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/65387115/1/?bust=1689125523"
  },
  "videos": [],
  "status": "adoptable",
  "status_changed_at": "2023-07-12T01:32:06+0000",
  "published_at": "2023-07-12T01:32:05+0000",
  "distance": null,
  "contact": {
      "email": "director@babykittenrescue.com",
      "phone": null,
      "address": {
          "address1": null,
          "address2": null,
          "city": "El Segundo",
          "state": "CA",
          "postcode": "90245",
          "country": "US"
      }
  },
  "_links": {
      "self": {
          "href": "/v2/animals/65387115"
      },
      "type": {
          "href": "/v2/types/cat"
      },
      "organization": {
          "href": "/v2/organizations/ca3028"
      }
  }
}

const Adoption = ({ userId }) => {
  const { id } = useParams();
  const [pet, setPet] = useState(testPet);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  // useEffect(() => {
  //   const fetchPet = async () => {
  //     try {
  //       const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
  //         headers: {
  //           'Authorization': 'Bearer YOUR_API_KEY'
  //         }
  //       });
  //       const data = await response.json();
  //       setPet(data.animal);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchPet();
  // }, [id]);

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
    <div className="w-25 mx-auto">
      <h2 className="text-center">{pet.name}</h2>
      <Carousel className='w-100'>
        {pet.photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={photo.medium} alt={`Photo ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card className='w-100'>
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