/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=43d9126ddc488212f59ca8d74e08f242';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//generate the weather info when 'generate' btn is clicked
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newWeather = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings')
    getWeather(baseURL, newWeather, apiKey)
        .then(function(data) {
            //Add data to POST request
            postData('/addWeather', { temp: data.main.temp, date: d, feeling: feelings });
        });
};

const getWeather = async(baseURL, zip, apiKey) => {
    const res = await fetch(baseURL + zip + apiKey)

    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};