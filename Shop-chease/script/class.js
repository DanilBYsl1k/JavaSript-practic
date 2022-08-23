// console.log(data.length)

class Catalogs{
    constructor(cards){
        this.cards=cards
        this.cards=data
    }
    as(){
        let ul=document.createElement('ul')
        document.querySelector('.cards-wraper').appendChild(ul)
        ul.classList.add('list-cards')
        for(let key in this.cards){
            let li=document.createElement('li')
            li.classList.add('card')
            li.classList.add(this.cards[key].class)
            li.setAttribute('data-id',this.cards[key].id)
            li.setAttribute('data-rating',this.cards[key].rating)
            li.setAttribute('data-price',this.cards[key].price)
            li.innerHTML=
            `<a href="blank.html">
            <div class="link-card">
                <img src="${this.cards[key].img}" alt="">  
                <p class="title-card">${this.cards[key].name}</p>
            </div>
            </a>  
            <div class="price-card"><p>${this.cards[key].price}грн/ 1 шт.</p><button class="button" data-buy="add">Добавить</button></div>
            `
            document.querySelector('.list-cards').appendChild(li)
            // console.log(this.cards[key])
        }
        return ul
    }
}



const aboba=new Catalogs()

aboba.as()