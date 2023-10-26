"use strict";

import { createProductController } from "./createProductController.js";

const form = document.querySelector(".create-product-form");
const buttonCreate = document.querySelector(".btnCreate-product");

buttonCreate.addEventListener("click", (e) => {
  e.preventDefault();
  createProductController(form);
});
