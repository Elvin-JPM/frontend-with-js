"use strict";
import { createMessageData } from "../signUp/signupModel.js";

export const createProduct = async (data) => {
  const url = "http://127.0.0.1:8000/api/products";
  const token = localStorage.getItem("token");
  const body = JSON.stringify(data);

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = createMessageData(
        "Error",
        `There was a problem while creating product.<br>
        Fields marked in red must be filled.
        `
      );
      throw new Error(JSON.stringify(errorData));
    }
    let productsLength = localStorage.getItem("productsLength");
    productsLength = Number(productsLength) + 1;
    localStorage.setItem("productsLength", productsLength);
    return createMessageData("Success", "Product created!");
  } catch (error) {
    throw error;
  }
};
