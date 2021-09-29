var listHolder = document.getElementById('list-holder');
var taskInput = document.getElementById('task-input');
var toDo = document.getElementById('to-do');
var completedTask = document.getElementById('completed');


function addTask(){
   
    if (taskInput.value){
        var divNew = document.createElement('div');
        divNew.classList.add('tasks');

        var newTask = document.createElement('p');
        newTask.classList.add('new-task');
        newTask.innerHTML = taskInput.value;
        newTask.style.fontSize = '20px';

        var doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.innerHTML = 'Done';
        doneBtn.onclick = checkTask;
        
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML= 'Delete';
        deleteBtn.onclick = deleteTask;
        
        var toggleTask = document.createElement('input');
        toggleTask.type = 'checkbox';
        toggleTask.onclick = moveTask;
        toggleTask.checked = false;
        toggleTask.id = 'checkbox';
        

        divNew.append(toggleTask);
        divNew.append(newTask);
        divNew.append(doneBtn);
        divNew.append(deleteBtn);
        
        toDo.append(divNew);
    
    
        taskInput.value = ""
    }
    
}

function moveTask(){
    var nodeList = this.parentNode;
    var toggleTask = document.getElementById('checkbox');
    if (toggleTask.checked == true){
        completedTask.append(nodeList);
    } else {
        toDo.append(nodeList);
    }
    
}

function checkTask(){
    //when doneBtn is clicked, divNew is removed
    var nodeList = this.parentNode;
    // console.log(nodeList)
    var nodeFinder = nodeList.querySelector('button');
    nodeFinder.remove();
    completedTask.append(nodeList);
           
}
function deleteTask(){
    var nodeList = this.parentNode; 
    // toDo.remove(nodeList); to remove the parent of the parent
    // completedTask.removeChild(nodeList);
    nodeList.remove(); //nodeList is the Parent of the deleteBtn so just using nodeList is enough to delete the whole div
}

