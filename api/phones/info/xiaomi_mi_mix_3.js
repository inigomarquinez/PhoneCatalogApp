const fs = require('fs');
const path = require('path');

module.exports = name => {
  const imagesList = fs.readdirSync(path.join(__dirname, '../../resources', 'images', name));

  return {
    brand: 'Xiaomi',
    colors: ['black'],
    name: 'Mi MIX 3',
    price: 499,
    year: 2018,
    web: 'https://www.mi.com/es/mix3/',
    description: fs.readFileSync(path.join(__dirname, 'descriptions', `${name}.txt`), 'utf8'),
    summary: fs.readFileSync(path.join(__dirname, 'summaries', `${name}.txt`), 'utf8'),
    thumbnail: `/resources/thumbnails/${name}.jpg`,
    images: imagesList.map(image => {
      return `/resources/images/${name}/${image}`;
    })
  };
};
