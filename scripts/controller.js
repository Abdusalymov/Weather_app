import model from "./model";
import view from "./view";

let controller = {
    init: function(location){
        model.getForcast(location);
        model.getCurrentWeather(location);
    },

    conveyForecat: function(forecast, data){
        console.log(forecast);
        view.showForecast(forecast, data);
    },

    conveyCurrent: function(data){
        console.log(data);
        view.showCurrentWeather(data);
    }
};

export default controller;