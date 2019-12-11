/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=43d9126ddc488212f59ca8d74e08f242';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//generate the weather info when 'generate' btn is clicked
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newWeather = document.getElementById('zip').value;
    getWeather(baseURL, newWeather, apiKey)
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