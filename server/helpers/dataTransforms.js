const forEach = require('lodash/forEach');

exports.formatStyles = (styles) => {
  const productStyles = [];

  for (let i = 0; i < styles.results.length; i += 1) {
    const style = {};
    let count = 0;

    style.style_id = styles.results[i].style_id;
    style.name = styles.results[i].name;
    style.original_price = styles.results[i].original_price;
    style.sale_price = styles.results[i].sale_price;
    style.default = styles.results[i]['default?'];
    style.skus = [];
    style.photos = [];

    forEach(styles.results[i].skus, (sku) => {
      const skuObject = {};
      skuObject.sku = Number(Object.keys(styles.results[i].skus)[count]);
      skuObject.size = sku.size;
      skuObject.quantity = sku.quantity;
      count += 1;
      style.skus.push(skuObject);
    });

    forEach(styles.results[i].photos, (photo) => {
      const photoObject = {};
      photoObject.thumbnail_url = photo.thumbnail_url;
      photoObject.url = photo.url;
      style.photos.push(photoObject);
    });

    productStyles.push(style);
  }

  return productStyles;
};
