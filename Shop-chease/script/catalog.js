let filtrLine=document.querySelector('.wraper-filters-line')
let filtractive=document.querySelector('.filter-button')

filtractive.addEventListener('click',function(){
    filtrLine.classList.toggle('active-filter')
})

document.querySelector('.big-price').addEventListener('click',function(){
    mySortHeight('data-price')
})
document.querySelector('.low-price').addEventListener('click',function(){
    mySort('data-price')
})
document.querySelector('.rate').addEventListener('click',function(){
    mySort('data-rating')
})

let catalogUl=document.querySelector('.list-cards');
function mySort(sortType) {

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


let search=document.querySelector('#search')

search.addEventListener('input',function(){
    let Val=search.value
    let cards=document.querySelectorAll('.cards-wraper li')
    if(Val!=''){
        cards.forEach(function(elem){
            if(elem.innerText.search(Val)==-1){
                elem.classList.add('hide')
            }
            else{
                elem.classList.remove('hide')
            }
        })
    }
    else{
        cards.forEach(function(elems){
            elems.classList.remove('hide')
        })
    }
})


const filterBox=document.querySelectorAll('.card')

document.querySelectorAll('.filtr-box').forEach(function(elem){
 elem.addEventListener('click',function(evt){
    //

    let filterClass=evt.target.dataset['filter'];

    filterBox.forEach(function(elem){
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass!=='all'){
            elem.classList.add('hide')
        }
    })
})
})



