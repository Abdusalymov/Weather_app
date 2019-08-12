import controller from "./scripts/controller";

controller.init();

document.querySelector(".btn").addEventListener("click", (event)=>{
    console.log(event.target.form[0].value);
    controller.init(event.target.form[0].value);
})  