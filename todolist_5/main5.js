let inputArea = document.querySelector('#input_area');
let addBtn = document.querySelector('#addBtn');
let taskList = [];

addBtn.addEventListener('click', addTask);

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
  let resultHTML = ''
  for (let i = 0; i < taskList.length; i++) {
    if(taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task_done">${taskList[i].taskContents}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">delete</button>
      </div>
    </div>`
    } else {
      resultHTML += `
      <div class="task">
            <div>${taskList[i].taskContents}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">check</button>
              <button onclick="deleteTask('${taskList[i].id}')">delete</button>
            </div>
          </div>`
    }
   
  }


  document.querySelector('.task_list').innerHTML = resultHTML;
}

function toggleComplete(id){
  console.log("id :", id)
  for(let i = 0; i<taskList.length; i++) {
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
    }
  }
  render()
}

function deleteTask(id){
  console.log('id', id)
  for(let i = 0; i<taskList.length; i++){
    if(taskList[i].id == id) {
      taskList.splice(i, 1)
    }
  }
  render()
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36). substr(2,9);
}