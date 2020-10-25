import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
  // spin the arrow
  document.getElementById('arrow').style.transform = `rotate(${ProxyState.weather.wDir-45}deg)`

}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
    setInterval(this.getWeather, 60000)
  }

  getWeather() { try { weatherService.getWeather() } catch (e) { console.error(e) } }
}
