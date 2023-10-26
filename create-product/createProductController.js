"use strict";
import { createProduct } from "./createProductModel.js";
import { fetchProducts } from "../products/productsListModel.js";

export const createProductController = async (form) => {
  const formData = new FormData(form);
  const products = await fetchProducts();
  const data = {
    id: products.length + 1,
    name: formData.get("name"),
    for_sale: formData.get("product-type") === "Yes" ? 1 : 0,
    price: formData.get("price"),
    description: {
      status: formData.get("status"),
      specifications: formData.get("specifications"),
      details: formData.get("details"),
    },
  };

  createProduct(data);
};
