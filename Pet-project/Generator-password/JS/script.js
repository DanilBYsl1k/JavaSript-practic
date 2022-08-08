
let letters=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let Numb=[1,2,3,4,5,6,7,8,9,0]
let SumboArrayl=["!","@","#","$","%","^","&","*","(","~",")","_","+","|","}","{",">",":","<","*",",",".","/","'",";","[","]",";","}"]



let inputText=document.querySelector('.text')
let passwordLength=document.querySelector('.out-length')
const btn=document.querySelector('.btn')
let range=document.querySelector('.range')
let out=document.querySelector('.out')
let Reliability=document.querySelector('.Reliability')

let chekNumber=document.querySelector('#number')
let lowerCase=document.querySelector('#lowerCase')
let upPercase=document.querySelector('#upPercase')
let Symbol=document.querySelector('#Symbol')

btn.addEventListener('click',function(){
    copy()
    alertAdd()
})
range.addEventListener('input',function(){
    passwordLength.innerHTML=this.value+' довжина пароля'
    generatorPasswor()
    Reliability.innerHTML=""
    let string=inputText.value
    Reliability.style.borderBottom='none'
    if(string.length>=5){
        Reliability.innerHTML="Слабкий пароль"
        Reliability.style.borderBottom='3px solid red'
    }
    if(string.length>=10){
        Reliability.innerHTML="надійний пароль"
        Reliability.style.borderBottom='3px solid dodgerblue'
    }
    if(string.length>=15){
        Reliability.innerHTML="Більш надійний пароль"
        Reliability.style.borderBottom='3px solid chartreuse'
    }
    if(string.length>=18){
        Reliability.innerHTML="Дуже надійний пароль"
        Reliability.style.borderBottom='3px solid green'
    }
})


function generatorPasswor(){
    voidArray=[]
    colectArray=[]
    if(chekNumber.checked){
        colectArray=colectArray.concat(Numb)
    }
    if(lowerCase.checked){
        colectArray=colectArray.concat(letters)
    }
    if(upPercase.checked){
        for (let i = 0; i < letters.length; i++) {
            const element = letters[i].toUpperCase();
            colectArray=colectArray.concat(element)  
        }
    }
    if(Symbol.checked){
        colectArray=colectArray.concat(SumboArrayl)
    }
    for(let i=0; i<range.value; i++){
        let result=Math.floor(Math.random()*colectArray.length)
        voidArray.push(colectArray[result])
    }
    inputText.value=voidArray.join('')

}




function copy() {
    inputText.select();
    document.execCommand("copy");
}


function alertAdd(){
    let alert=document.querySelector('.hiden-text')
    alert.classList.add('active')
    setTimeout(function (){
        alert.classList.remove('active')
    },1000)
}

