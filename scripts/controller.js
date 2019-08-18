import model from "./model";
import view from "./view";

let controller = {

    init: function (location) {
        this.conveyForecast(location);
        this.conveyCurrent(location);
    },

    conveyForecast: location => {
        model
        .getForcast(location)
        .then(forecast => {
            view.showForecast(forecast);
        })
    },

    conveyCurrent: location =>{
        model
        .getCurrentWeather(location)
        .then((data)=>{
            view.showCurrentWeather(data);
        })
    },

    conveyCitys: data => {
        view.showListCitys(data);
    },

    hideListCitys: () =>{
        view.hideListCitys();
    }
};

export default controller;