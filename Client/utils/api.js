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