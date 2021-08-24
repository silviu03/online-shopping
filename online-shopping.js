$(function () {
    // sa elimini console.log inainte de livrare, e ok sa livrezi clean fara urme de debug
    console.log('ready');

    const productsWrapper = $('.produtcs-wrapper'); //atentie la typos
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
    console.log('sec');


    for (let i = 0; i < products['coats'].length; i++) {
        console.log('tr');
        let productsObj = products['coats'][i],
            productsHTML = getPropertyHTML(productsObj);
        productsWrapper.append(productsHTML);
        
    }

    const productImg = $('.product-img');
    const modals = $('#modals');

    productImg.on('click', function (event) {
        console.log('first')
        let dataId = event.target.dataset.id -1;
        console.log(dataId)
        // nu are mult sens sa creem overlay-ul de fiecare data cand dam click pe un produs, acesta poate sa existe in structura, dar ascuns, iar la click pe produs cu selectii doar sa populam dinamic continutul dorit (text, imagini, etc)
        let overlay = `<div class="overlay" data-id=${products['coats'][dataId].id}>
        <div class="close-overlay"><i class="fas fa-times"></i></div>
        <div class="overlay-product-wrapper">
            <div style="background-image: url('poze/${products['coats'][dataId].imgUrl}')"></div>
            <div>
                <h1>${products['coats'][dataId].name}</h1>
                <span>${products['coats'][dataId].currency} ${products['coats'][dataId].price}</span>
                <span>Your Size</span>
                <div class="product-size">
                    <div><span>S</span></div>
                    <div><span>M</span></div>
                    <div><span>L</span></div>
                    <div><span>XL</span></div> 
                </div>
                <div class="product-info">
                    <a href="#">Details</a>
                    <a href="#">Order</a>
                    <a href="#">Payment</a>
                </div>
                <div class="small-details">
                    <span>Composition</span>
                    <span>Country</span>
                </div>
                <div class="small-details">
                    <span>${products['coats'][dataId].composition}</span>
                    <span>${products['coats'][dataId].country}</span>
                </div>
                <span>Care</span>
                <p>${products['coats'][dataId].care}</p>
                <div class="btn"><button>Add to Cart</button></div>
                    
            </div>
        </div>
    </div>`

        modals.append(overlay);

        $('.close-overlay').on('click',  function() {
            $('.overlay').hide();
        })

    })

    // din nou, atentie la tot spatiul asta gol inutil aici








})