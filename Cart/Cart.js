"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class DeliveryHome extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class DeliveryShop extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    ;
    delProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    ;
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((sum, price) => sum + price);
    }
    ;
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    ;
    getDelivery() {
        return this.delivery;
    }
    ;
    checkOut() {
        if (this.products.length == 0)
            throw new Error('There is no one product in cart');
        if (!this.delivery)
            throw new Error('There is no set delivery');
        return { success: true };
    }
    ;
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Cookie', 10));
cart.addProduct(new Product(2, 'Cake', 30));
cart.addProduct(new Product(3, 'Chocolate', 20));
cart.delProduct(1);
cart.setDelivery(new DeliveryHome(new Date(), 'Abakan, Lenina st. 4-39'));
console.log(cart.getSum());
console.log(cart.checkOut());
console.log('cart.getDelivery(): ', cart.getDelivery());
// console.log(cart);
