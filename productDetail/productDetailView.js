'use strict';

export const drawProductDetail = (product) =>
{
    const container = document.createElement('div');
    container.innerHTML = `
     <img src=""> </img>
     <div class="productDetails">
        <p class="productName">${product.name}</p>
        <p class="productDescription">${product.description.status}</p>
     </div>
    `;
}