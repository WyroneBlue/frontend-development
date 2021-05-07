console.log('Overview js');

// console.log(shoelist);
var shoeContainer = document.querySelector('.mainsneakers');
var filterContainer = document.querySelector('.filter');
var sizeButtons = document.querySelectorAll('.size button');
let shoeHtml = '';
let filteredShoes = [];

var filters = {
    sex: [],
    price: [],
    size: [],
    color: [],
}

const filterSex = function(e){

    let sexfilters = Object.keys(filters.sex).map(function(key, index) {
        return filters.sex[key].value;
    });

    if(sexfilters.length > 0){

        let shoes = [];
        Object.values(filteredShoes).filter(function(key, index) {
            if(sexfilters.includes(filteredShoes[index].sex) == true || sexfilters.length == 0){
                return shoes.push(filteredShoes[index]);
            }
        });
        
        filteredShoes = shoes;
    }
}

const filterPrice = function(e){

    let pricefilters = Object.keys(filters.price).map(function(key, index) {
        return filters.price[key].value;
    });

    if(pricefilters.length > 0){

        pricefilters = Object.values(pricefilters).map(function(key, index) {
            return pricefilters[index].split("-");
        });
        
        
        let shoes = [];
        pricefilters.filter((filter) => {
            Object.values(filteredShoes).filter(function(key, index) {
                
                if((filter[0] < filteredShoes[index].price && filter[1] > filteredShoes[index].price) || pricefilters.length == 0 ){            
                    // console.log(filteredShoes[index]);
                    return shoes.push(filteredShoes[index]);
                }
            });
        });
        filteredShoes = shoes
    }
}


const activateButton = function(e){
    e.target.classList.toggle('active');
}

const filterSize = function(e){
    return e.price > 115
}

const filterColor = function(e){
    return e.price > 115
}

const checkFilters = function(e){

    filters.sex = document.querySelectorAll('.geslacht input:checked');
    filters.price = document.querySelectorAll('.prijs input:checked');
    filters.size = document.querySelectorAll('.size button.active');
    filters.color = document.querySelectorAll('.kleur input:checked');
}

const filterShoes = function(e){

    shoeHtml = '';
    filteredShoes = shoelist;
    checkFilters();
    filterSex();
    filterPrice();
    // filterSize();
    // filterColor();
    return filteredShoes;
}

const loadShoes = function(e){

    filterShoes();
    filteredShoes.forEach(shoe => {
        
        shoeHtml += `
        <article>
            <img src="${shoe.images[0]}" alt="">
            <p>${shoe.msg ?? ''}</p>
            <h2>${shoe.name}</h2>
            <p>€ ${shoe.price}</p>
        </article>
        `;
    });
    shoeContainer.innerHTML = shoeHtml;
}

filterContainer.addEventListener('change', loadShoes);
window.addEventListener('DOMContentLoaded', loadShoes);

sizeButtons.forEach(btn => {
    btn.addEventListener('click', activateButton);
});

