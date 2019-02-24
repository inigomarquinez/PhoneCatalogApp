/**
 * @file Example static information of the phones that will be requested via GraphQL.
 */

const phonesNames = [
  'apple_iphone_7',
  'apple_iphone_8',
  'apple_iphone_xr',
  'apple_iphone_xs',
  'xiaomi_mi_8',
  'xiaomi_mi_a2',
  'xiaomi_mi_mix_3',
  'xiaomi_redmi_note_6_pro',
  'samsung_galaxy_s9',
  'samsung_galaxy_note9',
  'samsung_galaxy_a7',
  'samsung_galaxy_j6_plus'
];

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
module.exports = phonesNames.map((name, index) => {
  const info = require(`./info/${name}`);
  return {
    id: index,
    ...info(name)
  }
});
