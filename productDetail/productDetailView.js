"use strict";

export const drawProductDetail = (product) => {
  const container = document.createElement("div");
  container.className = "detail";
  container.innerHTML = `
     <img src="../images/productImages/${
       product.photo === undefined ? "no-pictures.png" : product.photo + ".jpeg"
     } " class="detail-image"> </img>
     <div class="productDetails">
        <p class="productName">Name: ${product.name}</p>
        <p>Type: ${product.for_sale === 1 ? "For Sale" : "Looking to buy"}</p>
        <p>Price: $${product.price}</p>
        <p>Status: ${!product.description ? "" : product.description.status}</p>
        <p>Details: ${
          !product.description ? "" : product.description.details
        }</p>
        <p>Specs: ${
          !product.description ? "" : product.description.specifications
        }</p>
     </div>
    `;
  return container;
};
