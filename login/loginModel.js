"use strict";
import { createMessageData } from "../signUp/signupModel.js";

export const loginUser = async (email, password) => {
  const url = "http://127.0.0.1:8000/auth/login";
  const body = {
    username: email,
    password: password,
  };
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorData = createMessageData(
        "Error",
        "Incorrect user or password"
      );
      throw new Error(JSON.stringify(errorData));
    }
    const data = await response.json();
    localStorage.setItem("token", data.accessToken);
    return createMessageData("Success", "Now you're logged in");
  } catch (error) {
    throw error;
  }
};
