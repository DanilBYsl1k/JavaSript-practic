let start=document.querySelector('[data-start]')
let end=document.querySelector('[data-end]')
let remove=document.querySelector('[data-Remove]')
let body=document.querySelector('body')
let intervalbtn=document.querySelector('[data-Interval]')
let btnClear=document.querySelector('[data-clear]')


let millisecond=00,
    second=00, 
    minuts=00,
    hour=00,
    interval


let elemHour=document.querySelector('.hour');
let elemMinuts=document.querySelector('.minut')
let elemSecond=document.querySelector('.second')
let elemMillsecond=document.querySelector('.millsecond')


function startTimer() {
    millisecond++
    if(millisecond<9){
        elemMillsecond.innerText='0'+millisecond
    }
    if(millisecond>10){
        elemMillsecond.innerText=millisecond
    }
    if(millisecond>99){
        second++
        elemSecond.innerText="0"+second;
        millisecond=0
        elemMillsecond.innerText='0'+millisecond
    }

    //sec
    if(second>9){
        elemSecond.innerText=second;
    }
    if(second>59){
        minuts++
        elemMinuts.innerText="0"+minuts;
        second=0
        elemMillsecond.innerText='0'+second
    }
    //min
    if(minuts>9){
        elemMinuts.innerText=minuts;
    }
    if(minuts>59){
        hour++
        elemHour.innerText="0"+hour;
        minuts=0
        elemMinuts.innerText='0'+minuts
    }
}

start.addEventListener('click',function(){
    clearInterval(interval)
    interval=setInterval(startTimer,10)
    console.log()
})
end.addEventListener('click',function(){
    clearInterval(interval)
})
remove.addEventListener('click',function(){
    clearInterval(interval)
    millisecond=00,
    second=00, 
    minuts=00,
    hour=00,
    elemHour.textContent='0'+0
    elemMinuts.textContent='0'+0
    elemSecond.textContent='0'+0
    elemMillsecond.textContent='0'+0
})
intervalbtn.addEventListener('click',function(){
    createElem()
})

function createElem(){
    let l=document.createElement('div')
    l.classList.add('contr')
    l.innerHTML=`
        <div class="box">
            <span>${elemHour.textContent}</span>:
            <span>${elemMinuts.textContent}</span>:
            <span>${elemSecond.textContent}</span>:
            <span>${elemMillsecond.textContent}</span>  
        </div>
    <img data-delete class="basket" src="delete-basket.svg" alt="">

`
    document.querySelector('.check-point_interval').insertAdjacentElement('afterbegin', l)
}

btnClear.addEventListener('click',function(){
    clearList()
})

function clearList(){
    let qw=document.querySelectorAll('.contr')
    for(let i=0; i<qw.length; i++){
        qw[i].remove()
    }
    // if(qw.length===0){
        // console.log('a')
    // }
}
window.addEventListener('click',function(itm){
    if(itm.target.hasAttribute('data-delete')){
        itm.target.closest('.contr').remove()
    }
})
