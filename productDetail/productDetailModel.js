"use strict";
import { sparrestApi } from "../utils/sparrestApi.js";

export const fetchProduct = async (id) => {
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  let selectedProduct = {};
  try {
    const response = await fetch(url);
    const product = await response.json();
    selectedProduct = product;
    if (!response.ok) {
      throw new Error("Product does not exist!");
    }
  } catch (error) {
    console.log(error.message);
  }

  return selectedProduct;
};

export const deleteProduct = async (productId) => {
  const endpoint = `api/products/${productId}`;
  await sparrestApi().delete(endpoint);
};
