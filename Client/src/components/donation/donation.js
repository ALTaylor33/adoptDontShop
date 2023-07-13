import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaPaw } from 'react-icons/fa';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = async (event) => {
    event.preventDefault();
    // Handle donation submission and server-side integration with Stripe
    // Make a POST request to your server endpoint with the donation details
  };
  const donationOrgs = [
    {
      img: "",
      url: ""
    },
    {
      img: "",
      url: ""
    },
    {
      img: "",
      url: ""
    },
    {
      img: "",
      url: ""
    }
  ]
  return (
    <div className="container">
      <h4>Reccommended Donation Organizations</h4>
      {/*donationOrgs.map or for loop*/}
          <Card>
        <Card.Body>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
      {/* {if we had stripe working then we can use the donation card below} */}
      <Card>
        <Card.Body>
          <Card.Title>Make a Donation</Card.Title>
          <Form onSubmit={handleDonation}>
            <Form.Group controlId="donationAmount">
              <Form.Label>Donation Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter donation amount"
                value={donationAmount}
                onChange={(event) => setDonationAmount(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="cardDetails">
              <Form.Label>Card Details</Form.Label>
              {/* Use the <CardElement /> component from `react-stripe-elements` here */}
            </Form.Group>
            <Button variant="primary" type="submit" className="paw-print-button">
              <FaPaw className="paw-icon" /> Donate
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DonationPage;