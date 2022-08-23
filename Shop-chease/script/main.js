let burgerMenu=document.querySelector('.burger-menu_phone')

let modalBasket=document.querySelector('.modal-basket');
let basketLink=document.querySelector('.link-basket')

basketLink.addEventListener('click',function(){
    modalBasket.classList.toggle('active')
})



let wraperBasket=document.querySelector('.basket_cards')


window.addEventListener('click',function(btn){
    let counter;
    if(btn.target.dataset.buy==='plus' || btn.target.dataset.buy==='minus'){
        const counterWrapper=btn.target.closest('.counter-item-list')

        counter=counterWrapper.querySelector('[data-count]');
    }
    if(btn.target.dataset.buy==="plus"){
        counter.innerHTML=++counter.innerText
        priceItem()
    }
    if(btn.target.dataset.buy==="minus"){
        if (parseInt(counter.innerText)>0) {
            counter.innerText=--counter.innerText

        }
        if (btn.target.closest('.basket_cards') && parseInt(counter.innerText)===0){
            btn.target.closest('.busket-cards_item').remove()
       }
       callItem()
       priceItem()
    }
})
window.addEventListener('click',function(delt){
    if(delt.target.hasAttribute('data-delete')){
        delt.target.closest('.busket-cards_item').remove()
        callItem()
        priceItem()
    }
})


window.addEventListener('click',function(evt){
    if(evt.target.dataset.buy==='add'){
        let CardInfo=evt.target.closest('.card')
        let productInfo={
            id:CardInfo.dataset.id,
            price:CardInfo.dataset.price,
            name:CardInfo.querySelector('.title-card').textContent,
            img:CardInfo.querySelector('img').getAttribute('src')
        }
        const IdCards=wraperBasket.querySelector(`[data-id="${productInfo.id}"]`)
        console.log(IdCards)
        if(IdCards){
            let counterElemnt=IdCards.querySelector('[data-count]')
            counterElemnt.innerHTML=parseInt(counterElemnt.innerHTML)+parseInt(+1)
        }
        else{
            let itemCard=
            `
                    <img src="${productInfo.img}" alt="">
                    <div class="change-card_basket">
                        <div class="info-title">
                            <h3>${productInfo.name}</h3><img data-delete src="images/delete-item.svg" alt="">
                        </div>
                        <div class="wraper-btn_count_basket">
                            <div class="counter-item-list">
                            <button class="btn-busket" data-buy="minus">-</button><p class="inner-count_item" data-count>1</p><button data-buy="plus" class="btn-busket">+</button></div><h4 class="price-Item_basket">${productInfo.price}<span>грн</span></h4>
                        </div>
                    </div>
            `
            let htmlItem=document.createElement('li')
            htmlItem.innerHTML=itemCard
            htmlItem.classList.add('busket-cards_item')
            htmlItem.setAttribute('data-id',productInfo.id)
            document.querySelector('.basket_cards').insertAdjacentElement('afterbegin',htmlItem)
        }
        //add notification add goods
        let titleGoods=document.querySelector('.title-notification-add-goods')
        titleGoods.innerText=productInfo.name
        let alert=document.querySelector('.notification-add-goods')
        alert.classList.add('active')
        setInterval(function(){
            alert.classList.remove('active')
        },2000)
        callItem()
        priceItem()
    }
})

function priceItem(){
    const cartItem=document.querySelectorAll('.busket-cards_item');
    let innerPrice=document.querySelectorAll('.final-price');
    let totalPrice=0;

    cartItem.forEach(function (item) {
        const amountEL=item.querySelector('[data-count]');
        const priceEL=item.querySelector('.price-Item_basket');

        const currentPrice=parseInt(amountEL.innerText)*parseInt(priceEL.innerText)

        totalPrice+=currentPrice
    })
    innerPrice.forEach(function(price){
        price.innerHTML=totalPrice
    })
}

function callItem(){
    document.querySelectorAll('.item-count_busket').forEach(function(all){
        all.innerHTML=wraperBasket.children.length
    })
    if(wraperBasket.children.length>0){
        document.querySelector('.full-basket').classList.add('active')
        document.querySelector('.basket_empty').classList.add('hide')
    }
    else{
        document.querySelector('.full-basket').classList.remove('active')
        document.querySelector('.basket_empty').classList.remove('hide')
    }
    
}


burgerMenu.addEventListener('click',function(){
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav_active')
    document.querySelector('.page').classList.toggle('block-page')
})


let scrollBtn=document.querySelector('.scroll-btn')
window.addEventListener('scroll',function(){
    if(window.scrollY<700){
        scrollBtn.classList.remove('active-scroll-btn')
    }
    else if(window.scrollY>700){
        scrollBtn.classList.add('active-scroll-btn')
    }
})
scrollBtn.addEventListener('click',function(){
    window.scrollTo(0,0)
})

window.addEventListener('click',function(evt){
    // evt.preventDefault()
    if(evt.target.classList.contains('link-card')){
        let CardInfo=evt.target.closest('.card')
        let productInfo={
        id:CardInfo.dataset.id,
        price:CardInfo.dataset.price,
        name:CardInfo.querySelector('.title-card').textContent,
        img:CardInfo.querySelector('img').getAttribute('src')
        }
        localStorage.setItem('Card',JSON.stringify(productInfo))
        saveSesionstr(productInfo, evt)
    }
})



/////////////последнее просмотренно 
let lastView=[]
if(sessionStorage.getItem('SaveItems')){
    let a=sessionStorage.getItem('SaveItems')
    lastView=JSON.parse(a)
    console.log(lastView)
}


function saveSesionstr(item, evtTarg){
    let targt=evtTarg.target.closest('li').dataset.id
    for (const key in lastView) {
        console.log(lastView[key].id.includes(targt))
        if(lastView[key].id.includes(targt)){
            console.log('Nashlo')
            return
        }
    }
    console.log(lastView)
    lastView.push(item)
    sessionStorage.setItem('SaveItems', JSON.stringify(lastView ))
}
