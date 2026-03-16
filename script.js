import { Api_Key } from "./config.js";


const Input_locat = document.querySelector("#Location")
const SearchBtn = document.querySelector(".Search-btn");
const Result = document.querySelector(".Result")
const Main=document.querySelector(".main")

Result.textContent="Weather Loading..."

async function WeatherFinder(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`);
    const data = await response.json();
    RenderData(data);
    console.log(data.name)
    localStorage.setItem("lastCity",data.name)
}
async function WeatherByLocation(lat, lon){

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}&units=metric`
    );

    const data = await response.json();
    RenderData(data)
    console.log(data);
}


window.addEventListener("load", () => {

    const savedCity=localStorage.getItem("lastCity")
    if(savedCity){
        WeatherFinder(savedCity)
    }
    else{
        navigator.geolocation.getCurrentPosition((position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        WeatherByLocation(lat, lon);

    });
    }

});

Input_locat.addEventListener("keydown" ,(e)=>{
    if (e.key==="Enter"){
        SearchBtn.click();
    }
})



SearchBtn.addEventListener("click", (e) => {
    if (Input_locat.value===""){
        e.preventDefault();
        alert("search field is empyt")
    }
    else{
        const Place=Input_locat.value;
        WeatherFinder(Place)
        console.log("Weather finded")
    }
})



function RenderData(data){
    const icon=data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    Result.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <img class="weather-icon" src="${iconUrl}" alt="weather icon">
            <h1>${data.main.temp}°C</h1>
            <p class="desc">${data.weather[0].description}</p>

            <div class="weather-info">
                <span>Humidity: ${data.main.humidity}%</span>
                <span>Wind: ${data.wind.speed} m/s</span>
            </div>
        </div>
        `;
        changeBackground(data.weather[0].main)
}



function changeBackground(condition){

    if(condition === "Clear"){
        Main.style.background = "linear-gradient(#56ccf2, #2f80ed)";
    }

    else if(condition === "Clouds"){
        Main.style.background = "linear-gradient(#bdc3c7, #2c3e50)";
    }

    else if(condition === "Rain"){
        Main.style.background = "linear-gradient(#4b6cb7, #182848)";
    }

    else if(condition === "Snow"){
        Main.style.background = "linear-gradient(#e6dada, #274046)";
    }

    else{
        Main.style.background = "#f5f5f5";
    }

}