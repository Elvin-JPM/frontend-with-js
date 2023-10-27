"use strict";

export const fetchProducts = async () => {
  const url = "http://127.0.0.1:8000/api/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Couldn't get products, try again later.");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
};
