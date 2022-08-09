



const headerContainer=document.querySelector('#header');
const listContainer=document.querySelector('#list');
const submitBtn=document.querySelector('#submit')


let score=0;
let questionIndex=0;

clearPage()//очищення сторінки
showQuestion()

function clearPage(){
    headerContainer.innerHTML=""
    listContainer.innerHTML=""
}

function showQuestion(){ 
    const headerTemplate=`<h2 class="title">%title%</h2>`
    const title=headerTemplate.replace('%title%', questions[questionIndex].question)//replace перезаписуем шо находиться внутри строки
    headerContainer.innerHTML=title
    let answerNumber=1;
    
    for(item of questions[questionIndex]['answers']){
        const questionTemplate=`
        <li>
            <label>
                <input type="radio" value="%number%" class="answer" name="answer" />
                <span>%Answers%</span>
            </label>
        </li>`
        let answerHTML=questionTemplate.replace('%Answers%',item)
        
        answerHTML=answerHTML.replace('%number%',answerNumber)
        listContainer.innerHTML+=answerHTML
        answerNumber++
    }
}


submitBtn.addEventListener('click',function(){
    checkAnswer()
})

function checkAnswer(){
    const checkedRadio=listContainer.querySelector('input[type="radio"]:checked')
    if(!checkedRadio){
        return
    }
    const userAnswer=parseInt(checkedRadio.value)
    if(userAnswer===questions[questionIndex].correct){
        score++
        console.log(score)
    }
    //проверяем это ласт вопрос или нет
    if(questionIndex!==questions.length-1){
        questionIndex++
        clearPage()
        showQuestion()
    }
    else{
        clearPage()
        resultQuiz()
    }
}


function resultQuiz() {
    const result=` <h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result%</p>`
    let title,message;
    
    if(score===questions.length){
        title='congratulation'
        message='пацаны вообще ребята'
    }else if((score*100)/questions.length>=50){
        title='Ну таке';
        message='aboba'
    }
    else{
        title='палямита';
        message='ти шо баран'
    }
    const finalMessage=result
                            .replace('%title%',title)
                            .replace('%message%',message)
                            .replace('%result%',score+' з '+questions.length  )
    headerContainer.innerHTML=finalMessage
    submitBtn.innerText='restart'
    submitBtn.addEventListener('click',function(){
        history.go()//обновляем страницу
    })
}

