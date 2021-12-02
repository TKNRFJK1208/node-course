const request = require('request')
const geocode = require('./utils/geocode')

// Weather
// const url = 'http://api.weatherstack.com/current?access_key=7ddca1a6896545094f003f095fcfc578&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if(error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//   }
// })

// Geocoding
// Address -> Lat>Long -> Weather
// Access Token : pk.eyJ1IjoidGFrYW5vcmlmdWppa2kiLCJhIjoiY2t3b2ZlMzY4MDBjMjJwcDQxaHEyNHdrbCJ9.WvAl7WgK-sL0Y2oP_17GLA

// const geocodeURL= 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoidGFrYW5vcmlmdWppa2kiLCJhIjoiY2t3b2ZlMzY4MDBjMjJwcDQxaHEyNHdrbCJ9.WvAl7WgK-sL0Y2oP_17GLA'

// request({ url: geocodeURL, json:true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.')
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//   }
// })

geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})