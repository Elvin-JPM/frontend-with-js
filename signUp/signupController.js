"use strict";
import { registerUser } from "./signupModel.js";
import { notification } from "../utils/notification.js";
import { createMessageData } from "./signupModel.js";

const notificationSpace = document.querySelector("body");

export const signupController = async (form) => {
  try {
    const userCreation = await registerUser(form);
    // const userCreation = createMessageData("Success", "User created");
    const notificationSuccess = notification(userCreation);
    notificationSpace.appendChild(notificationSuccess);
    setTimeout(() => {
      window.location = "../login/login.html";
    }, 3000);
  } catch (error) {
    const notificationError = notification(JSON.parse(error.message));
    notificationSpace.appendChild(notificationError);
    setTimeout(() => {
      notificationSpace.removeChild(notificationError);
    }, 3000);
  }
};
