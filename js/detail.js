console.log('Detail js');

var url = new URL(window.location);
var shoe_id = url.searchParams.get("shoe_id");
var currentShoe = shoelist[shoe_id];
var names = document.querySelectorAll(".heading h1");
var forWho = document.querySelectorAll(".heading h2");
var prices = document.querySelectorAll(".heading span");
var images = document.querySelector(".images div");
var colors = document.querySelector("#shoe-colors");

var html = {
    image: '',
    colors: '',
};

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
        html.colors += `<a href="#"><img src="${colorImage}" alt=""></a>`;
    }
    colors.innerHTML = html.colors;
}

window.addEventListener('DOMContentLoaded', getCurrentShoe);

