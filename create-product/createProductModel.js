"use strict";

export const createProduct = async (data) => {
  const url = "http://127.0.0.1:8000/api/products";
  const token = localStorage.getItem("token");
  const body = JSON.stringify(data);

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
