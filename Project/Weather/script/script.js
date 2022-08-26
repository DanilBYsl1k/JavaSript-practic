let firstD=document.querySelector('.one-day')
let twoD=document.querySelector('.two-day')
let threeD=document.querySelector('.three-day')
let fourD=document.querySelector('.four-day')
let fiveD=document.querySelector('.five-day')
let sixD=document.querySelector('.six-day')

let bals=document.querySelectorAll('.bals-wraper')
let myCity=document.querySelector('.my-city')

bals.forEach(element => {
        element.addEventListener('click',function(){
            let lat=element.getAttribute('data-lat');
            let lon=element.getAttribute('data-lon');
            
            fetc(lat,lon)
            fetchWeek(lat,lon)
        })
});

myCity.addEventListener('click',function(){
    fetch('http://ip-api.com/json')
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    let lat=data.lat;
    let lon=data.lon;
    fetc(lat,lon)
    fetchWeek(lat,lon)
})
})

fetch('http://ip-api.com/json')
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
    let lat=data.lat;
    let lon=data.lon;
    fetc(lat,lon)
    fetchWeek(lat,lon)
})
function fetc(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c12bd8f85d5325f3a050dd8b2f55c841`)
    .then(function(resp){
        return resp.json()
    })
    .then(function(dataWeather){
        document.querySelector('.title-sity').innerText=dataWeather.name   
        document.querySelector('.wind-status').innerHTML=`<div class="Indicators-title"><p>Wind-status</p></div><div class="indicator-info"><p>${dataWeather.wind.speed}km/h</p></div>`
        document.querySelector('.feels_like').innerHTML=`<div class="Indicators-title"><p>Feels like</p></div><div class="indicator-info"><p>${Math.round(dataWeather.main.feels_like- 273)}&degC</p></div>`
        document.querySelector('.main').innerHTML=`<div class="Indicators-title"><p>Main weather</p></div><div class="indicator-info"><p>${dataWeather.weather[0].main}</p></div>`
        document.querySelector('.humidity').innerHTML=`<div class="Indicators-title"><p>Humidity</p></div><div class="indicator-info"><p>${dataWeather.main.humidity}%</p></div>`
        document.querySelector('.visibility').innerHTML=`<div class="Indicators-title"><p>Visibility</p></div><div class="indicator-info"><p>${dataWeather.visibility/1000}km</p></div>`
        document.querySelector('.country').innerHTML=`<div class="Indicators-title"><p>Country</p></div><div class="indicator-info"><p>${dataWeather.sys.country}</p></div>`
    })
}


function fetchWeek(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c12bd8f85d5325f3a050dd8b2f55c841`)
.then(function(resp){
    return resp.json()
})
.then(function(dataWeather){
    console.log(dataWeather.list)

    document.querySelector('.temperature').innerHTML=Math.round(dataWeather.list[0].main.temp - 273)+'&deg C'
    document.querySelector('.time').innerText=dataWeather.list[0].dt_txt
    document.querySelector('.main-img').innerHTML=`<img src="https://openweathermap.org/img/wn/${dataWeather.list[0].weather[0]['icon']}@2x.png"> `
    firstD.innerHTML=`<p>${dataWeather.list[8].dt_txt}</p><img src="https://openweathermap.org/img/wn/${dataWeather.list[8].weather[0]['icon']}@2x.png"><p>${Math.round(dataWeather.list[8].main.temp - 273)}&deg C </p>`
    twoD.innerHTML=`<p>${dataWeather.list[16].dt_txt}</p><img src="https://openweathermap.org/img/wn/${dataWeather.list[16].weather[0]['icon']}@2x.png"> <p>${Math.round(dataWeather.list[16].main.temp - 273)}&deg C </p>`
    threeD.innerHTML=`<p>${dataWeather.list[24].dt_txt}</p><img src="https://openweathermap.org/img/wn/${dataWeather.list[24].weather[0]['icon']}@2x.png"> <p>${Math.round(dataWeather.list[24].main.temp - 273)}&deg C </p>`
    fourD.innerHTML=`<p>${dataWeather.list[32].dt_txt}</p><img src="https://openweathermap.org/img/wn/${dataWeather.list[32].weather[0]['icon']}@2x.png"> <p>${Math.round(dataWeather.list[32].main.temp - 273)}&deg C </p>`
    fiveD.innerHTML=`<p>${dataWeather.list[39].dt_txt}</p><img src="https://openweathermap.org/img/wn/${dataWeather.list[39].weather[0]['icon']}@2x.png"> <p>${Math.round(dataWeather.list[39].main.temp - 273)}&deg C </p>`
})
}

