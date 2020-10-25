import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";

let _drawBG = () => document.body.style.backgroundImage = `url('${ProxyState.image.url}')`;

export default class ImageController {
  getBackgroundImg() {
    try { imageService.getBackgroundImg() } catch (e) { console.error(e); }
  }
  constructor() { 
    ProxyState.on('image', _drawBG) 
    this.getBackgroundImg()
  }

}