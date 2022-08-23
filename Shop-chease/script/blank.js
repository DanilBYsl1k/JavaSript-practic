localStorage.getItem('card')
let a=localStorage.getItem('Card')


let CardBlank=JSON.parse(a)

function CreateBlank(){
    document.querySelector('.price').innerText=CardBlank.price
    document.querySelector('h1').innerText=CardBlank.name
    document.querySelector('.article-blank').innerText=' '+CardBlank.id
    document.querySelector('.title-card-page').innerText=CardBlank.name
    document.querySelectorAll('.main-foto-page-blank img').forEach(function(Element){
        Element.src=CardBlank.img
    })

}
CreateBlank()







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
