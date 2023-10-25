"use strict";

import { loginController } from "./loginController.js";

const btnLogin = document.querySelector(".btn-sign-in");
const loginForm = document.querySelector(".login-form");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginController(loginForm);
});
