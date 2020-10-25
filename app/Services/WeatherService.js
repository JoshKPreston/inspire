import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";
// api 'weather'

class WeatherService {

  async getWeather() {
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  constructor() {
  }
}

const weatherService = new WeatherService();
export default weatherService;

