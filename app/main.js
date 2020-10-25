import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuoteController from "./Controllers/QuoteController.js";
import ImageController from "./Controllers/ImageController.js";
import Swal from "./sweetalert2.all.min.js"

//TODO Dont forget to register all your controllers	
class App {
  
  
  clock() {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      
      let updateTime = (num) => (num < 10) ? "0" + num : num
      hour = updateTime(hour);
      min = updateTime(min);
      sec = updateTime(sec);
      
      // grab meridiem before converting hour to standard time
      let meridiem = (hour >= 12) ? "PM" : "AM"
      let greeting = (hour >= 12) ? 'Good Afternoon!' : ((hour >= 17) ? 'Good Evening ^_^' : 'Good Morning!')
      
      // convert hour to standard time if more than 13 or 0 midnight to 12am
      hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);


      document.getElementById('clock').innerText = `${hour}:${min}:${sec} ${meridiem}`
      document.getElementById('greeting').innerText = greeting
    }
    

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

  constructor() {
    this.weatherController = new WeatherController();
    this.quoteController = new QuoteController();
    this.imageController = new ImageController();
    this.todoController = new TodoController();
    setInterval(this.clock, 1000)
  }

}


window["app"] = new App();

window["swal"] = new Swal