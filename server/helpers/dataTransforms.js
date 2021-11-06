import map from 'lodash/map';

module.exports = {
  // when the data comes back from the api call for STYLES
  // create const styles as an empty array
  // iterate through styles.results
  // create empty style object
  // style.style_id = style_id
  // style.name = name

  formatStyles: (styles) => {
    const productStyles = [];

    for (let i = 0; i < styles.results; i += 1) {
      const style = {};

      style.style_id = styles.results[i].style_id;
      style.name = styles.results[i].name;
      style.original_price = styles.results[i].original_price;
      style.sale_price = styles.results[i].sale_price;
      style.default = styles.results[i]['default?'];
      style.skus = [];
      style.photos = [];

      map(styles.results[i].skus, (sku) => {
        const skuObject = {};
        skuObject.sku = sku;
        skuObject.size = sku.size;
        skuObject.quantity = sku.quantity;

        styles.skus.push(skuObject);
      });

      map(styles.results[i].photos, (photo) => {
        const photoObject = {};

        photoObject.thumbnail_url = photo.thumbnail_url;
        photoObject.url = photo.url;

        styles.photos.push(photoObject.skus);
      });

      productStyles.push(style);
    }
  },
};
