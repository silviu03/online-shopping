$(function () {

    const productsWrapper = $('.products-wrapper');
    console.log(productsWrapper);

    getPropertyHTML = function (productsObj) {
        console.log(productsObj);
        return `<div class="product-wrapper" data-id=${productsObj.id}>
                    <div class="product-img" data-id=${productsObj.id} style="background-image: url('poze/${productsObj.imgUrl}')"></div>
                    <div>
                        <span>${productsObj.name}</span>
                        <span>${productsObj.currency} ${productsObj.price}</span>
                    </div>
                </div>`
    }

    for (let i = 0; i < products['coats'].length; i++) {
        let productsObj = products['coats'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
    }

    const productImg = $('.product-img');

    productImg.on('click', function (event) {
        let dataId = event.target.dataset.id - 1;
        const overlay = $('.overlay')
        overlay.removeClass('hidden')

        let productBgImg = $('.product-bg-img')
        productBgImg.css("background-image", `url('poze/${products['coats'][dataId].imgUrl}`)
        let productCoatName = $('.product-coat-name')
        productCoatName.text(`${products['coats'][dataId].name}`)
        let productPrice = $('.product-currency-price')
        productPrice.text(`${products['coats'][dataId].currency} ${products['coats'][dataId].price}`)
        let productCompozition = $('.product-composition')
        productCompozition.text(`${products['coats'][dataId].composition}`)
        let productCountry = $('.product-country')
        productCountry.text(`${products['coats'][dataId].country}`)
        let productCare = $('.product-care')
        productCare.text(`${products['coats'][dataId].care}`)

        $('.close-overlay').on('click', function () {
            $('.overlay').addClass('hidden');
        })
    })

})