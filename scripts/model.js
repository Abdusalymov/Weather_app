import controller from "./controller";
const axios = require('axios');


VK.init({
    apiId: 6832878
});

const model = {

    getForcast: (location = "Нытва") => {
       return axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=abef6a52fd734768b8b45c46f4c9c46c&lang=ru&units=M&days=3`)
        .then(response => {
            const newForecast = model.addRusWeekDay(response.data);
            return newForecast;
        })
        .catch(error => {
            console.log(error);
        })
    },  

    getCurrentWeather: (location = "Нытва") => {
       return axios
        .get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=abef6a52fd734768b8b45c46f4c9c46c&lang=ru&units=M`)
        .then( response => response.data.data )
        .catch(error => {
            console.log(error);
        })
    },

    getListCitys: (location="Нижн") => {
        VK.Api.call('database.getCities', {
                country_id: 1, 
                v:"5.101", 
                q: location, 
                v:"5.73", 
                pneed_all: 0, 
                count:5, 
                access_token:"bca95bceccbc09146cc39c8c9ef7eefd0f254f1de13a86bfc7c47808c104f519e73e1e8a3c97a4d81ce9b"
            }, 
            function(r) {
                if(r.response) {
                    controller.conveyCitys(r.response.items);
                }
            }
        );
    },

    addRusWeekDay: forecast => {

        const newForecast = [];
        for(let i = 0; i < forecast.data.length; i++){
            newForecast[i] = forecast.data[i];
            newForecast[i].dayWeek = new Date(forecast.data[i].datetime).toLocaleString('ru', {
            weekday: 'long'
            });
            newForecast[i].max_temp = Math.round(forecast.data[i].max_temp);
            newForecast[i].min_temp = Math.round(forecast.data[i].min_temp);
        }
        return newForecast;
    }
};
export default model;