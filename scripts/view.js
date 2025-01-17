
const view = {

    ul: document.getElementById("dayList"),

    city: document.querySelector(".city"),

    listBox: {},

    rusLocations: ["Пермь", "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Нижний Новгород"],

    weatherType: document.querySelector(".weather_type"),

    tempToday: document.querySelector(".tempToday"),

    showForecast:function(forecast){
        for(let i = 0; i < this.ul.children.length; i++){
            this.ul.children[i].innerHTML = `
                <span class="day">
                    ${forecast[i].dayWeek}
                </span>

                <div class="weather_icon">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="wi wi_size">
                        <use xlink:href="#${forecast[i].weather.code}" />
                    </svg>
                </div>
                
                <span class="temperature">
                    ${forecast[i].min_temp}&#176;/${forecast[i].max_temp}&#176;
                </span>

                <span class="textWeather">
                    ${forecast[i].weather.description}
                </span>
            `;
        }
    },

    showCurrentWeather: function({main, weather}, cityName="Москва"){
        this.city.innerHTML = cityName.toUpperCase();
        this.tempToday.innerHTML = Math.round(main.temp) +"&#176;";
        this.weatherType.innerHTML = weather[0].description;
    },

    showListCitys: function(citys, containerID){
        this.listBox = document.getElementById(`${containerID}`);
        this.listBox.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        citys.forEach(function(item, index, citys) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const text = document.createTextNode(item.title);
            span.appendChild(text);
            li.appendChild(span)
            li.classList.add(`${containerID}_js`)
            fragment.appendChild(li);
        });
        
        this.listBox.appendChild(fragment);
        this.listBox.style.display = "block";
    },

    hideListCitys: function(){
        this.listBox.style.display = "none";
        document.querySelector(`.${this.listBox.id}`).value = "";
    },

    closeOpenMobileBox: function(stateBox){
        document.querySelector(".search_box_mobile").style.display = stateBox ? "block" : "none";
    },
    
    mobileWeatherLocations: function (weather) {
        const city_weather = document.querySelector(".city_weather");
        city_weather.innerHTML = ""
        weather.forEach((item, index, weather) => {
            const li = document.createElement("li");
            const temperature = Math.round(weather[index].main.temp);
            const iconID = weather[index].weather[0].id;
            const locationName = this.rusLocations[index];

            li.innerHTML = `
                <span class="locationsName_mobile">${locationName}</span> 
                <i class="wi wi-owm-${iconID}"></i>
                <span>${temperature}</span> 
                <span id="${locationName}" class="touch_box" ></span>    
            `
            city_weather.appendChild(li);  
        });
    }
};
export default view;
 