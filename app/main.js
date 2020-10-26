import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ImageController from "./Controllers/ImageController.js";


class Clock {

  constructor(isStandard) {
    this.clock = this.getTime(isStandard)
  }
    getTime(isStandard) {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.min = this.date.getMinutes();
      this.sec = this.date.getSeconds();
      
      // allow hour to show double digit even if real time hour is single digit
      this.updateTime = (num) => (num < 10) ? "0" + num : num
      this.hour = this.updateTime(this.hour);
      this.min = this.updateTime(this.min);
      this.sec = this.updateTime(this.sec);

      // grab meridiem before converting hour to standard time and set greeting accordingly
      this.meridiem = (this.hour >= 12) ? "PM" : "AM"
      this.greeting = (this.hour >= 12) ? 'Good Afternoon!' : ((this.hour >= 17) ? 'Good Evening ^_^' : 'Good Morning!')
      
      isStandard ? this.standard = true : this.standard = false
      this.standard
        ? this.hour = (this.hour == 0) ? 12 : ((this.hour > 12) ? (this.hour - 12): this.hour)
        : document.getElementById('militaryClock').innerText = `${this.hour}:${this.min}:${this.sec} ${this.meridiem}`
      document.getElementById('standardClock').innerText = `${this.hour}:${this.min}:${this.sec} ${this.meridiem}`
      document.getElementById('greeting').innerText = this.greeting
    }

  }


class App {
  
   

    showElement(id) {
      let elem = document.getElementById(id)
      elem.classList.remove('hidden')
    }
    
    hideElement(id) {
      let elem = document.getElementById(id)
      elem.classList.add('hidden')
    }
    
    next() {
      this.imageController.getBackgroundImg()
      this.quoteController.getQuote()
    }

    standardClock = new Clock(true)
    militaryClock = new Clock(false)

  constructor() {
    this.weatherController = new WeatherController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    this.todoController = new TodoController();
    setInterval(this.standardClock.getTime, 1000)
    setInterval(this.militaryClock.getTime, 1000)
  }

}

window["app"] = new App();

