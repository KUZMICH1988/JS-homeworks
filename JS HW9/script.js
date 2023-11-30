
window.addEventListener('load', function(){
 
const createList = function () {

let body = document.body;
   
let div = document.createElement('div');
div.className = 'main';
body.appendChild(div);

let h1 = document.createElement('h1')
h1.className = 'name';
h1.innerHTML = 'To do list';
div.appendChild(h1);


let input = document.createElement('input')
input.className = 'task_name';
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Add task');
input.setAttribute('maxlength','25')
input.innerHTML = '';
div.appendChild(input);

let list = document.createElement('div');
list.className = 'list';
div.appendChild(list);

let ulElem = document.createElement('ul');
ulElem.setAttribute('class','ul');
document.querySelector('.list').appendChild(ulElem);


let button = document.createElement('button');
button.className = 'button';
button.innerHTML = 'Clear list'
div.appendChild(button);

}


const taskElem = function (textTask) {
    

    let liElem = document.createElement('li');
    liElem.setAttribute('class', 'li');
    document.querySelector('.ul').append(liElem);


    let checkElem = document.createElement('input');
    checkElem.setAttribute('id', 'check');
    checkElem.setAttribute('type', 'checkbox');
    checkElem.setAttribute('class','input_check');
    liElem.append(checkElem);

    let labelElem = document.createElement('label');
    labelElem.setAttribute('for', 'check');
    labelElem.setAttribute('class','label_check');
    labelElem.innerHTML = textTask;
    liElem.append(labelElem);

    let btnChange = document.createElement('button');
    btnChange.setAttribute('class', 'btn_redact')
    btnChange.innerHTML = '&#128396';
    liElem.append(btnChange);

    let btnDelet = document.createElement('button');
    btnDelet.setAttribute('class', 'btn_delete')
    btnDelet.innerHTML = '&#128465';
    liElem.append(btnDelet);

    btnChange.addEventListener('click', function(){
      redactTask(labelElem)
    } )
    
    btnDelet.addEventListener('click', function () {
      deletTask(liElem)
    })
        
}


const addTask = function() {
    document.querySelector('input').addEventListener('keyup', function(elem) {

      if (elem.keyCode === 13 && this.value.length > 0 ) {
        let val = this.value;
        let newVal = val.charAt(0).toUpperCase()+val.slice(1)
        taskElem(newVal);
        document.querySelector('.task_name').value = '';
        
      }
    });
};




const clearAll = function(){
document.querySelector('.button').addEventListener('click', function(){
    document.querySelector('.list').innerHTML='';
} )   
}


const redactTask = function(elem) {

  let question = prompt('Do you want to change the task?', elem.innerHTML );
      
  if (question === null || question.length == 0 ) return;

  else {
      let newQuestion = question.charAt(0).toUpperCase() + question.slice(1);
      elem.innerHTML = newQuestion;
  }
      
}
    
    

const deletTask = function(elem) {
  elem.remove();
  
}





 
  

function ToDoList() {

createList();
addTask();
clearAll();

}


ToDoList();




})

