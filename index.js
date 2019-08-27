import model from "./scripts/model";
import controller from "./scripts/controller";

controller.init();
//get name location from input
document.querySelector('body').addEventListener('input', ({ target }) => {
  if (target.className === 'cityName'|| target.className === 'cityName_mobile' && target.form[0].value.length >= 2) {
        model.getListCitys(target.form[0].value);
    }
})

//select a city from the drop-down list on click
document.querySelector(".citysNames").addEventListener("click", ()=>{
   controller.init(event.target.textContent);
    controller.hideListCitys();
});

//open/close side mobile menu on click
 document.querySelector('body').addEventListener('click', ({ target }) => {
  if(target.className.baseVal === "search_icon" || target.className.baseVal === "close_icon"){
        controller.toggleMobileSearchBox();
    }
})