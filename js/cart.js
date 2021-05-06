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
    
    cart.msg.innerText = '✅ Toegevoegd aan winkelmand';
    cart.name.innerText = 'Nike Air Zoom Pegasus 38';
    cart.for.innerText = 'Hardloopschoen voor heren';
    cart.size.innerText = 'Maat 46';
    cart.price.innerText = '€ 119.99';
    cart.image.src = 'images/air-zoom-pegasus-38-hardloopschoen-heren-jRRc9F.jpg';
    
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
        cart.msg.innerText = '';
        cart.name = '';
        cart.for = '';
        cart.size = '';
        cart.price = '';
        cart.image = '';
    }, 8000);

}

const closePopup = function(e){
    popup.classList.remove('show');
}

addToCart.forEach(btn => {
    btn.addEventListener('click', showCartPopup);
});

popupCloser.addEventListener('click', closePopup)