class Cart {
  cartItem;    //in class we dont need to write undefined its already underestand 
  localStorageKey;

  constructor (localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey));   // using parametere to avoid getting the same data from same place

    if(!this.cartItem){
      this.cartItem = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
      }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
      }];
    }
  }
  
  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));  //using cart-oop so that this does not affect the original cart
  }
  
  addToCart(productId) {
    let matchingItem;
    this.cartItem.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = Number(quantitySelector.value);

    if(matchingItem) {
      matchingItem.quantity+=quantity;
    } else{
      this.cartItem.push({  
        productId,
        quantity,
        deliveryOptionId: '1'
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId){
    if (!productId) return; // 🔒 safety

    const newCart = [];
    this.cartItem.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    this.cartItem = newCart;

    this.saveToStorage();
  }
  
  updateDeliveryOptions(productId, deliveryOptionId){
    let matchingItem;
    this.cartItem.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);
//use pascal case for things that generate objests