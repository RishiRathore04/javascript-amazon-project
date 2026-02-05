export const orders =  JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    orders.unshift(order);            //unshift is used to store value in front of array
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}