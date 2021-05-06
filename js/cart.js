console.log('Shoppingcart');

var addToCart = document.querySelectorAll(".add-to-cart");
var popup = document.querySelector("#cart-popup");
var popupCloser = document.querySelector("#cart-popup .close");

var cart = {
    msg: document.querySelector('#cart-popup > span:first-of-type'),
    image: document.querySelector('#cart-popup > section > img'),
    name: document.querySelector('#cart-popup > section > div > span:nth-child(1)'),
    for: document.querySelector('#cart-popup > section > div > span:nth-child(2)'),
    size: document.querySelector('#cart-popup > section > div > span:nth-child(3)'),
    price: document.querySelector('#cart-popup > section > div > span:nth-child(4)'),
}

const showCartPopup = function(e){
    
    cart.name = '';
    cart.for = '';
    cart.size = '';
    cart.image = '';
    
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 6000);
    // alert('Nieuwe item toegevoegd');
}

const closePopup = function(e){
    popup.classList.remove('show');
}

addToCart.forEach(btn => {
    btn.addEventListener('click', showCartPopup);
});

popupCloser.addEventListener('click', closePopup)