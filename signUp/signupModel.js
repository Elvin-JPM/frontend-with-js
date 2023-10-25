"use strict";

export const registerUser = async (form) => {
  const url = "http://127.0.0.1:8000/api/auth/register";
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  try {
    if (password === confirmPassword) {
      const data = {
        user: email,
        password: password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("User was not created.");
      }
      console.log("user successfully created!");
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
};
