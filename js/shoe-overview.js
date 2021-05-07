console.log('Overview js');

var shoeContainer = document.querySelector('.mainsneakers');
var filterContainer = document.querySelector('.filter');
var sizeButtons = document.querySelectorAll('.size button');
var colorButtons = document.querySelectorAll('.kleur button');
let shoeHtml = '';
let filteredShoes = [];

var filters = {
    sex: [],
    price: [],
    size: [],
    color: [],
}

const activateButton = function(e){
    e.target.classList.toggle('active');
}

const goToDetail = function(e){
    let id = e.dataset.id;
    let link =  'shoe.html?shoe_id=' + id;
    location.href = link;
}

const filterSex = function(){

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

const filterPrice = function(){

    let pricefilters = Object.keys(filters.price).map(function(key, index) {
        return filters.price[key].value;
    });

    if(pricefilters.length > 0){
        
        pricefilters = Object.values(pricefilters).map(function(key, index) {
            return pricefilters[index].split("-");
        });
        
        
        let shoes = [];
        pricefilters.filter((filter) => {

            if(filter.length > 1){
                
                Object.values(filteredShoes).filter(function(key, index) {
                    
                    if((filter[0] < filteredShoes[index].price && filter[1] > filteredShoes[index].price) || pricefilters.length == 0 ){            
                        // console.log(filteredShoes[index]);
                        return shoes.push(filteredShoes[index]);
                    }
                });
            } else {

                Object.values(filteredShoes).filter(function(key, index) {

                    if(parseInt(filter[0]) < filteredShoes[index].price){            
                        return shoes.push(filteredShoes[index]);
                    }
                });

            }
        });
        filteredShoes = shoes
    }
}

const filterSize = function(){
    
    let sizeFilters = Object.keys(filters.size).map(function(key, index) {
        return parseInt(filters.size[key].textContent);
    });

    if(sizeFilters.length > 0){
        
        let shoes = []; 
        // sizeFilters.filter((filter) => {

        //     let found = false;
        //     Object.values(filteredShoes).filter(function(key, index) {
                
        //         let sizes = filteredShoes[index].sizes;
        //         Object.values(sizes).filter(function(key_2, index_2) {
                    
        //             let size = key_2.size;
        //             if(sizeFilters.includes(size) && found == false){
        //                 found = true;
        //                 return shoes.push(filteredShoes[index]);
        //             }
        //         });
        //     });
        // });

        sizeFilters.filter((filter) => {

            Object.values(filteredShoes).filter(function(key, index) {
                
                let found = false;
                let sizes = filteredShoes[index].sizes;
                Object.values(sizes).filter(function(key_2, index_2) {
                    
                    let size = key_2.size;
                    if(sizeFilters.includes(size) && found == false){
                        found = true;
                        return shoes.push(filteredShoes[index]);
                    }
                });
            });
        });
        
        filteredShoes = shoes
    }
}

const filterColor = function(e){
    return e.price > 115
}

const checkFilters = function(e){

    filters.sex = document.querySelectorAll('.geslacht input:checked');
    filters.price = document.querySelectorAll('.prijs input:checked');
    filters.size = document.querySelectorAll('.size button.active');
    filters.color = document.querySelectorAll('.kleur input.active');
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
        <article onclick="goToDetail(this)" data-id="${shoe.id}">
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
window.addEventListener('DOMContentLoaded', loadShoes);

sizeButtons.forEach(btn => {
    btn.addEventListener('click', activateButton);
    btn.addEventListener('click', loadShoes);
});

colorButtons.forEach(btn => {
    btn.addEventListener('click', activateButton);
    btn.addEventListener('click', loadShoes);
});

