//для номера телефона
let MainButtonPhone=document.querySelector('.dropdown_button');
let dropdownPhoneItem=document.querySelectorAll('.dropdown_list-item');
let dropdownList=document.querySelector('.dropdown_list')

MainButtonPhone.addEventListener('click', function(){
    dropdownList.classList.toggle('active')
})

dropdownPhoneItem.forEach(function(list_item){//заводим его в массив 
    list_item.addEventListener('click', function(e){// на каждый элемент мы добавляем событие при клике 
        e.stopPropagation();
        MainButtonPhone.innerText=this.innerText//меняем текст на который мы нажимаем
        document.querySelector('.dropdown_input-hidden').value=this.dataset.value
        dropdownList.classList.remove('active')//удаляем класс при нажатии 
    })
});

//отлавлиаем куда мы нажмаем шоб закрыть наше окно
document.addEventListener('click', function(e){//отыкали весь документ
    if(e.target!==MainButtonPhone){
        dropdownList.classList.remove('active');//удаляем класс при нажатии 
    }
})
document.addEventListener('keydown', function(e){
    if(e.key==='Tab' || e.key==='Escape'){
        dropdownList.classList.remove('active')

    }
})
// list-catalog
let listSvg=document.querySelectorAll('.svg_catalog-selection-list');
let catalogLI=document.querySelectorAll('.catalog-selection-list>li')

catalogLI.forEach(function(elem){
    elem.addEventListener('mouseover', function(){
        elem.classList.add('activesvg')
    })
})
catalogLI.forEach(function(elem){
    elem.addEventListener('mouseleave', function(){
        elem.classList.remove('activesvg')
    })
})

//list catalog phone
let buttonSelectPhone=document.querySelector('.button-catalog-selection-phone');
let wrapSelectListPhone=document.querySelector('.catalog-selection-list-phone');

buttonSelectPhone.addEventListener('click', function(){
    wrapSelectListPhone.classList.toggle('active');
});
//
let ListCompany=document.querySelector('.row-list-about');
let about=document.querySelector('.about');
about.addEventListener('click', function(){
    ListCompany.classList.toggle('active')
    
    about.style.backgroundColor='var(--light-green)'
    // about.style.backgroundColor=''
})
document.addEventListener('click', function(e){//отыкали весь документ
    if(e.target!==about){
        ListCompany.classList.remove('active');//удаляем класс при нажатии 
        about.style.backgroundColor=''
    }
})




//кнопка прокрутки в верх
const scrolBtn=document.querySelector('.arrow-move-headder');

scrolBtn.addEventListener('click', function(){
    window.scrollTo(0,0)
});



//модальное окно входа в кабинет
let popap=document.querySelector('.modal-login');
let modalLink=document.querySelector('.login-link');
let bgc=document.querySelector('.bgc')
modalLink.addEventListener('click', function(){
    popap.classList.add('active-modal')
    bgc.classList.add('active')
})

bgc.addEventListener('click', function(elem){
    if(elem.target!==popap){
        popap.classList.remove('active-modal');
        modalBusk.classList.remove('active');
        bgc.classList.remove('active');
    }
})



//phone
const phoneList=document.querySelector('.phone-nav');
const burgerMenu=document.querySelector('.burger-menu_phone')

//phone burger menu
burgerMenu.addEventListener('click', function(){
    phoneList.classList.toggle('phone-nav_active');
    document.querySelector('.body').classList.toggle('phone-nav_active_body');
})


//buket
const modalBusk=document.querySelector('.modal-basket')

window.addEventListener('click',function(opnBusk){
    if(opnBusk.target.dataset.busket==='busket'){
        modalBusk.classList.add('active');
        bgc.classList.add('active')
    }
})
document.querySelector('.close-img').addEventListener('click',function(){
    modalBusk.classList.remove('active');
    bgc.classList.remove('active')
})

//поиск
let search=document.querySelector('#search')

search.addEventListener('input',function(){
    let Val=search.value;
    let itemAssort=document.querySelectorAll('.catalog-list li ')
    // let Val=search.value;
    if(Val!=''){
        itemAssort.forEach(function(elem){
            if(elem.innerText.search(Val)==-1){
                elem.classList.add('hide')
            }
            else{
                elem.classList.remove('hide')
            }
        })
    }
    else{
        itemAssort.forEach(function(elm){
            elm.classList.remove('hide')
        })
    }
    // console.log(Val)
})




window.addEventListener('click',function(event){
    let counter;
    //проверяем точно ли мы кликнули по кнопке минус или плюс
    if(event.target.dataset.action==='plus' || event.target.dataset.action==='minus'){
        const counterWrapper=event.target.closest('.counter-item-list')
        counter=counterWrapper.querySelector('[data-counter]');
    }
    //поиск при клике 


    if(event.target.dataset.action==='plus'){
        //додаэмо наші цифри
        counter.innerText=++counter.innerText

        calcCartPrice()

        calcOneCard()
    }
    if(event.target.dataset.action==='minus'){
        //додаэмо наші цифри
        if (parseInt(counter.innerText)>0) {
            counter.innerText=--counter.innerText
            calcCartPrice()    
            
            calcOneCard()
        }
        if (event.target.closest('.wraper_list-basket')  && parseInt(counter.innerText)===0) {
             event.target.closest('.bloks-basket-item').remove()
             toggleCartStatus()

        }
    }
})
// event.target.closest('.item-list-basket').remove()
// && parseInt(counter.innerText)===1
//cart item
const cartWrapper=document.querySelector('.wraper_list-basket');



