"use strict";

export const drawProducts = (product) => {
  const productContainer = document.createElement("div");
  productContainer.innerHTML = `
        <div class="card">
            <p class= "card-title">${product.name}</p>
            <img src="./images/productImages/${product.photo}.jpeg" class="card-image" alt="image of ${product.name}"></img>
            <p>${product.for_sale}</p>
            <p>Price: $${product.price}</p>
            <p>Tags: ${product.tags}</p>
        </div>
    `;
  return productContainer;
};
