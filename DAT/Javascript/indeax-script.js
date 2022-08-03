
//slider
let arrowLeft=document.querySelector('.wrap-arrow-move-left');
let arrowrRight=document.querySelector('.wrap-arrow-move-right');
let contentslidermove=document.querySelector('.content-slider-move');
let sliderItem=document.querySelectorAll('.button-slider-item');
let count=0

arrowLeft.addEventListener('click', function(){
    count=count+227
    if(count>0){
        count=-1135
    }
    contentslidermove.style.left=count+'px'
})
arrowrRight.addEventListener('click', function(){
    count=count-227
    if(count<-1500){
        count=0
    }
    contentslidermove.style.left=count+'px'
})

sliderItem.forEach(element => {
    element.addEventListener('click', function(){
        for (const key in sliderItem) {
            sliderItem[key].disabled=false
            element.classList.add('button-slider-item-active')
            sliderItem[key].classList.remove('button-slider-item-active')
            count=count+227
    if(count>0){
        count=-1135
    }
    element.disabled=true
    contentslidermove.style.left=count+'px'
       }
    })
});

document.addEventListener('click', function(evt){
    sliderItem.forEach(function(elem){
        if(evt.target!==elem){
            elem.classList.remove('button-slider-item-active');
            elem.disabled=false
        }
    })
});

//partners
let sliderPartnersMove=document.querySelector('.slider-partners-move');
let arrowLeftPartners=document.querySelector('.arrow-move-partners-left');
let arrowRightPartners=document.querySelector('.arrow-move-partners-right');

arrowLeftPartners.addEventListener('click', function(){
    count=count+120;
    if(count>200){
        count=-1800;
    }
    sliderPartnersMove.style.left=count+'px'
})
arrowRightPartners.addEventListener('click', function(){
    count=count-160;
    if(count<-1800){
        count=0;
    }
    sliderPartnersMove.style.left=count+'px'
})



//cladder
document.addEventListener('click', function(elem){
    if(elem.target!==buttonSelectPhone){
        wrapSelectListPhone.classList.remove('active');
    }
})

contentslidermove.addEventListener('touchmove', function(){
    count=count-5
    if(count<-1135){
        count=0
    }
    contentslidermove.style.left=count+'px'
})