import Axios from "axios"

var APIKEY = 'f99e3497ca7ab699945aa6eac0ec3f6d'

 const getWeatherPEr5Days = (city) => {

   return Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${APIKEY}&cnt=5`)
}

export default getWeatherPEr5Days;