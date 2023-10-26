"use strict";

import { fetchProduct, deleteProduct } from "./productDetailModel.js";
import { drawProductDetail } from "./productDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if (id) {
  console.log(id); // or display it in the page
}

export const productDetailController = async (productDetail) => {
  const productObject = await fetchProduct(id);
  const product = drawProductDetail(productObject);
  productDetail.appendChild(product);
  handleDeleteProduct(productObject, productDetail);
};

const handleDeleteProduct = (productObject, productDetail) => {
  const token = localStorage.getItem("token");

  if (token) {
    const { userId } = decodeToken(token);
    if (userId === productObject.userId) {
      addDeleteProductButton(productObject, productDetail);
    }
  }
};

const addDeleteProductButton = (productObject, productDetail) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Product";
  deleteButton.addEventListener("click", async () => {
    if (confirm("You sure you want to delete this product?")) {
      deleteProduct(productObject.id);
      window.location = "../index.html";
    }
  });

  productDetail.appendChild(deleteButton);
};
