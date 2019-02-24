const fs = require('fs');
const path = require('path');

module.exports = name => {
  const imagesList = fs.readdirSync(path.join(__dirname, '../../resources', 'images', name));

  return {
    brand: 'Apple',
    colors: ['a', 'b', 'c'],
    name: 'iPhone 8',
    price: 689,
    year: 2017,
    web: 'https://www.apple.com/es/shop/buy-iphone/iphone-8',
    
    description: fs.readFileSync(path.join(__dirname, 'descriptions', `${name}.txt`), 'utf8'),
    summary: fs.readFileSync(path.join(__dirname, 'summaries', `${name}.txt`), 'utf8'),
    thumbnail: `/resources/thumbnails/${name}.jpg`,
    images: imagesList.map(image => {
      return `/resources/images/${name}/${image}`;
    })
  };
};
