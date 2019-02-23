/**
 * @file Example static information of the phones that will be requested via GraphQL.
 */

const fs = require('fs');;
const path = require('path');

/**
 * Array of phones.
 * Each phone will have the following information:
 *    - id (unique)
 *    - brand
 *    - colors: array of available colors
 *    - description
 *    - images
 *    - name
 *    - price
 *    - summary
 *    - thumbnail
 *    - year
 *    - web
 */
module.exports = [
  // iPhone
  {
    id: 1,
    brand: 'Apple',
    colors: ['a', 'b', 'c'],
    description: fs.readFileSync(path.join(__dirname, 'descriptions', 'iPhone7.txt'), 'utf8'),
    images: [
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg',
      '/resources/images/thumbnail_apple_iphone_7.jpg'
    ],
    name: 'iPhone 7',
    price: 529,
    summary: fs.readFileSync(path.join(__dirname, 'summaries', 'iPhone7.txt'), 'utf8'),
    thumbnail: '/resources/images/thumbnail_apple_iphone_7.jpg',
    year: 2016,
    web: 'https://www.apple.com/es/shop/buy-iphone/iphone-7'
  },
  {
    id: 2,
    brand: 'Apple',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'iPhone 8',
    price: 689,
    summary:
      'Apple iPhone 8 Plus Una mente brillante. Un espectacular diseño integral de vidrio. La cámara más popular del mundo en una versión aún mejor. El chip más inteligente y con mayor potencia que ha tenido un smartphone. Un sistema de carga inalámbrica que es pura comodidad. Y formas nunca vistas de disfrutar de la realidad aumentada. Es el iPhone 8, una nueva generación de iPhone.El iPhone 8 (PRODUCT) RED™ Special Edition acabado en vidrio rojo, destina una contribución al Fondo Mundial de la lucha contra el VIH.',
    thumbnail: '/resources/images/thumbnail_apple_iphone_8.jpg',
    year: 2017,
    web: 'https://www.apple.com/es/shop/buy-iphone/iphone-8'
  },
  {
    id: 3,
    brand: 'Apple',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'iPhone XR',
    price: 859,
    summary:
      'Nueva pantalla Liquid Retina con la tecnología LCD más avanzada del sector. Face ID aún más rápido. El chip más inteligente y con mayor potencia en un smart­phone. Y un revolucio­nario sistema de cámara. Da igual por dónde lo mires: el iPhone XR es sencillamente asombroso.',
    thumbnail: '/resources/images/thumbnail_apple_iphone_xr.jpg',
    year: 2018,
    web: 'https://www.apple.com/es/iphone-xr/'
  },
  {
    id: 4,
    brand: 'Apple',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'iPhone XS',
    price: 1159,
    summary:
      'Presentamos el iPhone XS con dos tamaños de pantalla Super Retina, incluida la más grande que ha tenido nunca un iPhone. Face ID aún más rápido. El chip más inteligente y con mayor potencia en un smartphone. Y un revolucionario sistema de cámara dual. Es todo lo que te gusta del iPhone. Pero llevado al extremo.',
    thumbnail: '/resources/images/thumbnail_apple_iphone_xs.jpg',
    year: 2018,
    web: 'https://www.apple.com/es/iphone-xs/'
  },
  // Xiaomi
  {
    id: 5,
    brand: 'Xiaomi',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Mi 8',
    price: 449,
    summary:
      'Mi 8 es el buque insignia de Xiaomi para 2018. Un fantástico Smartphone con procesador Qualcomm Snapdragon 845, cámara dual AI con zoom óptico, GPS de doble frecuencia, desbloqueo facial y una espectacular pantalla completa AMOLED de 6.21".',
    thumbnail: '/resources/images/thumbnail_xiaomi_mi_8.jpg',
    year: 2018,
    web: 'https://www.mi.com/es/mi8/'
  },
  {
    id: 6,
    brand: 'Xiaomi',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Mi A2',
    price: 249,
    summary:
      'El Xiaomi Mi A2 ya ha llegado. Después del éxito conseguido por Xiaomi con el Mi A1, el fabricante chino acaba de presentar a su sucesor: el Xiaomi Mi A2.',
    thumbnail: '/resources/images/thumbnail_xiaomi_mi_a2.jpg',
    year: 2018,
    web: 'https://www.mi.com/es/mi-a2/'
  },
  {
    id: 7,
    brand: 'Xiaomi',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Mi MIX 3',
    price: 499,
    summary:
      'Mi MIX 3, arte x Tecnología! Mi MIX 3 supera los límites de la pantalla completa con una proporción de pantalla-cuerpo del 93,4%. La parte frontal del teléfono es prácticamente pantalla gracias a su diseño de cámara dual oculta, que es posible gracias a su cuerpo deslizante magnético que se mantiene intacto incluso después de 300.000 pruebas de apertura. Además, cuenta con cuerpo deslizante magnético, cámara dual trasera flagship y diseño cerámico en varios colores.',
    thumbnail: '/resources/images/thumbnail_xiaomi_mi_mix_3.png',
    year: 2018,
    web: 'https://www.mi.com/es/mix3/'
  },
  {
    id: 8,
    brand: 'Xiaomi',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Redmi Note 6 Pro',
    price: 199,
    summary:
      'Xiaomi no para de aumentar su catálogo y ahora nos presenta el nuevo Redmi Note 6 Pro, un Smartphone con pantalla de 6.26 Pulgadas, y es que la compañía china está decidida a quedarse con el mercado en la gama media-alta.  Del nuevo Remi Note 6 Pro a parte de su pantalla nos trae un procesador Snapdragon 636, batería de 4000mAh y cámara dual con IA.',
    thumbnail: '/resources/images/thumbnail_xiaomi_redmi_note_6_pro.png',
    year: 2018,
    web: 'https://www.mi.com/es/redmi-note-6-pro/'
  },
  // Samsung
  {
    id: 9,
    brand: 'Samsung',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Galaxy S9',
    price: 849,
    summary:
      'Un smartphone con carácter. Disfruta del nuevo Galaxy S9 y su cámara trasera Dual Píxel Super Slow-mo de 12MP (F1.5/F2.4) con estabilización óptica.',
    thumbnail: '',
    year: 2018,
    web: 'https://www.samsung.com/es/smartphones/galaxy-s9/'
  },
  {
    id: 10,
    brand: 'Samsung',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Galaxy Note9',
    price: 1009,
    summary:
      'Aquí está el nuevo Samsung Galaxy Note 9 en un fantástico color negro, un smartphone con mayúsculas donde confluyen el trabajo y mismo de la compañía para crear un dispositivo perfecto.',
    thumbnail: '',
    year: 2018,
    web: 'https://www.samsung.com/es/smartphones/galaxy-note9/'
  },
  {
    id: 11,
    brand: 'Samsung',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Galaxy A7',
    price: 299,
    summary:
      'El nuevo Samsung Galaxy A7, es el último modelo de la compañía Koreana para su gama media. El Galaxy A7 cuenta con un procesador Quad Core, pantalla de 6 Pulgadas con resolución HD+ y 4GB de RAM. En su apartado fotográfico el Samsung Galaxy A7 destaca por sus 3 Cámaras traseras.',
    thumbnail: '',
    year: 2018,
    web: 'https://www.samsung.com/es/smartphones/galaxy-a7/'
  },
  {
    id: 12,
    brand: 'Samsung',
    colors: [],
    description: 'This is a longer description',
    images: [],
    name: 'Galaxy J6+',
    price: 199,
    summary:
      'El nuevo Samsung Galaxy J6 Plus, es el último modelo de la compañía Koreana para su gama media. El Galaxy J6 Plus cuenta con un procesador Quad Core, pantalla de 6 Pulgadas con resolución HD+ y 3GB de RAM.',
    thumbnail: '',
    year: 2018,
    web: 'https://www.samsung.com/es/smartphones/galaxy-j6-j610/SM-J610FZRNPHE/'
  }
];
