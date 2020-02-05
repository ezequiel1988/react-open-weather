import Axios from "axios"

var APIKEY = 'f99e3497ca7ab699945aa6eac0ec3f6d'

 const getWeather = (city) => {

   return Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKEY}`)
}

export default getWeather;