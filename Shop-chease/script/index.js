let balls=document.querySelectorAll('.ball-item')


balls.forEach(function(element){
    element.addEventListener('click',function(){
        document.querySelectorAll('.inner-text_ball').forEach(elementText => {
            elementText.classList.remove('active-ball')
        });
        element.lastElementChild.classList.add('active-ball')
    })
})
// console.log(balls)
document.addEventListener('click',function(trg){
    balls.forEach(function(elem){
        if(trg.target!==elem){
            elem.lastElementChild.classList.remove('active-ball')
        }
    })
})


///////////////////////////////////slider
const cardsSld=document.querySelectorAll('.card')
const sliderLine=document.querySelector('.slider-line')
let count=0;

function init(){
    cardsSld.forEach(function(card){
        card.style.width=200+'px'
        card.style.height='auto'
    })
}
init()

document.querySelector('.slider-move_left').addEventListener('click',function(){
    count--
    if(count<0){
        count=cardsSld.length-1
    }
    rollSlider()
}) 
document.querySelector('.slider-move_right').addEventListener('click',function(){
    count++
    if(count>=cardsSld.length){
        count=0
    }
    console.log(count)
    rollSlider()
})
function rollSlider(){
    sliderLine.style.transform=`translate(-${count*209}px`
}


//////////////////////////////////////////phone

