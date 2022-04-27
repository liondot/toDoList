let input = document.querySelector('#input');
let addBtn = document.querySelector('#add_button');
let taskList = []

addBtn.addEventListener('click', addTask)

function addTask() {
  let inputValue = input.value;
  taskList.push(inputValue);
  render();
  console.log(taskList)
}

function render() {
  let resultHTML = ""
  for(let i = 0; i<taskList.length; i++) {
    resultHTML += `
    <div id="task_board">
      <div class="task_list">
        <div>${taskList[i]}</div>
        <div>
          <button>check</button>
          <button>delete</button>
        </div>
      </div>
    </div>
    `
  }
  document.querySelector('#task_board').innerHTML = resultHTML;
}