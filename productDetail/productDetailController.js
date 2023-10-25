"use strict";

import { fetchProduct } from "./productDetailModel.js";
import { drawProductDetail } from "./productDetailView.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
  console.log(id); // or display it in the page
}

export const productDetailController = async (productDetail) => {
  const productObject = await fetchProduct(id);
  const product = drawProductDetail(productObject);
  productDetail.appendChild(product);
};
