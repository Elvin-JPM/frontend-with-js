"use strict";

import { fetchProducts } from "./productsListModel.js";
import { drawProducts } from "./productsListView.js";
import { drawLoginSpace } from "./productsListView.js";
import { drawErrorFetching } from "./productsListView.js";
import { drawForEmptyList } from "./productsListView.js";

export const getProducts = async (productsNode) => {
  try {
    const products = await fetchProducts();

    if (Array.isArray(products) && products.length === 0) {
      // Handling when there are no products created yet
      const emptyProductList = drawForEmptyList();
      productsNode.appendChild(emptyProductList);
      console.log("The array is empty");
    } else {
      products.forEach((product) => {
        const productType =
          product.for_sale === 1 ? "For Sale" : "Looking to buy";
        product.for_sale = productType;
        const productCard = drawProducts(product);
        productsNode.appendChild(productCard);
      });
    }
  } catch (error) {
    const errorFetching = drawErrorFetching(error);
    productsNode.appendChild(errorFetching);
  }
};

export const getLoginContent = (loginSpace) => {
  drawLoginSpace(loginSpace);
};
