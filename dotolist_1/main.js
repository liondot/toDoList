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
let taskList = []

addBtn.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task);
  console.log(taskList);
  rander()
}

function rander() {
  let resultHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i].taskContent}</div>
    <div>
      <button onclick="toggleComplete('${taskList[i].id}')">check</button>
      <button>Delete</button>
    </div>
  </div>`;
  }
  document.getElementById("task_board").innerHTML = resultHTML;
}


function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = true
      break;
    }
  }
  console.log(taskList)
}

function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}