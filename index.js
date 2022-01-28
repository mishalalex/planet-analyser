const {parse} = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// conditions for a planet to be considered as a habitable planet
function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

// read the csv file as a stream as we need to process the data line by line rather than processing the whole data together
fs.createReadStream('kepler_data.csv')
  .pipe(parse({
      comment: '#',
      columns: true, // returns each row as an object
  }))
  .on('data', (data) => {
      if(isHabitablePlanet(data)) {
        habitablePlanets.push(data);
      }
  })
  .on('error', (err) => {
      console.log(err);
  })
  .on('end', () => {
    console.log(`Analysis completed. ${habitablePlanets.length} habitable planets were found.`);
    console.log(habitablePlanets.map((planet) => {
          return planet['kepler_name'];
      }));
      console.log('Cross check and verify this result here: https://phl.upr.edu/projects/habitable-exoplanets-catalog')
  });
