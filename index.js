function addTask(){
    let buton = document.getElementById('taskbtn');
    let sidebar = document.getElementsByClassName('sidebar')[0];
    let side = document.getElementById('actionside');
    let inpfield = document.getElementById('taskadd');
    let taskholder = document.getElementById('taskholder');
    
    taskholder.style.display = 'flex';
    buton.style.display = 'none';
    side.style.display = 'none';
    sidebar.style.maxHeight = "fit-content";
    inpfield.style.display = 'flex';

}
function reload(){
    window.location.reload();
}

function createTask(){
    const title = document.getElementById('titleInp');
    const desc = document.getElementById('descInp');
    const setDate = document.getElementById('setDateInp');
    const dueDate = document.getElementById('dueDateInp');
    const taskSubmit = document.getElementById('taskSubmit');
    class task {
        
        constructor(title,desc,setDate,dueDate){
            this.title = title.value;
            this.desc = desc.value;
            this.setDate = setDate.value;
            this.dueDate = dueDate.value;

        }
    }
    let currTask = new task(title,desc,setDate,dueDate);
    console.log(currTask);
    alert(`${currTask.title} \n${currTask.desc}\n${currTask.setDate}\n${currTask.dueDate}`);
    console.log("Done");
    console.log(currTask);
    if (currTask.title !== ''){
        alert(`Title: ${currTask.title} \nDescription: ${currTask.desc}\nSet Date: ${currTask.setDate}\nDue Date: ${currTask.dueDate}`);
         
    }
    else{
        alert("Title Required");
    }
}
let body = document.getElementsByTagName('body')[0];
body.addEventListener('keypress', (event) => {
    if (event.key === " "){
        addTask();
    }
})

let taskTick = document.getElementById('taskimg');
taskTick.addEventListener("click", function(){
    // if (taskTick.style.backgroundColor === "#ffffff"){
    //     taskTick.style.backgroundColor = "#000000";
    // }
    // else{
    if (taskTick.style.backgroundColor !== "black"){
        taskTick.style.backgroundColor = "black";
    }
    else{
        taskTick.style.backgroundColor = "white";
    }
    // }
})