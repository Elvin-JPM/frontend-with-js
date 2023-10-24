"use strict";

// export const getSelectedElement = (elementContent) => {
//   const productDetail = document.getElementById("productDetail");
//   console.log(productDetail);
//   console.log(elementContent);
//   const productDetailContainer = document.createElement("div");
//   productDetailContainer.textContent = "this should be here";
//   productDetail.appendChild(productDetailContainer);
// };


export const fetchProduct = async (id) => {
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  let selectedProduct = {};
  try {
    console.log(url);
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
    selectedProduct = product;
  } catch (error) {
    console.log("Something went wrong.");
  }

  return selectedProduct;
};
