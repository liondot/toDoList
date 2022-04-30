let inputArea = document.querySelector('#input_area');
let addBtn = document.querySelector('#addBtn');
let taskList = [];
let tabs = document.querySelectorAll(".tabs a");
let mode = ""
let filterList = []


addBtn.addEventListener('click', addTask);

for(let i = 0; i<tabs.length; i++){
  tabs[i].addEventListener("click", function(e) {
    filter(e)
  })
}

function addTask() {
  task = {
    id: randomIDGenerate(),
    taskContents: inputArea.value,
    isComplete: false

  }
  taskList.push(task)
  console.log(taskList)
  render()
}

function render() {
  let list = []
  if(mode == "all"){
    list = taskList
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList
  }

  let resultHTML = ''
  for (let i = 0; i < list.length; i++) {
    if(list[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task_done">${list[i].taskContents}</div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')">check</button>
        <button onclick="deleteTask('${list[i].id}')">delete</button>
      </div>
    </div>`
    } else {
      resultHTML += `
      <div class="task">
            <div>${list[i].taskContents}</div>
            <div>
              <button onclick="toggleComplete('${list[i].id}')">check</button>
              <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
          </div>`
    }
   
  }


  document.querySelector('.task_list').innerHTML = resultHTML;
}

function toggleComplete(id){
  for(let i = 0; i<taskList.length; i++) {
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
    }
  }
  render()
}

function deleteTask(id){
  for(let i = 0; i<taskList.length; i++){
    if(taskList[i].id == id) {
      taskList.splice(i, 1)
    }
  }
  filter()
}

function filter(e){
  console.log("filter 클릭", e.target.id);
  mode = e.target.id
  if(mode == all) {
    render()
  } else if (mode == ongoing ) {
    for(let i = 0; i<taskList.length; i++){
      if(taskList[i].isComplete == false) {
        filterList.push(taskList[i])
      }
    }
  render()
  } else if (mode == done) {
    for(let i = 0; i<taskList.length; i++){
      if(taskList[i].isComplete == true) {
        filterList.push(taskList[i])
    }
  }
}
filter();

}
function randomIDGenerate() {
  return "_" + Math.random().toString(36). substr(2,9);
}