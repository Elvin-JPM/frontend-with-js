"use strict";

import { createProductController } from "./createProductController.js";

const form = document.querySelector(".create-product-form");
const buttonCreate = document.querySelector(".create-product-form");
const token = localStorage.getItem("token");
if (!token) {
  window.location = "../";
}

buttonCreate.addEventListener("submit", (e) => {
  e.preventDefault();
  createProductController(form);
});
