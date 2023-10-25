"use strict";

import { loginUser } from "./loginModel.js";

export const loginController = async (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const loginResponse = await loginUser(email, password);
  console.log("loginResponse:", loginResponse);
  if (loginResponse.ok) window.location = "../index.html";
};
