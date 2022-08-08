// Находим элементы на странице
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');
const deleteAll=document.querySelector('#removeTasks');
const outChek=document.querySelector('#doneTask')
const removeDoneTasks=document.querySelector('#removeDoneTasks')

let tasks = [];
if(localStorage.getItem('tasks')){
	tasks=JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(task => {
	const cssList=task.done ? 'task-list--done':'';//(1-условие)newTask ? if true : if false тернарный оператор

	const taskHtml=
	`
	<li id="${task.id}" class="list-group-item d-flex justify-content-between task-item ${cssList}">
					<span class="task-title ">${task.text}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>
	`
	tasksList.insertAdjacentHTML('beforeend',taskHtml)
});

checkEmptyList()

form.addEventListener('submit',addTask)

function addTask(e){
	e.preventDefault()
	const taskText=taskInput.value

	const newTask={
		id:Date.now(),//даём айдишник соответсвенно свеременем
		text:taskText,
		done:false
	};
	tasks.push(newTask)

	const cssList=newTask.done ? 'task-list--done':'';//(1-условие)newTask ? if true : if false тернарный оператор

	const taskHtml=
	`
	<li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item ${cssList}">
					<span class="task-title ">${newTask.text}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>
	`
	tasksList.insertAdjacentHTML('beforeend',taskHtml)


	taskInput.value=''
	taskInput.focus()

	checkEmptyList()

	saveLocal()
}

tasksList.addEventListener('click',btnRemove)

tasksList.addEventListener('click',Done)



function btnRemove(evt){
	if(evt.target.dataset.action!=='delete'){
		return
	}
	if(evt.target.dataset.action==='delete'){
		const parentNode=evt.target.closest('li')

		const id=Number(parentNode.id)

		const index=tasks.findIndex(function(task){
			if(task.id===id){
				return true
			}
		})
		tasks.splice(index, 1)

		parentNode.remove()
	}
	checkEmptyList()

	saveLocal()
}

function Done(evt){
	if(evt.target.dataset.action!=='done'){
		return
	}
	if(evt.target.dataset.action==='done'){
	const parentNode=evt.target.closest('li')
	parentNode.classList.toggle('task-list--done')
	const id=Number(parentNode.id);
	const task=tasks.find(function(task){
		if(task.id===id){
			return true
		}
	})
		task.done=!task.done

	
	}
	saveLocal()
}


function checkEmptyList(){
	if(tasks.length===0){
		const emptyListHTML=
		`
		<li id="emptyList" class="list-group-item empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<div class="empty-list__title">Список пустий</div>
				</li>
		`
		tasksList.insertAdjacentHTML('afterbegin',emptyListHTML)
	}
	if(tasks.length>0){
		const emptyListEl=document.querySelector('#emptyList')
		emptyListEl ? emptyListEl.remove():null
	}
}
function saveLocal(){
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

deleteAll.addEventListener('click',function(){
	tasks=[]
	saveLocal()

	let mark=document.querySelectorAll('.list-group-item')

	for(let i=0; i<mark.length; i++){
		mark[i].remove()
	}
	
	checkEmptyList()
})
outChek.addEventListener('click',function(){
	let mark=document.querySelectorAll('.list-group-item')
	for(let i=0; i<mark.length; i++){
		
		if(mark[i].classList.contains('task-list--done')){
			// outChek.innerText='Показать все'
		}
		else{
			mark[i].classList.toggle('none')
			
		}
	}
	console.log()
})


removeDoneTasks.addEventListener('click',function(){
	let mark=document.querySelectorAll('.list-group-item')
	for(let i=0; i<mark.length; i++){
		if(mark[i].classList.contains('task-list--done')){
			const id=Number(mark[i].id)
	
			const index=tasks.findIndex(function(task){
				if(task.id===id){
					// console.log(task.id)
					return true
				}
			})
			tasks.splice(index, 1)
			
			mark[i].remove()
		}
	}
	saveLocal()
	checkEmptyList()

})
