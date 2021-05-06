console.log('Detail js');

var url = new URL(window.location);
var shoe_id = url.searchParams.get("shoe_id");
var currentShoe = shoelist[shoe_id];
var names = document.querySelectorAll(".heading h1");
var forWho = document.querySelectorAll(".heading h2");
var prices = document.querySelectorAll(".heading span");
var images = document.querySelector(".images div");
var colors = document.querySelector("#shoe-colors div");

var controls = document.querySelectorAll("#controls > span");
var forYou = document.querySelector("#for-you div");
let pos = { top: 0, left: 0, x: 0, y: 0 };
var html = {
    image: '',
    colors: '',
};

const mouseDownHandler = function(e) {
    forYou.style.cursor = 'grabbing';
    forYou.style.userSelect = 'none';

    pos = {
        left: forYou.scrollLeft,
        x: e.clientX,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

const mouseMoveHandler = function(e) {
    const dx = e.clientX - pos.x;
    forYou.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function() {
    forYou.style.cursor = 'grab';
    forYou.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

const scrollForYou = function(e){

    let target;
    let check = e.target.tagName;

    switch (check) {
        case 'SPAN':
            target = e.target.dataset.scroll_controll
            break;

        case 'svg':
            target = e.target.parentNode.dataset.scroll_controll
            break;
            
        case 'path':
            target = e.target.parentNode.parentNode.dataset.scroll_controll
            break;
        default:
            break;          
    }

    if(target == 'next'){
        forYou.scrollLeft = forYou.scrollLeft + 300;
    } else {
        forYou.scrollLeft = forYou.scrollLeft - 300;
    }
}

let getCurrentShoe = function(e) {

    names.forEach(name => {
        name.innerText = currentShoe.name;
    });

    forWho.forEach(name => {
        name.innerText = currentShoe.for;
    });
    
    prices.forEach(price => {
        price.innerText = "€" + currentShoe.price;
    });

    let currentShoeImages = currentShoe.images;
    for (const key in currentShoeImages) {

        let image = currentShoeImages[key];  
        html.image += `<figure><img src="${image}" alt=""></figure>`;
    }
    images.innerHTML = html.image;

    let currentcolors = currentShoe.colors;
    for (const key in currentcolors) {
        let colorImage = currentcolors[key].image;
        let empty = (currentcolors[key].in_stock != true) ? 'class="empty"' : '';        
        html.colors += `<a href=""><img ${empty} src="${colorImage}" alt=""></a>`;
    }
    colors.innerHTML += html.colors;
}

window.addEventListener('DOMContentLoaded', getCurrentShoe);
forYou.addEventListener('mousedown', mouseDownHandler);

controls.forEach(span => {
    span.addEventListener('click', scrollForYou);
});
