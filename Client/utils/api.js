//route to see ALL animals
export const getPets = ()=> {
    client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
      })
    .catch(function (error) {
        // Handle the error
        console.log(error)
    });
}

//TODO: replace 'Dog' with ${userInput} exported from react component???
export const searchType = ()=> {
  client.animalData.type('Dog')
  .then(resp => {
    console.log(response.data)
    })
    .catch(function (error) {
      // Handle the error
      console.log(error)
  });
}

//TODO: replace 'dog' with userInput
export const searchBreed = ()=>{
  client.animalData.breeds('dog')
  .then(resp => {
    // Do something with resp.data.breeds
  })
  .catch(function (error) {
    // Handle the error
    console.log(error)
});
}

//TODO: we will need a prompt to select user's preferred location
const searchOrgs = ()=> {
  client.organization.search({location: "Minneapolis, MN"})
  .then(resp => {
    // Do something with resp.data.organizations
  })
  .catch(function (error) {
    // Handle the error
    console.log(error)
});
}
//show clicked organization
//TODO: input clicked organization's code not "MN423"
const searchSingleOrg = ()=> {
  client.organization.show("MN423")
  .then(resp => {
    // Do something with resp.data.organization
  });
}

export const createUser = (userData) => {
    return fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  export const getMe = (token) => {
    return fetch('/myProfile', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

  export const saveDonation = (donationData, token) => {
    return fetch('/myDonations', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(donationData),
    });
  };

  export const savePet = (petData, token) => {
    return fetch('/myPets', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(petData),
    });
  };
  
  // remove saved pet data for a logged in user
  export const deletePet = (petId, token) => {
    return fetch(`/myPets${petId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // make a search to google books api
  // https://www.googleapis.com/books/v1/volumes?q=harry+potter
  export const searchPets = (query) => {
    return fetch(`https://api.petfinder.com/v2/animals`);
  };