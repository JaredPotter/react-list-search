class Product {
    constructor(title = null, price = null, category = null) {
        this.title = title;
        this.price = price;
        this.category = category;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }
}

module.exports = Product;