const apiKey = "80a31d514939bec5ac67e51d3f754368"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')


async function checkweather(city){
    const respond = await fetch(apiUrl+city + `&appid=${apiKey}`)
    if(respond.status == 404){
        document.querySelector('.errorMsg').style.display ='block'
        document.querySelector('.weather').style.display = 'none'
    }else{
        let data = await respond.json()
        console.log(data)
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '<sup>o</sup>c'
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('.weather').style.display = 'block'

        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/cloud.png'
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'images/clear.png'
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = 'images/rain.png'
        }
        document.querySelector('.errorMsg').style.display = 'none'
    }
}
searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value); 
})
