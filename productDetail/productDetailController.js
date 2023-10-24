"use strict";

import { fetchProduct } from "./productDetailModel.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
  console.log(id); // or display it in the page
}

const createProductDetail = async () => {
  
  try {
    const product = await fetchProduct(id);
    console.log(product);
  } catch (error) {
      console.log("Failed retrieving product detail");
  }
};

createProductDetail();
