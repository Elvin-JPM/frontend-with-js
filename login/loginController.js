"use strict";

import { loginUser } from "./loginModel.js";
import { notification } from "../utils/notification.js";

const notificationSpace = document.querySelector("body");

export const loginController = async (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const login = await loginUser(email, password);
    const loginNotificacion = notification(login);
    notificationSpace.appendChild(loginNotificacion);
    setTimeout(() => {
      window.location = "../index.html";
    }, 2000);
  } catch (error) {
    const loginErrorNotification = notification(JSON.parse(error.message));
    notificationSpace.appendChild(loginErrorNotification);
    setTimeout(() => {
      notificationSpace.removeChild(loginErrorNotification);
    }, 3000);
  }
};
