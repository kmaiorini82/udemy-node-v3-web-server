const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia21haW9yaW5pIiwiYSI6ImNqc3RjY3k0cDB1bjY0NHA2ajIxZHE4ZWIifQ.gCtO1UIsjzEVAJjoprkzpw&limit=1'

    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback(error, undefined)
        } else if (response.statusCode < 200 || response.statusCode > 299) {
            callback('Error from mapbox api', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find that location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

// By not exportin as an objec, {}, can call function directly without
// referencing object
module.exports = geocode