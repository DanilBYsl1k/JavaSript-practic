



let innerElements=localStorage.getItem('saveLocalItem')
innerElements=JSON.parse(innerElements)


function createPage(){
    let createPageCart=
    `<div class="midl-container content-cart-container data-id="${innerElements.id}">
        <div class="img-content-card-main">
            <div class="img-content-card">
                <div class="slider-main-img-cart">
                    <img class="arrow-move-left-main-img-cart" src="image/arrow-move-left.svg" alt="">
                    <div class="move-main-img-cart">
                        <div class="box-img-cart">
                            <img class="a" src="${innerElements.imgSrc}" alt="">
                        </div>
                        <div class="box-img-cart">
                            <img class="a" src="${innerElements.imgSrc}"  alt="">
                        </div>
                        <div class="box-img-cart">
                            <img class="a" src="${innerElements.imgSrc}"  alt="">
                        </div>
                        <div class="box-img-cart">
                            <img class="a" src="${innerElements.imgSrc}"  alt="">
                        </div>
                        <div class="box-img-cart">
                            <img class="a" src="${innerElements.imgSrc}"  alt="">
                        </div>
                    </div> 
                <img class="arrow-move-right-main-img-cart" src="image/arrow-move-left.svg" alt="">
                </div>
            </div>
            <div class="small-img-cart-container">
                <div class="img-cart-small">
                    <img class="a" src="${innerElements.imgSrc}"  alt="" data-small>
                </div>
                <div class="img-cart-small">
                    <img class="a" src="${innerElements.imgSrc}"  alt="" data-small>
                </div>
                <div class="img-cart-small">
                    <img class="a" src="${innerElements.imgSrc}"  alt="" data-small>
                </div>
            </div>
        </div>
        <div class="title-info-cart">
            <h1 class="title-name-card">${innerElements.title},<br>ФМС УКРАЇНА</h1>
            <div class="Availability-pice">
                <span class="Availability">В наявності</span>
                <p><span>1 619 </span>грн</p>
            </div>
            <div class="manufacturer-supplier">
                <div class="producer">
                    <h3>Виробник</h3>          
                    <p>ФМС УКРАЇНА</p>
                    <div class="Payment">
                        <h3>Оплата</h3>   
                        <ul>
                            <li><img src="image/payPal.svg" alt=""></li>
                            <li><img src="image/visa.svg" alt=""></li>
                            <li><img src="image/money.svg" alt=""></li>
                        </ul>
                    </div>  
                </div>
                <div class="delivery">
                    <h3>Доставка</h3>           
                    <P>Завтра відповідно до тарифів перевізника</P> 
                    <button class="call-back">Замовити дзвінок</button>
                </div>
            </div>
            <hr>
            <div class="buy-cart">
                <div class="">
                    <p><span class="price">${innerElements.price}</span> грн</p>
                    <p>Ціна за одну одиницю</p>
                </div>
                <div class="add-buy">
                    <button>Купити</button>
                    <ul>
                        <li><img src="image/heart.svg" alt=""></li>
                        <li><img src="image/ic.svg" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`

    let childrenPage = document.createElement('section');
    childrenPage.innerHTML=createPageCart
    childrenPage.classList.add('content-carts')
document.querySelector('.content-cart').insertAdjacentElement('beforeend', childrenPage)

let BreadCrumbs=document.querySelector('.veriant-katalog')
BreadCrumbs.innerHTML=innerElements.title
}
createPage()

//добавление в корзину через 

const btnAddbusket=document.querySelector('.add-buy')

btnAddbusket.addEventListener('click',function(){
    const itemInCart=document.querySelector(`[data-id="${innerElements.id}"]`)
    if(itemInCart){
        const counterElemnt=itemInCart.querySelector('[data-counter]')
        counterElemnt.innerHTML=parseInt(counterElemnt.innerHTML)+parseInt(+1)
    }
    else{
        let cartItemHTML=`<div class="item-list-basket" data-id=${innerElements.id}>
        <div class="img-item_basket">
            <img src="${innerElements.imgSrc}" alt="">
            <div class="info-item-basket">
                <h4>${innerElements.title}</h4>
                <p>Ціна:<span class="item-price">${innerElements.price}</span> Грн</p>
                <p>В наявності</p>
            </div>
        </div>
        <div class="inner-item_basket">
            <div class="counter-item-list">
            <button data-action="minus">-</button>
            <p data-counter="">1</p>
            <button data-action="plus">+</button>
            </div>
            <div class="final-price_item">
            <h4>Кінцева Ціна</h4>
            <p>123</p>
            </div>
        </div>
        <img class="btn_delete" data-delet="delete" src="image/delete-basket.svg" title="delete">
    </div>`;
let htmlObject = document.createElement('li');
htmlObject.innerHTML=cartItemHTML
htmlObject.classList.add('bloks-basket-item')
cartWrapper.insertAdjacentElement('beforeend', htmlObject)
    }
    toggleCartStatus()

    calcCartPrice()
    localStorage.setItem('saveBusket',JSON.stringify('as'))

    alertAdd()
})


window.addEventListener('click',function(evt){
    if(evt.target.hasAttribute('data-small')){
        let img=evt.target.closest('.img-cart-small')
        let saveImg={
            img:img.querySelector('.a').getAttribute('src')
    }
    let createImg=document.createElement('div')
    createImg.classList.add('img-content-wrap')
    document.querySelector('.box-img-content-wrap').classList.add('active')
    createImg.innerHTML=`<img src="${saveImg.img}" alt="" class="hide-img">`
    document.querySelector('.img-content-wrap').replaceWith(createImg)
    bgc.classList.add('active')
    
    }   
    bgc.addEventListener('click', function(){
        document.querySelector(".box-img-content-wrap").classList.remove('active')
    })
})











let slideImgCart=document.querySelector('.move-main-img-cart')
const arrowImgCartRight=document.querySelector('.arrow-move-right-main-img-cart')
const arrowImgCartLeft=document.querySelector('.arrow-move-left-main-img-cart')

let count=0

arrowImgCartRight.addEventListener('click',function(){
    count=count+434
    if(count===2170){
        count=0
    }
    slideImgCart.style.right=count+'px'
})
arrowImgCartLeft.addEventListener('click',function(){
    count=count-434
    if(count===-434){
        count=1736
    }
    slideImgCart.style.right=count+'px'
})


let arrowLeft=document.querySelector('.wrap-arrow-move-left');
let arrowrRight=document.querySelector('.wrap-arrow-move-right');
let contentslidermove=document.querySelector('.content-slider-move');
let sliderItem=document.querySelectorAll('.button-slider-item');
let countSlid=0

arrowLeft.addEventListener('click', function(){
    countSlid=countSlid+227
    if(countSlid>0){
        countSlid=-1135
    }
    contentslidermove.style.left=countSlid+'px'
})
arrowrRight.addEventListener('click', function(){
    countSlid=countSlid-227
    if(countSlid<-1500){
        countSlid=0
    }
    contentslidermove.style.left=countSlid+'px'
})

sliderItem.forEach(element => {
    element.addEventListener('click', function(){
        for (const key in sliderItem) {
            sliderItem[key].disabled=false
            element.classList.add('button-slider-item-active')
            sliderItem[key].classList.remove('button-slider-item-active')
            countSlid=countSlid+227
    if(countSlid>0){
        countSlid=-1135
    }
    element.disabled=true
    contentslidermove.style.left=countSlid+'px'
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
