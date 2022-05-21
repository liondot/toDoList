// 1. 유저가 값을 입력 
// +버튼을 클릭하면 할일이 추가 된다. 
// delete버튼을 누르면 할일이 사라진다. 
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다. 
// 1. check버튼을 클릭하는 순간 true false 
// 2. true면 완료된걸로 간주하고 밑줄 
// 3. false면 안끝난걸로 간주하고 그대로 
// 진행중 끝남 탭을 누르면 바가 이동한다. 
// 끝난탭은, 끝난 아이템만 진행중텝은 진행중인 아이템만 나온다. 
// 전체탭을 누르면 다시 전체아이템으로 돌아옴 


let taskInput = document.getElementById("task_input");
let addBtn = document.getElementById("add_btn")
let taskList = []
addBtn.addEventListener("click", addTask);

function addTask() {
  let task = {
    taskContent: taskInput.value,
    isComplete: false,
    id: rendomIDGenerate()
  }
  taskList.push(task)
  render()
}

function render() {
  let resultHTML = ''
  for(let i = 0; i<taskList.length; i++){
  if(taskList[i].isComplete == true) {
    resultHTML += `
    <div class="task">
      <div class="task_done">${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
      </div>
    </div>
    `
  } else {
    resultHTML += `
      <div class="task">
         <div>${taskList[i].taskContent}</div>
         <div>
           <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
           <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
         </div>
       </div>`
  }
}
  document.getElementById("task_board").innerHTML = resultHTML
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render()
  console.log(taskList)
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render()
}

function rendomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}