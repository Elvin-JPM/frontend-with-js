"use strict";
import { sparrestApi } from "../utils/sparrestApi.js";

export const fetchProduct = async (id) => {
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Product does not exist.");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  const endpoint = `api/products/${productId}`;
  await sparrestApi().delete(endpoint);
};
