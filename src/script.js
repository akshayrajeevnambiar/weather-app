const apiKey = "eae5b90511ada9fe4b70e732fa46b8ae"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json()

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
