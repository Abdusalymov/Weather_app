let view = {

    ul: document.getElementById("dayList"),

    city: document.querySelector(".city"),

    weatherType: document.querySelector(".weather_type"),

    tempToday: document.querySelector(".tempToday"),

    showForecast:function(forecast, data){
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

    showCurrentWeather: function(data){
        this.city.innerHTML = data[0].city_name;
        this.tempToday.innerHTML = Math.round(data[0].temp) +"&#176;";
        this.weatherType.innerHTML = data[0].weather.description;
    }
};

export default view;