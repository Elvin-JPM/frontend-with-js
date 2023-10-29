"use strict";
import { createProduct } from "./createProductModel.js";
import { fetchProducts } from "../products/productsListModel.js";
import { notification } from "../utils/notification.js";

const notificationSpace = document.querySelector("body");
const input = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

export const createProductController = async (form) => {
  const formData = new FormData(form);
  const productsLength = localStorage.getItem("productsLength");
  const data = {
    id: Number(productsLength) + 1,
    name: formData.get("name"),
    for_sale:
      formData.get("product-type") === "For Sale"
        ? 1
        : formData.get("product-type") === "Looking to buy" && 0,
    price: formData.get("price"),
    description: {
      status: formData.get("status"),
      specifications: formData.get("specifications"),
      details: formData.get("details"),
    },
  };

  try {
    const productCreation = await createProduct(data);
    form.reset();
    const productCreationNotification = notification(productCreation);
    notificationSpace.appendChild(productCreationNotification);
    setTimeout(() => {
      notificationSpace.removeChild(productCreationNotification);
    }, 3000);
  } catch (error) {
    input.forEach((element) => {
      highlightRequiredFields(element);
    });

    textarea.forEach((element) => {
      highlightRequiredFields(element);
    });
    const productCreationError = notification(JSON.parse(error.message));
    notificationSpace.appendChild(productCreationError);
    setTimeout(() => {
      notificationSpace.removeChild(productCreationError);
    }, 3000);
  }
};

const highlightRequiredFields = (element) => {
  element.value === "" && element.classList.add("required");
  element.value != "" && element.classList.remove("required");
};
