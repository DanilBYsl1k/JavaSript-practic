localStorage.getItem('card')
let a=localStorage.getItem('Card')


let CardBlank=JSON.parse(a)

if(CardBlank===null){
    console.log('a')
    document.querySelector('.main-content-page').innerHTML=`<div class="fail-page"><h2>Произошла ошибка попробуйте найти товар через каталог</h2></div>`
}
else{
    document.querySelector('.price').innerText=CardBlank.price
    document.querySelector('h1').innerText=CardBlank.name
    document.querySelector('.article-blank').innerText=' '+CardBlank.id
    document.querySelector('.title-card-page').innerText=CardBlank.name
    document.querySelectorAll('.main-foto-page-blank img').forEach(function(Element){
        Element.src=CardBlank.img
    })
}
console.log(CardBlank)



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
    rollSlider()
})
function rollSlider(){
    sliderLine.style.transform=`translate(-${count*209}px`
}


let btnAddBusk=document.querySelector('.blank-button')

btnAddBusk.addEventListener('click',function(evt){  
    let arrayItem={
        name:CardBlank.name,
        price:CardBlank.price,
        img:CardBlank.img,
        id:CardBlank.id,
        count:document.querySelector('.count-blank_item').textContent
    }
    addBusketItem(arrayItem)
    // console.log(arrayItem)
    //////////////////////////////////////////////////////////////////////////////////////////
    let targt=arrayItem.id
    for(const key in saveBusk) {
        if(saveBusk[key].id.includes(targt)===true){
           saveBusk[key].count=parseInt(arrayItem.count)+ parseInt(saveBusk[key].count)
            localStorage.setItem('products', JSON.stringify(saveBusk ))
            return
        }
    }
    saveBusk.push(arrayItem)
    localStorage.setItem('products', JSON.stringify(saveBusk ))
    ///////////////////////////////////////////////////////////////////////////
})
