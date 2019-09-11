import model from "./model";
import view from "./view";

const controller = {

    containerID : '',

    init: function (locationName) {
        this.callApiForecastWeather(locationName);
        this.callApiCurrentWeather(locationName);
        this.showCurrentWeatherSeveralLocation();
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

    conveyCitys: function (data){
        const containerID = this.containerID;
        view.showListCitys(data, containerID);
    },

    hideListCitys: () =>{
        view.hideListCitys();
    },

    toggleMobileSearchBox: () =>{
        let toggleState = model.changeMobileBox();
        view.closeOpenMobileBox(toggleState);
    },

    showCurrentWeatherSeveralLocation: () => {
        model
        .getCurrentWeatherSeveralLocations()
        .then(CurrentWeatherLocations => {
            view.mobileWeatherLocations(CurrentWeatherLocations);
        })
    },

    callApiListCitys: function (firstLettersNameLocation, inputClassName){
        this.containerID = inputClassName;
        model.getListCitys(firstLettersNameLocation);
    }
};
export default controller;