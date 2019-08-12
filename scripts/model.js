import controller from "./controller";
const axios = require('axios');

let model = {

    forecast:{},

    current: {},

    getForcast: function(location = "Нытва"){
        axios
        .get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=abef6a52fd734768b8b45c46f4c9c46c&lang=ru&units=M&days=3`)
        .then(function (response) {
            let newForecast = model.addRusWeekDay(response.data);
            model.forecast = newForecast;
            console.log(newForecast);
            controller.conveyForecat(newForecast, response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },  

    getCurrentWeather: function(location = "Нытва"){
        axios
        .get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=abef6a52fd734768b8b45c46f4c9c46c&lang=ru&units=M`)
        .then(function (response) {
            console.log(response);
            model.current = response.data.data;
            controller.conveyCurrent(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    giveForecast: function(){
        return this.forecast;
    },

    giveCurrentWeather: function(){
        return this.current;
    },

    addRusWeekDay: function(forecast){

        let newForecast = [];
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