import { observable } from "mobx";
const rest = require('../provider/apiProviderPerDay');
const rest5days = require('../provider/providerPer5Days')

const WeatherStore = observable({

    dataWeather: null,

    dataWeather5Days: null,

    getData: async () => {
      const { data } = await rest.default(WeatherStore.ciudad);
      WeatherStore.dataWeather = data;
    },

    getDat5Days: async () => {
        const { data } = await rest5days.default(WeatherStore.ciudad);
        WeatherStore.dataWeather5Days = data;
    },
    
    ciudad: '',
});

export default WeatherStore