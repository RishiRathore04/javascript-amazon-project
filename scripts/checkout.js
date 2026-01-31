import { loadCart } from '../data/cart.js';
import { loadProducts } from '../data/products.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js'; //use to run all the codes inside the file without importing anything
//import '../data/car.js';
//import '../data/backend-practice.js';

// new Promise( (resolve) => {
// 	loadProducts( () => {
// 		resolve('value1');   //we can can give resole a value 
// 	});

// }).then( (value) => {   // what ever we give to resolve it pass as parameter in then ..it lets us share a value between two steps of a promise
//   console.log(value);
//   return new Promise( (resolve) => {    //we want to load cart to finish then go to next step ..to solve this we create a new promise as it give resolve 
//     loadCart( () => {
//       resolve();
//     });
//   });

// }).then( () => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// })

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {

  console.log(values);

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});


//using call backs 

// loadProducts( ()=>{
// 	 loadCart( ()=>{
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });



//used to understand the flow what runs when

// new Promise( (resolve) => {
//   console.log('loading....');
// 	loadProducts( () => {
//     console.log('sone')
// 		resolve();
// 	});
// }).then( () => {
//   console.log('next ..');
// 	renderCheckoutHeader();
// 	renderOrderSummary();
// 	renderPaymentSummary();
// });

// console.log('outside');
