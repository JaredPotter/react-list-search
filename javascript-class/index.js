const Product = require('./Product');

const productA = new Product('Eggs', 1.08, 'Dairy');

console.log('productA: ' + productA.price);
productA.updatePrice(1.99);
console.log('productA: ' + productA.price);