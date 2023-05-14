class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {}
}

class Delivery{
    constructor(
        public date: Date
    ) {}
}

class DeliveryHome extends Delivery {
    constructor(date: Date, public address: string) {
        super(date);
    }
}

class DeliveryShop extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

type DeliveryOptions = DeliveryHome | DeliveryShop;

class Cart {
    private products: Product[] = [];
    private delivery: DeliveryOptions;

    public addProduct(product: Product){
        this.products.push(product);
    };
    public delProduct(productId: number){
        this.products = this.products.filter((p: Product) => p.id !== productId);
    };
    public getSum(){
        return this.products
            .map((p: Product) => p.price)
            .reduce((sum: number, price: number) => sum + price);
    };
    public setDelivery(delivery: DeliveryOptions){
        this.delivery = delivery;
    };
    public checkOut(){
        if(this.products.length == 0)
            throw new Error('There is no one product in cart');
        if(!this.delivery)
            throw new Error('There is no set delivery');
        return {success: true}
    };
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Cookie', 10));
cart.addProduct(new Product(2, 'Cake', 30));
cart.addProduct(new Product(3, 'Chocolate', 20));
cart.delProduct(1);
cart.setDelivery(new DeliveryHome(new Date(), 'Abakan, Lenina st. 4-39'));
console.log(cart.getSum());
console.log(cart.checkOut());
// console.log(cart);
