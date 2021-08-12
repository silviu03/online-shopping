$(function () {
    console.log('ready');

    const productsWrapper = $('.produtcs-wrapper');
    console.log(productsWrapper);

    getPropertyHTML = function (productsObj) {
        console.log(productsObj);
        return `<div data-id=${productsObj.id}>
                    <div class="product-img" style="background-image: url('poze/${productsObj.imgUrl}')"></div>
                    <div>
                        <span>${productsObj.name}</span>
                        <span>${productsObj.currency} ${productsObj.price}</span>
                    </div>
                </div>`

    }
    console.log('sec');


    for (let i = 0; i < products['coats'].length; i++) {
        console.log('tr');
        let productsObj = products['coats'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
        
    }












})