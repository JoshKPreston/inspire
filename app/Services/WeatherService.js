import { ProxyState } from "../AppState.js";
import weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";
// api 'weather'

class WeatherService {
  converTemp() {
    ProxyState.weather.currentTemp = ProxyState.weather.convertTemp(ProxyState.weather.currentTemp.temp)
    ProxyState.weather = ProxyState.weather
  }

  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  constructor() {
  }
}

const weatherService = new WeatherService();
export default weatherService;

