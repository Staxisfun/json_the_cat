const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv;
let newArgs = args.slice(2);


let breedName = newArgs[0];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});