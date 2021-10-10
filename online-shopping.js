$(function () {
    const productsWrapper = $('.products-wrapper'),
          item = $('.item'),
          overlay = $('.overlay'),
          productBgImg = $('.product-bg-img'),
          productCoatName = $('.product-name'),
          productPrice = $('.product-currency-price'),
          productCompozition = $('.product-composition'),
          productCountry = $('.product-country'),
          productCare = $('.product-care');

    getPropertyHTML = function (productsObj, mainCategory) {
        return `<div class="product-wrapper" data-self-category=${mainCategory} data-id=${productsObj.id}>
                    <div class="product-img" data-id=${productsObj.id} style="background-image: url('poze/${productsObj.imgUrl}')"></div>
                    <div>
                        <span>${productsObj.name}</span>
                        <span>${productsObj.currency} ${productsObj.price}</span>
                    </div>
                </div>`
    };

    setProductsWrapperContent = function(mainCategory) {
        console.log(products[mainCategory])
        for (let i = 0; i < products[mainCategory].length; i++) {
            let productsObj = products[mainCategory][i],
                // avem nevoie sa pasam si mainCategory aici dupa la selectia informatiei pentru fiecare produs in parte
                productsHTML = getPropertyHTML(productsObj, mainCategory);
            productsWrapper.append(productsHTML);
            // concatenation is in order
            $(".products-wrapper").find(`[data-id=${productsObj.id}]`).addClass(mainCategory + '-item')
        }
    };

    // initial content to be displayed when the user first enters the portal
    setProductsWrapperContent('coats');

    item.click(function(event) {
        item.removeClass('active')
        $(event.target).addClass('active');
        // necesar sa resetam inainte sa adaugam alt continut, altfel append-ul va pastra si vechiul continut
        productsWrapper.html('');
        setProductsWrapperContent($(this).data('main-category'));
    }); 

    // pentru continut adaugat dinamic ai nevoie de delegate, si nu as adauga click-ul pe product-img, ci pe product-wrapper
    productsWrapper.delegate('.product-wrapper', 'click', function(e) {
        let dataId = $(this).data('id'),
            selfCategory = $(this).data('self-category'),
            categoryArr = products[selfCategory],
            productObj = {};

        console.log('dataId: ', dataId)
        console.log('selfCategory: ', selfCategory)
        console.log('categoryArr: ', categoryArr)

        // trebuie sa ne extragem obiectul care descrie produsul pe care suntem bazat pe id
        for(let i=0; i<categoryArr.length; i++) {
            if(categoryArr[i]['id'] === dataId) {
                productObj = categoryArr[i];
            } else {
                continue;
            }
        };

        console.log('productObj: ', productObj)

        productBgImg.css("background-image", `url('poze/${productObj.imgUrl}`)
        productCoatName.text(`${productObj.name}`)
        productPrice.text(`${productObj.currency} ${productObj.price}`)
        productCompozition.text(`${productObj.composition}`)
        productCountry.text(`${productObj.country}`)
        productCare.text(`${productObj.care}`)
        
        overlay.removeClass('hidden');
    });

    $('.close-overlay').on('click', function () {
        $('.overlay').addClass('hidden');
    });
});