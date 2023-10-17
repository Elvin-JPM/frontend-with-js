"use strict";

// export const getSelectedElement = (elementContent) => {
//   const productDetail = document.getElementById("productDetail");
//   console.log(productDetail);
//   console.log(elementContent);
//   const productDetailContainer = document.createElement("div");
//   productDetailContainer.textContent = "this should be here";
//   productDetail.appendChild(productDetailContainer);
// };

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
  console.log(id); // or display it in the page
}

const fetchProduct = async () => {
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  try {
    console.log(url);
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.log("Something went wrong.");
  }
};

fetchProduct();
