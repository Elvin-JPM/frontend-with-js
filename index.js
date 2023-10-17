"use strict";
import { getProducts } from "./products/productsListControler.js";

// Adjusting The size of the navigation bar according to the option selected
const selectList = document.querySelector(".categories-list");

const productsNode = document.getElementById("productList");

selectList.addEventListener("change", () => {
  const selectedOption =
    selectList.options[selectList.selectedIndex].textContent;
  let selectWidth = selectList.offsetWidth;
  // Create a temporary canvas
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // Set the font style for measurement
  const fontSize = window.getComputedStyle(
    selectList.options[selectList.selectedIndex]
  ).fontSize;

  const fontFamily = window.getComputedStyle(
    selectList.options[selectList.selectedIndex]
  ).font;

  context.font = fontFamily;

  const textWidth = context.measureText(selectedOption).width;

  selectList.style.width = `${textWidth + 24}px`;
});

getProducts(productsNode);
