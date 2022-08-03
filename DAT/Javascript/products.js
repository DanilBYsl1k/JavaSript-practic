//catalog
let QuantityGoods=document.querySelector('.Quantity-of-goods');
QuantityGoods.innerHTML=' '+data.length


let low=document.querySelector('.low_and_height');
let height=document.querySelector(".height_and_low")
let DropDownBtnChange=document.querySelectorAll('.button-catalog')
let wrapSelectPrice=document.querySelector('.wrap-change-select-price');
let allbtn=document.querySelector('.popular')

low.addEventListener('click',function (){
    mySort('data-price')
})
height.addEventListener('click', function() {
    mySortHeight('data-price')

})
allbtn.addEventListener('click',function(){
    mySort('data-rating')
})

//добавлять клаас 
document.querySelector('.first_select-price-btn').addEventListener('click',function(){
    wrapSelectPrice.classList.toggle('active')
})
//зміна тексту при нажаті 
DropDownBtnChange.forEach(element => {
    element.addEventListener('click',function(){
        document.querySelector('.inner-text-on-change').innerHTML=this.innerText
    })
});
//закрытие блока при нажатии и не на него
document.addEventListener('click', function(e){
    if(e.target!==document.querySelector('.first_select-price-btn')){
        wrapSelectPrice.classList.remove('active');
    }
})

//функции для сортировки товара
function mySort(sortType) {
    let catalogUl=document.querySelector('.catalog-list');
    for (let i = 0; i < catalogUl.children.length; i++) {
        for (let k = i; k < catalogUl.children.length; k++) {
            if (+catalogUl.children[i].getAttribute(sortType)>+catalogUl.children[k].getAttribute(sortType)) {
                replacedNode=catalogUl.replaceChild(catalogUl.children[k], catalogUl.children[i]);
                insertAfter(replacedNode, catalogUl.children[i]);
            }
        }
    }
}

function mySortHeight(sortType) {
    let catalogUl=document.querySelector('.catalog-list');
    for (let i = 0; i < catalogUl.children.length; i++) {
        for (let k = i; k < catalogUl.children.length; k++) {
            if (+catalogUl.children[i].getAttribute(sortType)<+catalogUl.children[k].getAttribute(sortType)) {
                replacedNode=catalogUl.replaceChild(catalogUl.children[k], catalogUl.children[i]);
                insertAfter(replacedNode, catalogUl.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//радио инпут

function app(){
    const btn=document.querySelector('.all-clear')
    const cards=document.querySelectorAll('.catalog-item-list')


    function filter(category,items){
        items.forEach(function(item){
            const itemFiletered=!item.classList.contains(category)
            const isShowAll=category==="all"
            if(itemFiletered && !isShowAll){
                item.classList.add('hide')
            }
            else{
                item.classList.remove('hide')
            }
        })
    }

    btn.addEventListener('click', function(){
            filter(btn.dataset.filter, cards)
        })

    const radioFiltr=document.querySelectorAll('.radio-filter')


radioFiltr.forEach(element => {
    element.addEventListener('click',function(){
        for(let i=0; i<radioFiltr.length; i++){
            if(radioFiltr[i].checked){
                filter(element.dataset.filter, cards)
            }
        }
    })
});
}

app()

//phone

let filtrOpen=document.querySelector('.filtr-btn');
let filters=document.querySelector('.filters-phone')


filtrOpen.addEventListener('click',function(){
    filters.classList.add('phone-nav_active')
    bgc.classList.add('active')
})

//заводим в локал сторейдж





// сохранённая инфо в локал сторейдже 