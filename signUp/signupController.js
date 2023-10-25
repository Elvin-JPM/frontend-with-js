"use strict";
import { registerUser } from "./signupModel.js";
export const signupController = async (form) => {
  registerUser(form);
  window.location = "../login/login.html";
};
