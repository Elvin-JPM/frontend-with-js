"use strict";

export const drawProducts = (product) => {
  const productContainer = document.createElement("div");
  productContainer.className = "card";
  productContainer.innerHTML = `
            <a href="../productDetail/productDetail.html?id=${
              product.id
            }" class="goToDetail">
            <p class= "card-title">${product.name}</p>
            <img src="./images/productImages/${
              product.photo === undefined
                ? "no-pictures.png"
                : product.photo + ".jpeg"
            }" class="card-image" alt="image of ${product.name}"></img>
            <p>${product.for_sale}</p>
            <p>Price: $${product.price}</p>
            <p>Tags: ${product.tags || ""}</p>
            </a>
    `;
  return productContainer;
};

export const drawForEmptyList = (message) => {
  const emptyListContainer = document.createElement("div");
  emptyListContainer.className = "empty-list";
  emptyListContainer.innerHTML = `
    <img src="../images/uiImages/sad-face-in-rounded-square.png"></img>
    <h3>${message}</h3>
  `;
  return emptyListContainer;
};

export const drawErrorFetching = (error) => {
  const errorFetchingList = document.createElement("div");
  errorFetchingList.className = "error-fetching";
  errorFetchingList.innerHTML = `
    <img src="../images/uiImages/error-fetching.png"></img>
    <h3>${error.message}</h3>
  `;
  return errorFetchingList;
};

export const drawLoginSpace = (loginSpace) => {
  const token = localStorage.getItem("token");
  if (token) {
    const btnCreateProduct =
      '<a href="../create-product/createProduct.html" class="btn-create-product">Create Product</a>';
    loginSpace.insertAdjacentHTML("beforebegin", btnCreateProduct);
    loginSpace.innerHTML = `
          <a class="logout" href="/">
            <img
              class="sign-in-logo"
              src="../images/uiImages/log-out.png"
              alt="sign-in logo"
            />
            <p class="sign-in-text">Log Out</p>
          </a>
    `;
    const logout = document.querySelector(".logout");
    logout.addEventListener("click", () => {
      localStorage.removeItem("token");
    });
  }
};
