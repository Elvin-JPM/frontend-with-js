"use strict";

export const registerUser = async (form) => {
  const url = "http://127.0.0.1:8000/auth/register";
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  try {
    if (password === confirmPassword) {
      const data = {
        username: email,
        password: password,
      };

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = createMessageData(
          "Error",
          "Username or password not valid"
        );
        throw new Error(JSON.stringify(errorData));
      }
      return createMessageData("Success", "User successfully created!");
    }
  } catch (error) {
    throw error;
  }
};

export const createMessageData = (type, message) => {
  return {
    type: type,
    message: message,
  };
};
