import {cart, removeFromCart, updateDeliveryOptions} from '../../data/cart.js';
import {products, getProduct } from '../../data/products.js';
import  formatCurrency  from '../utils/money.js';
import { calculateDeliveryDate, deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';

export function renderOrderSummary() {
  
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);
    
    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML += `
      <div class="cart-item-container 
      js-cart-item-container
      js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
          src="${matchingProduct.image}">

          <div class="cart-item-details">
          <div class="product-name">
              ${matchingProduct.name}
          </div>
          <div class="product-price">
              ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity
                    js-product-quantity-${matchingProduct.id}">
              <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
              Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-link
                js-delete-link-${matchingProduct.id}"
                data-product-id="${matchingProduct.id}">
              Delete
              </span>
          </div>
          </div>

          <div class="delivery-options">
          <div class="delivery-options-title">
              Choose a delivery option:
          </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let HTML = '';

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = calculateDeliveryDate(deliveryOption);
      const priceString = deliveryOption.priceCents
      === 0
        ? 'FREE'
        : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId; 

      HTML += `
        <div class="delivery-option js-delivery-option" 
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked': ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping;
            </div>
          </div>
        </div>
      `    
    });

    return HTML;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        renderCheckoutHeader();
        renderOrderSummary(); 
        renderPaymentSummary();
      });
    });	

    //radio button --> if they havesame name we can select only one of them

    document.querySelectorAll('.js-delivery-option')
      .forEach((element) => {
        element.addEventListener('click', () => {
          const {productId, deliveryOptionId} = element.dataset;
          updateDeliveryOptions(productId, deliveryOptionId);
          renderOrderSummary();
          renderPaymentSummary();
        });
      });
}      

