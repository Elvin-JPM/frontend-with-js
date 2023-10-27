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
        <p>${product.for_sale === 1 ? "For Sale" : "Looking to buy"}</p>
        <p>Price: $${product.price}</p>
        <p>Status: ${
          !product.description ? "hey there" : product.description.status
        }</p>
        <p>Details: ${
          !product.description ? "hey there" : product.description.Details
        }</p>
        <p>Specs: ${
          !product.description
            ? "hey there"
            : product.description.Specifications
        }</p>
     </div>
    `;
  return container;
};
