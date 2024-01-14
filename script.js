$(document).ready(function () {

    document.getElementById('choose-pizza').onclick = function () {
        document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"})
    }

    let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');
    let productInput = document.getElementById('product-input');
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].onclick = function (e) {
            productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
        }
    }

    // document.getElementById('create-order').onclick = function () {
    //     let addressInput = document.getElementById('address-input');
    //     let phoneInput = document.getElementById('phone-input');
    //     if (!productInput.value) {
    //         alert('Заполните пиццу!');
    //         return;
    //     }
    //     if (!addressInput.value) {
    //         alert('Заполните адрес!');
    //         return;
    //     }
    //     if (!phoneInput.value) {
    //         alert('Заполните телефон!');
    //         return;
    //     }
    //     // productInput.value = '';
    //     // addressInput.value = '';
    //     // phoneInput.value = '';
    //     // alert('Спасибо за заказ!');
    //     $.ajax({
    //         method: 'GET',
    //         url: 'https://testologia.site/test-cookie?name=' + productInput.value,
    //         xhrFields: {
    //             withCredentials: true //Это разрешение использовать куки xhrFields: {withCredentials: true}
    //         }
    //     });
    // }

    if (!localStorage.getItem('cookieAccepted')) {
        $('.cookie').show();
    }

    $('.cookie-accept').click(function () {
        $('.cookie').hide();
        // localStorage.clear();
        localStorage.setItem('cookieAccepted', '1');
    });

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        // console.log(value);
        const parts = value.split(`; ${name}=`);
        // console.log(parts);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    let cookie = {
        set: (name, value, options) => {
            if (!name || !value) {
                return null;
            }
            let string = name + '=' + value;
            if (options) {
                string += ';' + options;
            }
            document.cookie = string;
            return cookie;
        },

        get: (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            }
        },

        delete: (name) => {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:001 GMT';
        }
    }

    $('.btn-add-to-cart').click(function (event){
        let productTitle = $(event.target).parent().siblings('.product-title').text().trim();
        let cartArray = [];
        let cart = localStorage.getItem('cart');
        if(cart){
            cartArray = JSON.parse(cart);
        }
        cartArray.push(productTitle);
        localStorage.setItem('cart', JSON.stringify(cartArray));
        console.log(localStorage);
    });


    $('#create-order').click(()=>{
        let hasError = false;
        let addressInput = $('#address-input');
        let phoneInput = $('#phone-input');
        let product_input = $('#product-input');

        // console.log(1);

        $('.order-input').css('border-color', 'rgb(119, 94, 49)');

        // if(!product_input.val().match(/^[А-Я][а-я]+\s*$/)){
        //     product_input.css('border-color', 'red');
        //     hasError = true;
        //     alert('Надо заполнить кириллицей первая с заглавной буквы только одно слово');
        // }

        if(!addressInput.val().match(/^[а-яА-Я0-9,\.\s]+$/)){
            addressInput.css('border-color', 'red');
            hasError = true;
            alert('Ошибка!');
        }

        // if(!phoneInput.val().match(/^\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}/)){
        //     phoneInput.css('border-color', 'red');
        //     hasError = true;
        //     alert('Надо ввести в формате: +7 (999) 999-99-99');
        // }

        // if(!hasError){
        //     $.ajax({
        //         method: 'POST',
        //         utl: 'https://testologia.site/checkout',
        //         data: {
        //             product: product_input.val(),
        //             name: addressInput.val(),
        //             phone: phoneInput.val()
        //         }
        //     })
        //         .done(function (msg){
        //             if(msg.success){
        //                 alert('Спасибо за заказ!');
        //             } else {
        //                 alert('Что-то не так!');
        //             }
        //         })
        // }

        alert("Спасибо за заказ в тестовом сайте!");

    });




    // $('.#create-order').click(function (){
    //     let addressInput = $('#address-input');
    //     let phoneInput = $('#phone-input');
    //     productInput = $('#product-input');
    //     if(!productInput.val().match(/^[А-Я][а-я]+\s*$)){
    //         productInput.css('border-color', 'red');
    //         alert('Заполните пиццу');
    //         return;
    //     }
    //     if(!addressInput.val()){
    //         alert('Заполните адрес');
    //         return;
    //     }
    //     if(!phoneInput.val()){
    //         alert('Заполните телефон');
    //         return;
    //     }
    //     alert('Спасибо за заказ!');
    // });


    // let cart = []; //случай с массивом
    // $('.btn-add-to-cart').click(function (event){
    //     let productTitle = $(event.target).parent().siblings('.product-title').text().trim();
    //     cart.push(productTitle);
    //     console.log(cart);
    //
    // });
});

// if(!sessionStorage.getItem('cookieAccepted')){
//     $('.cookie').show();
// }
//
// $('.cookie-accept').click(function (){
//     $('.cookie').hide();
//     // localStorage.clear();
//     sessionStorage.setItem('cookieAccepted', '1');
// });


// document.getElementsByTagName('h1')[0].innerHTML='Самая крутая пицца ждёт <span>только в нашем ресторане</span>';
// document.getElementById('pizzas').style.color = '#000000';
// // let buttonElements = document.getElementsByClassName('btn');
// let buttonElements = document.querySelectorAll('.btn');
//
// buttonElements.forEach((item)=>{
//     if((item.innerText === 'Оформить заказ') || (item.id === 'no-touch')){
//         return;
//     }
//     item.style.backgroundColor = 'transparent';
//     item.style.border = '1px solid rgb(255, 175, 24)';
//     item.style.color = 'rgb(255, 175, 24)';
// });
//
// // for(let i = 0; i < buttonElements.length; i++){
// //     if((buttonElements[i].innerText === 'Оформить заказ') || (buttonElements[i].id === 'no-touch')){
// //         continue;
// //     }
// //     buttonElements[i].style.backgroundColor = 'transparent';
// //     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
// //     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// // }
//
// document.getElementById('name-input').placeholder = 'Имя';
// document.querySelector('.rights span').innerText = (new Date()).getFullYear();
//
// let products = document.getElementsByClassName('product');
let products = $('.product');
for(let i = 0; i < products.length; i++){
    let productTitle = products.eq(i).find('.product-title');
    productTitle.text(productTitle.text().replace(/(Кури[а-я]+)(.+)/gi, '$2 из индейки'));

    // if(i % 2 === 1) {
    //     products[i].children[1].innerText += '*';
    // }
}
