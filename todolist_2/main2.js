// 1. 유저가 값을 입력한다. 
// 2. +버튼을 클릭하면 할일이 추가된다. 
// delete 버튼을ㅇ 누르면 할일이 삭제된다 
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다. 
// 진행중 끝남 탭을 누르면, 언더바가 이동한다. 
// 끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만 
// 전체탭을 누르면 다시 전체아이템으로 돌아옴 

let inputArea = document.getElementById("input_area");
console.log(inputArea)
let addBtn = document.querySelector("#add_button");
let taskList = [];
addBtn.addEventListener("click", addTask) 


function addTask() {
  let task = {
    id :radomIDgenerate(),
    taskContents : inputArea.value,
    isComplete: false
  }
  taskList.push(task);
  render()
  console.log(taskList)
}
function render() {
  let resultHTML = ''
  for(let i = 0; i<taskList.length; i++) {
    if(taskList[i].isComplete == true) {
      resultHTML += ` <div id="task_board">
    <div class="task_list">
      <div class="task_done">${taskList[i].taskContents}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-arrow-rotate-left"></i></button>
        <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  </div>
    `
    } else {
      resultHTML += ` <div id="task_board">
      <div class="task_list">
        <div>${taskList[i].taskContents}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
          <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    </div>
      `
    }
  }

  document.querySelector('#task_board').innerHTML = resultHTML;
}


function toggleComplete(id) {
  for (let i = 0 ; i<taskList.length; i++) {
    if(taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render()
  console.log(taskList)
}

function deleteTask(id) {
  for(let i = 0; i<taskList.length; i++) {
    if(taskList[i].id == id) {
      taskList.splice(i,1)
      break;
    } 
  }
  render()
}

function radomIDgenerate(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

