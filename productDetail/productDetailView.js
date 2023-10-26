"use strict";

export const drawProductDetail = (product) => {
  const container = document.createElement("div");
  container.className = "detail";
  container.innerHTML = `
     <img src="../images/productImages/${
       product.photo === undefined ? "no-pictures.png" : product.photo + ".jpeg"
     } " class="detail-image"> </img>
     <div class="productDetails">
        <p class="productName">${product.name}</p>
        <p>${product.description.status || ""}</p>
        <p>${product.description.Details || ""}</p>
        <p>${product.description.Specifications || ""}</p>
     </div>
    `;
  return container;
};
