import { addToCart , cart, loadFromStorage } from '../../data/cart.js';

describe('tests suite: addToCart', () => {
    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake( () => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]); 
        });
        spyOn(document, 'querySelector').and.returnValue({ value: '1' });
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
        
    });

    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake( () => {
            return JSON.stringify([]); 
        });
        spyOn(document, 'querySelector').and.returnValue({ value: '1' });
        loadFromStorage();
        
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});

/* *we can't compare using expect here because addToCart dosent return a value --> instead we will call add to cart to modify the cart
* expect gives us an object
* our initial cart depends upon localStorage, ,, if our cart is empty test pass and if not it will fail --> this is called FLAKY TEST(test that somestimes passes and sometime fails)

* we will create a fake version of localStorage.getItem so that we can make it whatever we want --> like return an empty array
* spyOn will replace localstorage.getItem with the fake version  ==> we have mocked the getItem method
* we will mock localstorage,setItem (we dont want test to modify localstorage)
* we can't check whats inside localstorage as we have faked it so we will check how many times it is called
* toHaveBeenCalled works only when we use spy on 
* mocks only works for one test*/
