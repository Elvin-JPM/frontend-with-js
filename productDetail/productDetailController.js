"use strict";

import { fetchProduct, deleteProduct } from "./productDetailModel.js";
import { drawProductDetail } from "./productDetailView.js";
import { decodeToken } from "../utils/decodeToken.js";
import { drawErrorFetching } from "../products/productsListView.js";
import { drawForEmptyList } from "../products/productsListView.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

export const productDetailController = async (productDetail) => {
  try {
    const productObject = await fetchProduct(id);

    if (productObject == {}) {
      const message = "Empty product";
      const emptyProduct = drawForEmptyList(message);
      productDetail.appendChild(emptyProduct);
    } else {
      const product = drawProductDetail(productObject);
      productDetail.appendChild(product);
      handleDeleteProduct(productObject, productDetail);
    }
  } catch (error) {
    const errorFetching = drawErrorFetching(error);
    productDetail.appendChild(errorFetching);
  }
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
