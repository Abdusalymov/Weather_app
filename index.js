import controller from "./scripts/controller";

const body = document.querySelector('body');
const citysNamesList = document.querySelector('.citysNamesList');
const citysNamesList_mobile = document.querySelector('.citysNamesList_mobile');
const city_weather = document.querySelector('.city_weather');

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

//select a city from the side-bar for mobile
city_weather.addEventListener("click", ({target}) => {
    console.log(target.id);
    controller.init(target.id)
    controller.toggleMobileSearchBox();
});
