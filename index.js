import model from "./scripts/model";
import controller from "./scripts/controller";

controller.init();

document.querySelector(".cityName").addEventListener("input", (event)=>{
    if(event.target.form[0].value.length >= 2){
        model.getListCitys(event.target.form[0].value);
    }
    
})

document.querySelector(".citysNames").addEventListener("click", ()=>{
    controller.init(event.target.textContent);
    controller.hideListCitys();
})
