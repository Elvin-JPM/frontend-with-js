"use strict";

export const fetchProducts = async () => {
  const url = "http://127.0.0.1:8000/api/products";
  try {
    const response = await fetch(url);
    const products = await response.json();
    if (!response.ok) {
      throw new Error("Couldn't get products, try again later.");
    }
    return products;
  } catch (error) {
    console.log("Error:", error.message);
  }
};
