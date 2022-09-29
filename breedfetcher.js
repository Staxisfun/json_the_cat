const args = process.argv;
let newArgs = args.slice(2);

let requestedBreed = newArgs[0];

const request = require('request');



request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, function(error, response, body) {

  const data = JSON.parse(body);

  if (error) {
    console.log('error:', error);
    // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  } else if (data.length === 0) {

    console.log("Breed not found");

  }

  for (let element of data) {
    console.log(element.description);
  }


});