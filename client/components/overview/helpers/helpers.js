export const getProductData = () => {

};

export const getProductStyles = ({ currentProduct, setStyles, styles }) => {
  fetch(`http://localhost:3000/overview/${currentProduct.id}/styles`)
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
      setStyles(data);
      console.log('styles', styles);
    })
    .catch((error) => {
      console.log(`error in fetching data for id ${currentProduct.id}`, error);
    });
};

export const selectStyle = () => {

};

// export const addToCart = async (sku, qty) => {
//   const response = await fetch(`http://localhost:3000/overview/cart/${productID}/`);
//   const data = await response.json();

//   return data;
// };
