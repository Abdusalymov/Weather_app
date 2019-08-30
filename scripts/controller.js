import model from "./model";
import view from "./view";

const controller = {

    init: function (locationName) {
        this.callApiForecastWeather(locationName);
        this.callApiCurrentWeather(locationName);
    },

    callApiForecastWeather: (location) => {
        model
        .getForcastWeather(location)
        .then(forecast => {
            view.showForecast(forecast);
        })
    },

    callApiCurrentWeather: (location) =>{
        model
        .getCurrentWeather(location)
        .then((data)=>{
            view.showCurrentWeather(data, location);
        })
    },

    conveyCitys: data => {
        view.showListCitys(data);
    },

    hideListCitys: () =>{
        view.hideListCitys();
    },

    toggleMobileSearchBox: () =>{
        let toggleState = model.changeMobileBox();
        view.closeOpenMobileBox(toggleState);
    }
};

export default controller;