

const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (error) {

      return callback(error, null);
      // Print the response status code if a response was received
    }

    const data = JSON.parse(body);

    const breed = data[0];

    if (breed) {
      return callback(null, breed.description);
  
    } else {

      return callback("breed not found");

    }


  });

};


module.exports = { fetchBreedDescription };

// Code before callback function refactor

// request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, function (error, response, body) {

//   const data = JSON.parse(body);

//   if (error) {
//     console.log('error:', error);
//     // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

//   } else if (data.length === 0) {

//     console.log("Breed not found");

//   }

//   for (let element of data) {
//     console.log(element.description);
//   }


// });

// Code after callback function refactor