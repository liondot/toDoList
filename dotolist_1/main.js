// ++++to do list 로직 정리 ++++
// 유저가 값을 입력한다. 
// + 버튼을 클릭하면, 할일이 추가된다. 
// 유저가 del버튼 누르면 삭제된다. 
// check버튼 누르면 할일완료, line-through 생성
//  1. check버튼을 클릭하는 순간 true를 false로바꿔주기
//  2. true이면 끝난걸로 간주하고 밑줄 보여주기 
//  3. false이면 안끝난걸로 간주하고 그대로 
// 진행중 끝남 탭을 누르면, 언더바가 이동
// 완료탭과 진행중 탭에 분류되어진다. 
// 전체 탭을 누르면 전체 아이템으로 돌아옴 

let taskInput = document.getElementById('task_input');
let addBtn = document.getElementById('add_button');
let task = document.querySelector('.task')
let tabs = document.querySelectorAll('.task_tabs div')
let mode = ''
let taskList = []


addBtn.addEventListener("click", addTask);

for(let i = 1; i< tabs.length; i++) {
  tabs[i].addEventListener("click", function(event){filter(event)})
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task);
  console.log(taskList);
  render()
}

function render() {
  let resultHTML = '';
  for (let i = 0; i < taskList.length; i++) {

    if(taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
      <div class="task-done">${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
      </div>
    </div>`
    } else {
      resultHTML += `<div class="task">
      <div>${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
        <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
      </div>
    </div>`;
    }

  }
  document.getElementById("task_board").innerHTML = resultHTML;
}


function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
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

function filter(event) {
  mode = event.target.id;
  let filterList = []
  if(mode == 'all') {
    render()
  } else if (mode == 'ongoing') {
    for(let i = 0; i<taskList.length; i++) {
      if(taskList[i].isComplete == false){
        filterList.push(taskList[i])
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

