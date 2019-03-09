const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c96ef0a75c876d936bc9b62c5cfb7918/'+ latitude + ',' + longitude

    request({
        url,
        json: true
    }, (error, {body, statusCode}) => {
        if (error) {
            callback(error, undefined)
        } else if (statusCode < 200 || statusCode > 299) {
            callback('Unable to find forecast for that location', undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast