const GoogleImages = require('googleimg');

const client = new GoogleImages('656abd0628cc24d4d', 'AIzaSyC2khcSjDDEYkhF8ckTCFrv1hsf1ISPxoY');

client.search('Steve Angello')
 .then(images => {
  /*
  [{
    "link": 'http://steveangello.com/boss.jpg',
    "mime": 'image/jpeg',
    "snippet": 'Steve Angello',
    "image": {
      "contextLink": 'http://steveangello.com',
      "width": 1024,
      "height": 768,
      "byteSize": 1000,
      "thumbnailLink": 'http://steveangello.com/thumbboss.jpg',
      "thumbnailWidth": 512,
      "thumbnailHeight": 512
    }
  }]
  */
 });

// paginate results
client.search('Steve Angello', {page: 2});

// search for certain size
client.search('Steve Angello', {size: 'large'});