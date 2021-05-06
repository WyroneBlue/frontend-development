console.log('Hello World');

var shoeSizes;
var shoeColors;

const deactivateAllSizes = function(){
    shoeSizes.forEach(button => {
        button.classList.remove('active');
    }); 
}

const setSizeActive = function(e){

    if(!e.target.classList.contains('empty')){
        deactivateAllSizes();
        let btn = e.target;
        btn.classList.toggle('active');
    }
}

const deactivateAllColors = function(){
    shoeColors.forEach(img => {
        img.classList.remove('active');
    }); 
}

const setColorActive = function(e){
    e.preventDefault();

    if(!e.target.classList.contains('empty')){
        deactivateAllColors();
        let img = e.target.parentNode;
        img.classList.toggle('active');
    }
}

window.addEventListener('DOMContentLoaded', function(){
    
    shoeSizes = document.querySelectorAll("#shoe-sizes > button");
    shoeColors = document.querySelectorAll("#shoe-colors a");

    shoeSizes.forEach(button => {
        button.addEventListener('click', setSizeActive);
    });
    
    shoeColors.forEach(img => {
        img.addEventListener('click', setColorActive);
    });
});