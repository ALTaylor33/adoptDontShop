const express = require('express');
const axios = require('axios')
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const apiRoutes = require('./routes')
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
app.use('/api', apiRoutes)

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

async function getBearerToken() {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.petfinder.com/v2/oauth2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'client_id=uxdduxVC98EIUmwwVxuRovwcKprDjYkejYtW50NrWlNWP2Nd4Z&client_secret=Vw6ywefK6i6y9VNBcrThA4fxW27D6N5YmoSDmDEe&grant_type=client_credentials'
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error retrieving Petfinder API token:', error);
    return null;
  }
}

app.get('/petfinder', async (req, res) => {
  try {
    const params = {
      //animal: req.query.animal,
      //location: req.query.location,
      type: req.query.species,
      limit: req.query.limit,
      page: req.query.page,
      //breed: req.query.breed,
     // size: req.query.size,
     // gender: req.query.gender,
     // age: req.query.age,
    };

    const token = await getBearerToken();

    if (token) {
      const response = await axios.get('https://api.petfinder.com/v2/animals', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: params,
      });
  
      res.send(response.data);
    } else {
      res.status(500).send({ error: 'Unable to authenticate with Pet Finder API.' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error calling Pet Finder API' });
  }
});
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);