const productListElement = document.querySelector('.product-list');

axios.get('http://localhost:3001/api/products')
    .then(function (response) {
        const products = response.data;
        const productElementList = document.createElement('div');
        productElementList.classList.add('product-list');

        for(let i = 0; i < products.length; i++) {
            const p = products[i];
            const nameElement = document.createElement('div');
            nameElement.textContent = p.name;
            const priceElement = document.createElement('div');
            priceElement.textContent = `\$${p.price}`;
            const productElement = document.createElement('div');
            productElement.append(nameElement);
            productElement.append(priceElement);
            productElement.classList.add('item');

            productElementList.append(productElement);
        }

        productListElement.replaceWith(productElementList);
    })
    .catch(function (error) {
        // handle error
        debugger;
        console.log(error);
    });