import model from "./model";
import view from "./view";

const controller = {

    init: function (location) {
        this.conveyForecast(location);
        this.conveyCurrent(location);
    },

    conveyForecast: (location) => {
        model
        .getForcast(location)
        .then(forecast => {
            view.showForecast(forecast);
        })
    },

    conveyCurrent: (location) =>{
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