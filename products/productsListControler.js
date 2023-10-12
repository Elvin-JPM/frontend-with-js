"use strict";

import { fetchProducts } from "./productsListModel.js";
import { drawProducts } from "./productsListView.js";

export const getProducts = async (productsNode) => {
  const products = await fetchProducts();

  if (Array.isArray(products) && products.length === 0) {
    console.log("The array is empty");
  } else {
    products.forEach((product) => {
      console.log(product);
        const productCard = drawProducts(product);
        productsNode.appendChild(productCard);
    });
  }
};
