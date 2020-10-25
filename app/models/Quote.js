export default class Quote {
  constructor(data) {
    this.id = data.quote.id 
    this.body = data.quote.body 
    this.author = data.quote.author
  }
}



// "qotd_date": "2020-10-24T00:00:00.000+00:00",
// "quote": {
// "id": 29165,
// "dialogue": false,
// "private": false,
// "tags": [
// "great",
// "men"
// ],
// "url": "https://favqs.com/quotes/plato/29165-nothing-in-th-",
// "favorites_count": 0,
// "upvotes_count": 2,
// "downvotes_count": 0,
// "author": "Plato",
// "author_permalink": "plato",
// "body": "Nothing in the affairs of men is worthy of great anxiety."
// }