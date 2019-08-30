const view = {

    ul: document.getElementById("dayList"),

    city: document.querySelector(".city"),

    citysNamesList: document.querySelector(".citysNamesList"),

    weatherType: document.querySelector(".weather_type"),

    tempToday: document.querySelector(".tempToday"),

    showForecast:function(forecast){
        for(let i = 0; i < this.ul.children.length; i++){
            this.ul.children[i].innerHTML = `
                <span class="day">
                    ${forecast[i].dayWeek}
                </span>

                <div class="weather_icon">
                    <svg class="wi">
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

    showListCitys: function(citys){
        this.citysNamesList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        citys.forEach(function(item, index, citys) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const text = document.createTextNode(item.title);
            span.appendChild(text);
            li.appendChild(span)
            fragment.appendChild(li);
        });this.citysNamesList.style.display = "block";
        this.citysNamesList.appendChild(fragment);
        this.citysNamesList.style.display = "block";
    },

    hideListCitys: function(){
        this.citysNamesList.style.display = "none";
        document.querySelector(".cityName").value = "";
    },

    showCurrentWeather: function({main, weather}, cityName="Москва"){
        this.city.innerHTML = cityName.toUpperCase();
        this.tempToday.innerHTML = Math.round(main.temp) +"&#176;";
        this.weatherType.innerHTML = weather[0].description;
    },

    closeOpenMobileBox: function(stateBox){
        document.querySelector(".search_box_mobile").style.display = stateBox ? "block" : "none";
    }
};

export default view;