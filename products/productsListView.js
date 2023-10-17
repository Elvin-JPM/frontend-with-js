"use strict";

export const drawProducts = (product) => {
  const productContainer = document.createElement("div");
  productContainer.className = 'card';
  productContainer.innerHTML = `
            <a href="productDetail.html?id=${product.id}" class="goToDetail">
            <p class= "card-title">${product.name}</p>
            <img src="./images/productImages/${product.photo}.jpeg" class="card-image" alt="image of ${product.name}"></img>
            <p>${product.for_sale}</p>
            <p>Price: $${product.price}</p>
            <p>Tags: ${product.tags}</p>
            </a>
    `;
  return productContainer;
};
