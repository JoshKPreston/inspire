

export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);
    this.datetime = new Date()
    this.iconURL = data.weather[0].icon
    this.city = data.name
    this.temp = data.main.temp
    this.wSpeed = data.wind.speed
    // subtracting 45 degrees to compensate for the icon that starts 45 degrees clockwise from 0 degrees
    this.wDir = data.wind.deg
    this.windDirectionStr = ''
    switch (true) {
      /*
      wind degrees
      N (>=345 && <=15)
      nNE (>15 && <30)
      NE (>=30 && <=60)
      eNE (>60 && <75)
      E (>=75 && <=105)
      eSE (>105 && <120)
      SE (>=120 && <=150)
      sSE (>150 && <165)
      S (>=165 && <=195)
      sSW (>195 && <210)
      SW (>=210 && <=240)
      wSW (>240 && <255)
      W (>=255 && <=285)
      wNW (>285 && <300)
      NW (>=300 && <=330)
      nNW (>330 && <345)
      */

      case (this.wDir >= 345 && this.wDir <= 15):
        this.windDirectionStr = `${this.wDir}&deg; N`
        break

      case (this.wDir > 15 && this.wDir < 30):
        this.windDirectionStr = `${this.wDir}&deg; NNE`
        break

      case (this.wDir >= 30 && this.wDir <= 60):
        this.windDirectionStr = `${this.wDir}&deg; NE`
        break

      case (this.wDir > 60 && this.wDir < 75):
        this.windDirectionStr = `${this.wDir}&deg; ENE`
        break

      case (this.wDir >= 75 && this.wDir <= 105):
        this.windDirectionStr = `${this.wDir}&deg; E`
        break

      case (this.wDir > 105 && this.wDir < 120):
        this.windDirectionStr = `${this.wDir}&deg; ESE`
        break

      case (this.wDir >= 120 && this.wDir <= 150):
        this.windDirectionStr = `${this.wDir}&deg; SE`
        break

      case (this.wDir > 150 && this.wDir < 165):
        this.windDirectionStr = `${this.wDir}&deg; SSE`
        break

      case (this.wDir >= 165 && this.wDir <= 195):
        this.windDirectionStr = `${this.wDir}&deg; S`
        break

      case (this.wDir > 195 && this.wDir < 210):
        this.windDirectionStr = `${this.wDir}&deg; SSW`
        break

      case (this.wDir >= 210 && this.wDir <= 240):
        this.windDirectionStr = `${this.wDir}&deg; SW`
        break

      case (this.wDir > 240 && this.wDir < 255):
        this.windDirectionStr = `${this.wDir}&deg; WSW`
        break

      case (this.wDir >= 255 && this.wDir <= 285):
        this.windDirectionStr = `${this.wDir}&deg; W`
        break

      case (this.wDir > 285 && this.wDir < 300):
        this.windDirectionStr = `${this.wDir}&deg; WNW`
        break

      case (this.wDir >= 300 && this.wDir <= 330):
        this.windDirectionStr = `${this.wDir}&deg; NW`
        break

      case (this.wDir > 330 && this.wDir <= 345):
        this.windDirectionStr = `${this.wDir}&deg; NNW`
        break

      default:
        break
    }

  }

  get Template() {
    return /*html*/ `
      <div class="weather-section weather-icon">
        <img src="https://openweathermap.org/img/w/${this.iconURL}.png" alt="" id="weatherIcon">
      </div>
      <div class="weather-section">
          <div id="weatherCity">${this.city}</div>
          <div id="weatherTemp">${(((this.temp - 273.15) * 9 / 5) + 32).toFixed(2)} &#8457;</div>
          <div><span>Wind: </span><span id="weatherWSpeed">${this.wSpeed}</span><span>m/s</span></div>
          <div id="weatherWDir">${this.windDirectionStr}</div>
      </div>
      <div class="weather-section">
        <div class="compass">
          <i id="arrow" class="fa fa-location-arrow" aria-hidden="true"></i>
          <div class="n-s"></div>
          <div class="ne-sw"></div>
          <div class="e-w"></div>
          <div class="se-nw"></div>
        </div>
      </div>

    `;
  }
}

// K = 310.15
// 310.15 - 273.15
// 37*9/5
// +32


// "coord": {
//   "lon": -116.2,
//   "lat": 43.61
//   },
//   "weather": [
//   {
//   "id": 800,
//   "main": "Clear",
//   "description": "clear sky",
//   "icon": "01d"
//   }
//   ],
//   "base": "stations",
//   "main": {
//   "temp": 282.98,
//   "feels_like": 274.2,
//   "temp_min": 281.15,
//   "temp_max": 284.26,
//   "pressure": 1023,
//   "humidity": 24
//   },
//   "visibility": 10000,
//   "wind": {
//   "speed": 8.2,
//   "deg": 160,
//   "gust": 11.8
//   },
//   "clouds": {
//   "all": 1
//   },
//   "dt": 1603480342,
//   "sys": {
//   "type": 1,
//   "id": 3479,
//   "country": "US",
//   "sunrise": 1603462172,
//   "sunset": 1603500495
//   },
//   "timezone": -21600,
//   "id": 5586437,
//   "name": "Boise",
//   "cod": 200