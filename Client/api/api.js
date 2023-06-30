export const GET_BREED = ()=> {
    console.log("BREED")
    axios.get(url){}
}

export const GET_PETS = ()=> {
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