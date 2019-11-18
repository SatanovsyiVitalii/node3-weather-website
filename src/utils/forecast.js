const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/6de4abfbde48f8bdee53ebf40e77f5e7/' + latitude + ',' + longitude + '?units=si';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const temperature = body.currently.temperature;
      const precipProbability = body.currently.precipProbability;
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + ' chance of rain.');
    }
  });
}
module.exports = forecast;