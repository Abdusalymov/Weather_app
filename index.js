import model from "./scripts/model";
import controller from "./scripts/controller";
// import "./main.scss";
const axios = require('axios');

const body = document.querySelector('body');
const citysNamesList = document.querySelector('.citysNamesList');

controller.init();

//get name location from input
body.addEventListener('input', ({ target }) => {
    const inputClassName = target.className;
    const firstLettersNameLocation = target.form[0].value;

    if (inputClassName === 'cityName'|| inputClassName === 'cityName_mobile' && firstLettersNameLocation.length >= 2) {
        controller.callApiListCitys(firstLettersNameLocation, inputClassName);
    }
});

//open/close side mobile menu on click
 body.addEventListener('click', ({ target }) => {
  if(target.className === "touch_box_mobile" || target.className.baseVal === "close_icon"){
        controller.toggleMobileSearchBox();
    }
});

//select a city from the drop-down list on click
citysNamesList.addEventListener("click", ({ target })=>{
    const locationName = target.textContent;
    controller.init(locationName);
    controller.hideListCitys();
});
