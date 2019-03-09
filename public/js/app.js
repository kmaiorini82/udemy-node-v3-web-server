console.log('Client side javascript loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.innerHTML = '<strong>Loading...</strong>'
    
    const location = search.value

    const url = '/weather?address=' + location

    console.log('URL: ', url)

    fetch(url).then((response) => {
        response.json().then(({error, address = '', location = '', forecastData = {}} = {}) => {
            search.value = ''
            messageOne.innerHTML = ''
            messageTwo.innerHTML = ''
            if(error) {
                console.log('Error: ', error)
                messageOne.innerHTML = error;
            } else {
                search.value = ""
                messageTwo.innerHTML = `<strong>Data entered:</strong> ${address}` +
                                        `<br><strong>Location Found:</strong> ${location}` +
                                        `<br><strong>Temperature:</strong> ${forecastData.temperature}` +
                                        `<br><strong>Precipitation Probability:</strong> ${forecastData.precipProbability}%`
            }
        })
    }).catch((error) => {
        console.log('Error: ', error)
        messageOne.innerHTML = data.error;
    })
})





