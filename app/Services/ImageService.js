import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "./AxiosService.js";
// api 'images'

//TODO create methods to retrieve data and save to the State
class ImageService {
  async getBackgroundImg() {
    let res = await api.get('images')
    ProxyState.image = new Image(res.data)
  }

 }

const imageService = new ImageService();
export default imageService;