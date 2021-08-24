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
        $(".products-wrapper").find(`[data-id=${productsObj.id}]`).addClass('coats-item')
    }
    for (let i = 0; i < products['dresses'].length; i++) {
        let productsObj = products['dresses'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
        $(".products-wrapper").find(`[data-id=${productsObj.id}]`).addClass('hidden dresses-item')

    }
    for (let i = 0; i < products['jersey'].length; i++) {
        let productsObj = products['jersey'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
        $(".products-wrapper").find(`[data-id=${productsObj.id}]`).addClass('hidden jersey-item')
    }
    for (let i = 0; i < products['pants'].length; i++) {
        let productsObj = products['pants'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
        $(".products-wrapper").find(`[data-id=${productsObj.id}]`).addClass('hidden pants-item')
    }

    const coats = $('.coats'),
            dresses = $('.dresses'),
            jerseys = $('.jerseys'),
            pants = $('.pants'),
            item = $('.item');

    item.click(function(event) {
        item.removeClass('active')
        $(event.target).addClass('active')
    })
    coats.click(function() {
        if($('.coats-item').hasClass('hidden')) {
            $('.coats-item').removeClass('hidden')
            $('.dresses-item').addClass('hidden')
            $('.jersey-item').addClass('hidden')
            $('.pants-item').addClass('hidden')
            
        }
    }) 
    dresses.click(function() {
        if($('.dresses-item').hasClass('hidden')) {
            $('.dresses-item').removeClass('hidden')
            $('.coats-item').addClass('hidden')
            $('.jersey-item').addClass('hidden')
            $('.pants-item').addClass('hidden')
            
        }
    })  
    jerseys.click(function() {
        if($('.jersey-item').hasClass('hidden')) {
            $('.jersey-item').removeClass('hidden')
            $('.dresses-item').addClass('hidden')
            $('.coats-item').addClass('hidden')
            $('.pants-item').addClass('hidden')
        }
    })  
    pants.click(function() {
        if($('.pants-item').hasClass('hidden')) {
            $('.pants-item').removeClass('hidden')
            $('.dresses-item').addClass('hidden')
            $('.jersey-item').addClass('hidden')
            $('.coats-item').addClass('hidden')
        }
    })     

    const productImg = $('.product-img');

    productImg.on('click', function (event) {
        let dataId = event.target.dataset.id - 1;
        const overlay = $('.overlay')
        overlay.removeClass('hidden')

        let productBgImg = $('.product-bg-img')
        productBgImg.css("background-image", `url('poze/${products['coats'][dataId].imgUrl}`)
        let productCoatName = $('.product-name')
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
    productImg.on('click', function (event) {
        let dataId = event.target.dataset.id - 1;
        const overlay = $('.overlay')
        overlay.removeClass('hidden')

        let productBgImg = $('.product-bg-img')
        productBgImg.css("background-image", `url('poze/${products['dresses'][dataId].imgUrl}`)
        let productCoatName = $('.product-name')
        productCoatName.text(`${products['dresses'][dataId].name}`)
        let productPrice = $('.product-currency-price')
        productPrice.text(`${products['dresses'][dataId].currency} ${products['dresses'][dataId].price}`)
        let productCompozition = $('.product-composition')
        productCompozition.text(`${products['dresses'][dataId].composition}`)
        let productCountry = $('.product-country')
        productCountry.text(`${products['dresses'][dataId].country}`)
        let productCare = $('.product-care')
        productCare.text(`${products['dresses'][dataId].care}`)

        $('.close-overlay').on('click', function () {
            $('.overlay').addClass('hidden');
        })
    })
    productImg.on('click', function (event) {
        let dataId = event.target.dataset.id - 1;
        const overlay = $('.overlay')
        overlay.removeClass('hidden')

        let productBgImg = $('.product-bg-img')
        productBgImg.css("background-image", `url('poze/${products['jersey'][dataId].imgUrl}`)
        let productCoatName = $('.product-name')
        productCoatName.text(`${products['jersey'][dataId].name}`)
        let productPrice = $('.product-currency-price')
        productPrice.text(`${products['jersey'][dataId].currency} ${products['jersey'][dataId].price}`)
        let productCompozition = $('.product-composition')
        productCompozition.text(`${products['jersey'][dataId].composition}`)
        let productCountry = $('.product-country')
        productCountry.text(`${products['jersey'][dataId].country}`)
        let productCare = $('.product-care')
        productCare.text(`${products['jersey'][dataId].care}`)

        $('.close-overlay').on('click', function () {
            $('.overlay').addClass('hidden');
        })
    })
    productImg.on('click', function (event) {
        let dataId = event.target.dataset.id - 1;
        const overlay = $('.overlay')
        overlay.removeClass('hidden')

        let productBgImg = $('.product-bg-img')
        productBgImg.css("background-image", `url('poze/${products['pants'][dataId].imgUrl}`)
        let productCoatName = $('.product-name')
        productCoatName.text(`${products['pants'][dataId].name}`)
        let productPrice = $('.product-currency-price')
        productPrice.text(`${products['pants'][dataId].currency} ${products['pants'][dataId].price}`)
        let productCompozition = $('.product-composition')
        productCompozition.text(`${products['pants'][dataId].composition}`)
        let productCountry = $('.product-country')
        productCountry.text(`${products['pants'][dataId].country}`)
        let productCare = $('.product-care')
        productCare.text(`${products['pants'][dataId].care}`)

        $('.close-overlay').on('click', function () {
            $('.overlay').addClass('hidden');
        })
    })

})