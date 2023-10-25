"use strict";

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
      throw new Error("Incorrect username or password");
    } else {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
    }

    console.log("Log in successful!");
  } catch (error) {
    console.log("Error:", error.message);
  }
  return response;
};
