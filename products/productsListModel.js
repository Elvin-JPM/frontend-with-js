"use strict";

export const fetchProducts = async () => {
  const url = "http://127.0.0.1:8000/api/products";
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log("An error has occurred 😥");
  }
};
