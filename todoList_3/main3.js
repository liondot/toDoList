let input = document.querySelector('#input');
let addBtn = document.querySelector('#add_button');
let taskList = []

addBtn.addEventListener('click', addTask)

function addTask() {
  let task = {
    id :randomIDGenerate(),
    taskContents : input.value,
    isComplete : false
  }
  taskList.push(task);
  render();
  console.log(taskList)
}

function render() {
  let resultHTML = ""
  for(let i = 0; i<taskList.length; i++) {
    resultHTML += `
    <div id="task_board">
      <div class="task_list">
        <div>${taskList[i].taskContents}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">check</button>
          <button>delete</button>
        </div>
      </div>
    </div>
    `
  }
  document.querySelector('#task_board').innerHTML = resultHTML;
}

function toggleComplete(id){
  console.log("id", id);
  for(let i = 0; i<taskList.length; i++){
    if(taskList[i] == id){
      taskList[i].isComplete = true;
      break;
    }
  }
  console.log(taskList)
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}