console.log('Hello World');

var forYou = document.querySelector("#for-you div");
var controls = document.querySelectorAll("#controls > span");
var shoeSizes = document.querySelectorAll("#shoe-sizes > button");


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
            console.log(e);
            break;
            
    }

    if(target == 'next'){
        forYou.scrollLeft = forYou.scrollLeft + 300;
    } else {
        forYou.scrollLeft = forYou.scrollLeft - 300;
    }
}


