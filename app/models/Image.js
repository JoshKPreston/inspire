export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url 
    this.large_url = data.large_url 
    this.source_id = data.source_id 
    this.copyright = data.copyright 
    this.site = data.site 
  }
}



// "id": 165,
// "url": "https://splashbase.s3.amazonaws.com/unsplash/regular/tumblr_mvyxwqmRrn1st5lhmo1_1280.jpg",
// "large_url": "https://splashbase.s3.amazonaws.com/unsplash/large/1hnek0G",
// "source_id": 102,
// "copyright": "CC0",
// "site": "unsplash"