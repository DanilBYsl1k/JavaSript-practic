class lastViewCard{
    constructor(lastCard){
        this.lastCard=lastCard
        this.lastCard=sessionStorage.getItem('SaveItems')
    }
    lastViewElem(){
        let robot=JSON.parse(this.lastCard)
        for (const key in robot) {
            let li=document.createElement('li')
            li.classList.add('card')
            li.setAttribute('data-id',robot[key].id)
            li.setAttribute('data-price',robot[key].price)
            li.innerHTML=
            `<a href="blank.html">
                    <div class="link-card">
                        <img src="${robot[key].img}" alt="">  
                        <p class="title-card">${robot[key].name}</p>
                    </div>
                    </a>  
                    <div class="price-card"><p>${robot[key].price}грн/ 1 шт.</p><button class="button" data-buy="add">Добавить</button></div>
                    `
                    document.querySelector('.slider-line').appendChild(li)
        }
    }
}

const lastViewCreate=new lastViewCard()
lastViewCreate.lastViewElem()