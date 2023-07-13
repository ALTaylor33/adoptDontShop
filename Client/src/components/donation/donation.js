import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaPaw } from 'react-icons/fa';
// import aspca from 'Client\src\imgs\aspca.png';
// import alleycat from 'Client/src/imgs/alleycat.jpg'
const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = async (event) => {
    event.preventDefault();
    // Handle donation submission and server-side integration with Stripe
    // Make a POST request to your server endpoint with the donation details
  };

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>Reccommended Donation Organizations</Card.Title>
          <a href='https://secure.aspca.org/donate/donate?ms=wb_foo_donatebar-puppies-cruelty-20160616&initialms=wb_foo_donatebar-puppies-cruelty-20160616&pcode=WEBMEMBER&lpcode=WEBGUARD&ms=wb_foo_donatebar-puppies-cruelty-20160616&initialms=wb_foo_donatebar-puppies-cruelty-20160616&pcode=WEBMEMBER&lpcode=WEBGUARD' target="_blank" rel="noreferrer">ASPCA</a><br></br>
          <a href='https://secured.humanesociety.org/page/81880/donate/1?ea.tracking.id=ad_gg_branded&en_txn10=ad_gg_cpc_120727562_7704793562_495382227104_humane%20society%20of%20the%20united%20states&en_og_source=ad_gg_fndr_81880_hsus&utm_source=google&utm_medium=cpc&utm_term=humane%20society%20of%20the%20united%20states&gad=1&gclid=CjwKCAjwwb6lBhBJEiwAbuVUShFN4YBxChsnhEcq0rF76nb_6gVPf5k1aIgDDVOhNUq3rqQxy3hltxoCzF0QAvD_BwE' target="_blank" rel="noreferrer">The Humane Society</a><br></br>
          <a href='https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E344259&id=3' target="_blank" rel="noreferrer">Friends of Animals</a><br></br>
          <a href='https://getinvolved.alleycat.org/site/Donation2?df_id=9083&9083.donation=form1&mfc_pref=T&s_src=a1oxxxwdbcn&autologin=true&gad=1&gclid=CjwKCAjwwb6lBhBJEiwAbuVUSo6gUTzAnlOQxFSxuPYNRFb1IH-e1pUfUeTA1ICIWTUFc2e10dRhBBoCPlAQAvD_BwE' target="_blank" rel="noreferrer">Alley Cat Allies</a>
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
              <Form.Label>This feature coming soon</Form.Label>
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