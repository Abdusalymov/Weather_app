const view = {

    ul: document.getElementById("dayList"),

    city: document.querySelector(".city"),

    citysNames: document.querySelector(".citysNames"),

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
        this.citysNames.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        citys.forEach(function(item, index, citys) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            const text = document.createTextNode(item.title);
            span.appendChild(text);
            li.appendChild(span)
            fragment.appendChild(li);
        });this.citysNames.style.display = "block";
        this.citysNames.appendChild(fragment);
        this.citysNames.style.display = "block";
    },

    hideListCitys: function(){
        this.citysNames.style.display = "none";
        document.querySelector(".cityName").value = "";
    },

    showCurrentWeather: function(data, cityName="Москва"){
        this.city.innerHTML = cityName.toUpperCase();
        this.tempToday.innerHTML = Math.round(data[0].temp) +"&#176;";
        this.weatherType.innerHTML = data[0].weather.description;
    },

    closeOpenMobileBox: function(stateBox){
        document.querySelector(".search_box_mobile").style.display = stateBox ? "block" : "none";
    }
};

export default view;