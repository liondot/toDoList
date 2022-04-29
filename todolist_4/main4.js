let inputArea = document.querySelector("#input_area");
let addBtn = document.querySelector("#add_button");
let taskList = [];
let tabs = document.querySelectorAll(".task_tabs div")
let mode = "all"
let filterList = [];

// +버튼 누르면 list 생성 됨 
addBtn.addEventListener('click', addTask)

for(let i = 1; i<tabs.length; i++) {
  tabs[i].addEventListener('click', function (event) {
    filter(event)
  })
}


function addTask() { 
  task = {
    id : randomIDGenerate(),
    taskContents : inputArea.value,
    isComplete : false
  }
  taskList.push(task)
  inputArea.value = "";
  render()
}

// addTask 부분을 ui로 표현해 줘야 함 
function render(){
  let resultHTML = '';

  list = [];
  if(mode == "all"){
    list = taskList
  } else {
    list = filterList
  }

  for(let i = 0; i<list.length; i++){
    if(list[i].isComplete == true) {
    resultHTML += `<div class="task" id="${list[i]}">
    <div class="task_done">${list[i].taskContents}</div>
    <div>
      <button onclick="toggleComplete('${list[i].id}')">check</button>
      <button onclick="deleteTask('${list[i].id}')">delete</button>
    </div>
  </div>`
    } else { 
      resultHTML += `<div class="task" id="${list[i].id}">
      <div>${list[i].taskContents}</div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')">check</button>
        <button onclick="deleteTask('${list[i].id}')">delete</button>
      </div>
    </div>`
    }
  }

  document.querySelector('.task_board').innerHTML = resultHTML;
}

function toggleComplete(id){
  for(let i = 0; i<taskList.length; i++) {
    if(taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete
      break;
    }
  }
  filter()
}

function deleteTask(id) { 
  for(let i = 0; i<taskList.length; i++) {
  if(taskList[i].id == id) {
    taskList.splice(i, 1)
    break;
  }
}
filter()

}


function filter(event) {
  filterList = []
  if(event) {
    mode = event.target.id;
  }
  if(mode == "all") {
    render()
  } else if (mode == "ongoing"){
    for(let i = 0; i<taskList.length; i++) {
      if(taskList[i].isComplete == false) {
        filterList.push(taskList[i])
      }
    }
  } else if(mode == "done"){
    for(let i = 0; i<taskList.length; i++) {
      if(taskList[i].isComplete) {
        filterList.push(taskList[i])
      }
    }
  }
  render()
} 



function randomIDGenerate() {
  return "_" + Math.random().toString(36). substr(2,9);
}