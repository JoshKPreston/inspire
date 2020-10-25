import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js"


let _drawQuote = () => { 
  document.getElementById('quoteBody').innerHTML = ProxyState.quote.body
  document.getElementById('quoteAuthor').innerHTML = ProxyState.quote.author
}
export default class QuoteController {

  getQuote() {
    try { quoteService.getQuote() } catch (error) { console.error(error); }
  }

  constructor() {
    ProxyState.on('quote', _drawQuote)
    this.getQuote()
  }
  
 }