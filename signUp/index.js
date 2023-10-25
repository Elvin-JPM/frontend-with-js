"use strict";
import { signupController } from "./signupController.js";
const form = document.querySelector(".signup-form");
const btnSignup = document.querySelector(".btn-signup");

document.addEventListener("DOMContentLoaded", () => {
  btnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    signupController(form);
  });
});