window.addEventListener('click',function(buyEvt){

    if(buyEvt.target.hasAttribute('data-buy')){

        let item =buyEvt.target.closest('.catalog-item-list')
        // console.log(item.querySelector('[data-amount]'))
        
        const productsInfo={
            id:item.dataset.id,
            imgSrc:item.querySelector('.product-img').getAttribute('src'),
            title:item.querySelector('.item-title').innerText,
            itemIncount:item.querySelector('[data-amount]').innerText,
            price:item.querySelector('[data-price]').innerText
        }
        // localStorage.setItem(`${productsInfo.id}`,JSON.stringify(productsInfo))


        // console.log(productsInfo)
        const itemInCart=cartWrapper.querySelector(`[data-id="${productsInfo.id}"]`)
        // const itemInCart=localStorage.getItem(`${productsInfo.id}`);
  
        // itemInCart=JSON.parse(itemInCart)
        if(itemInCart){
            const counterElemnt=itemInCart.querySelector('[data-counter]')
            counterElemnt.innerHTML=parseInt(counterElemnt.innerHTML)+parseInt(+1)
        }
        else{
            let cartItemHTML=`<div class="item-list-basket" data-id=${productsInfo.id}>
            <div class="img-item_basket">
                <img src="${productsInfo.imgSrc}" alt="">
                <div class="info-item-basket">
                    <h4>${productsInfo.title}</h4>
                    <p>Ціна:<span class="item-price">${productsInfo.price}</span> Грн</p>
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
                <p data-priceOne>0</p>
                </div>
            </div>
            <img class="btn_delete" data-delet="delete" src="image/delete-basket.svg" title="delete">
        </div>`;
        let htmlObject = document.createElement('li');
        htmlObject.innerHTML=cartItemHTML
        htmlObject.classList.add('bloks-basket-item')
        cartWrapper.insertAdjacentElement('beforeend', htmlObject)
            
        }

        //статус корзины
        toggleCartStatus()

        calcCartPrice()

        calcOneCard()

        alertAdd()
    }
    
})
// console.log(querySelector('[data-amount]'))

//кнопка выдалення товару
window.addEventListener('click', function (deletBtn) {
    if(deletBtn.target.dataset.delet==="delete"){
        deletBtn.target.closest('.bloks-basket-item').remove()
        toggleCartStatus()

        calcCartPrice()
    }
})

//підрахунок кількості шт 
function calcOneCard() {
    const cartItem=document.querySelectorAll('.bloks-basket-item');
    cartItem.forEach(function(itm){
        let a=itm.querySelector('[data-counter]')
        let priceOne=itm.querySelector('.item-price')
        let pricelast=itm.querySelector('[data-priceOne]')
        let final=parseInt(a.innerText)*parseInt(priceOne.innerText)
        pricelast.innerText=final
    })
}


//пустий кошик
function toggleCartStatus(){
    const itemWrapper=document.querySelector('.wraper_list-basket');
    const cartEmpty=document.querySelector('[data-cart-empty]')
    const btnOrder=document.querySelector('.order')

    let countItem=document.querySelectorAll('.count-items-buy')
    countItem.forEach(function(countItm){
        countItm.innerText=itemWrapper.children.length
    })
    // console.log(itemWrapper.children.length)
    
    if(itemWrapper.children.length>0){
        
        // btnOrder.classList.remove('active')
        btnOrder.classList.add('active')
        cartEmpty.classList.add('hide')
    }else{
        cartEmpty.classList.remove('hide')
        btnOrder.classList.remove('active')
    }     
}

//счетчик цены

function calcCartPrice(){
    const cartItem=document.querySelectorAll('.bloks-basket-item');
    let innerPrice=document.querySelectorAll('.total-price');
    let totalPrice=0;

    cartItem.forEach(function (item) {
        const amountEL=item.querySelector('[data-counter]');
        const priceEL=item.querySelector('.item-price');

        const currentPrice=parseInt(amountEL.innerText)*parseInt(priceEL.innerText)

        totalPrice+=currentPrice
        
    })
    innerPrice.forEach(function(price) {
        price.textContent=totalPrice  
    });
}

window.addEventListener('click',function(itm){
    if(itm.target.hasAttribute('data-info')){
        const childrenInfo=itm.target.closest('.catalog-item-list') 
        const saveLocalItem={
            id:childrenInfo.dataset.id,
            imgSrc:childrenInfo.querySelector('.product-img').getAttribute('src'),
            title:childrenInfo.querySelector('.item-title').innerText,
            itemIncount:childrenInfo.querySelector('[data-amount]').innerText,
            price:childrenInfo.querySelector('[data-price]').innerText
        }

        localStorage.setItem('saveLocalItem',JSON.stringify(saveLocalItem))
    }  
})
function alertAdd(){
    let alert=document.querySelector('.alert')
    alert.classList.add('active')
    setTimeout(function (){
        alert.classList.remove('active')
    },2000)
}
