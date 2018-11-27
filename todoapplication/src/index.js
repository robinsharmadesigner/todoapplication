

var xmlhttp = new XMLHttpRequest();


xmlhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);

        let x= document.getElementsByClassName("removejtask");
         for (let i=0; i<x.length;i++){

       x[i].addEventListener('click', function(){
           x[i].parentElement.style.display="none";       
        });
        
    }

    let y= document.getElementsByTagName('li');
         for (let i=0; i<y.length;i++){

       y[i].addEventListener('click', function(){
           if(y[i].style.textDecoration == ""){
            y[i].style.textDecoration="line-through";
           }
           else if(y[i].style.textDecoration == "line-through"){
            y[i].style.textDecoration="";
           }
                  
        });

    }
    }
};

xmlhttp.open("GET", "data.json", true);

xmlhttp.send();

function myFunction(arr) {
    
    for(let i = 0; i < arr.length; i++) {
       let title = arr[i].title ;
       let todoitem = arr[i].todoitem;
       let author = arr[i].author ;
       let date = arr[i].date;

    addJsonTask(title, todoitem, author, date);

    }

}

function addJsonTask(title, todoitem, author, date){
   
    var el = document.createElement('div');
    var ul = document.createElement('ul'); 
    ul.setAttribute('class', 'jsonULPad');
    ul.innerHTML='';  

    for (let i=0; i<todoitem.length;i++){
        var task = document.createElement('li');
        task.innerHTML = todoitem[i] + '<span class="removejtask" id="remove">x</span>';
        task.children[0].addEventListener('click', removeTask);
        

        ul.appendChild(task);
        el.appendChild(ul);
    }

    el.innerHTML = '<div class="text"> <div class="removejson">x</div>' + title + '<input type="text" id="taskText"><button id="addTaskBtn">+</button>' + '<br>Author: ' + author  + 
                    '<br>Date:' + date  + '<br>Task:' + el.innerHTML + '</div>'; 

    document.getElementById('divOut').appendChild(el);
    el.children[0].children[0].addEventListener('click', removeTitle);
    el.children[0].children[2].addEventListener('click', addNewTaskJson);

    function addNewTaskJson(ev){
        let task = ev.target.parentNode.children[1];
        let uli = document.createElement('ul');
        let li = document.createElement('li');
        
        li.innerHTML= task.value + '<span id="remove">x</span>';
       
        uli.appendChild(li);
        uli.setAttribute('class', 'jsonULPad');
        li.addEventListener('click', checkTask);
        li.children[0].addEventListener('click', removeTask);
        
        ev.target.parentNode.appendChild(uli);
        ev.target.parentNode.children[1].value='';
    } 
}

const uname = "Byte Me";
let date = new Date();

let date1 = date.getDate();
let date2 = date.getMonth() + 1;
let date3 = date.getFullYear();

let addTodoListBtn = document.getElementById('addListBtn');
let listTitle = document.getElementById('inputTitleText');
addTodoListBtn.addEventListener('click', addTodoList);

function addTodoList(){
	let list = document.createElement('div');
	list.setAttribute('id', 'manual');
    list.innerHTML=   '<span id=removeTitle>x</span>' + inputTitleText.value + '<input type="text" id="taskText"> <button id="addTaskBtn">+</button> <br>' + "Author:" + uname + `<br>` + "Date:"  + date1 + "/" + date2 + "/" + date3 + `<br>` + "Task:" + `<br>` ;
    
    list.children[0].addEventListener('click', removeTitle);
    list.children[2].addEventListener('click', addTask);
    
    document.getElementById('divOut').appendChild(list);

    document.getElementById('inputTitleText').value='';
    
}

function addTask(ev){
    let task = ev.target.parentNode.children[1];
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    
    li.innerHTML= task.value + '<span id="remove">x</span>';
    
    ul.appendChild(li);
    li.addEventListener('click', checkTask);
    li.children[0].addEventListener('click', removeTask);

    ev.target.parentNode.appendChild(ul);

    // document.getElementById('taskText').value='';
    ev.target.parentNode.children[1].value='';

}

function removeTask(ev){
    let task = ev.target.parentNode.parentNode;
    task.removeChild(task.children[0]);
}

function removeTitle(ev){
    ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
}

function checkTask(ev){
    ev.target.classList.toggle("checked");
}
    document.getElementById("uname").innerHTML = uname;


