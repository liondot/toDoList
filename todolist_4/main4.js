let inputArea = document.querySelector("#input_area");
let addBtn = document.querySelector("#add_button");
let taskList = [];

// +버튼 누르면 list 생성 됨 
addBtn.addEventListener('click', addTask)


function addTask() { 
  let inputValue = inputArea.value;
  taskList.push(inputValue)
  render()
  console.log(taskList)
}

// addTask 부분을 ui로 표현해 줘야 함 
function render(){
  let resultHTML = '';
  for(let i = 0; i<taskList.length; i++){
    resultHTML += `<div class="task">
    <div>${taskList[i]}</div>
    <div>
      <button>check</button>
      <button>delete</button>
    </div>
  </div>`
  }

  document.querySelector('.task_board').innerHTML = resultHTML;
}
