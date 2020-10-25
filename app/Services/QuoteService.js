import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";
// api 'quotes'

//TODO create methods to retrieve data and update the State
class QuoteService {
  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = res.data.quote
  } 
  
}

const quoteService = new QuoteService();
export default quoteService;