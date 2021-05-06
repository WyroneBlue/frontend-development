console.log('Shoppingcart');

var addToCart = document.querySelectorAll(".add-to-cart");
var popup = document.querySelector("#cart-popup");
var popupCloser = document.querySelector("#cart-popup .close");

var cart = {
    name: '',
    for: '',
    size: '',
    image: '',
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