// import model from "./scripts/model";
import controller from "./scripts/controller";
// import "./main.scss";
// const axios = require('axios');


const body = document.querySelector('body');
const citysNamesList = document.querySelector('.citysNamesList');
const citysNamesList_mobile = document.querySelector('.citysNamesList_mobile');


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
  if(target.className === "touch_box_mobile"){
        controller.toggleMobileSearchBox();
    }
});

//select a city from the drop-down list on click
citysNamesList.addEventListener("click", hideList);
citysNamesList_mobile.addEventListener("click", ({target}) => {
    controller.toggleMobileSearchBox();
    hideList(event);
});

function hideList ({target}){
    console.log(target)
    const locationName = target.textContent;
    controller.init(locationName);
    controller.hideListCitys();
}