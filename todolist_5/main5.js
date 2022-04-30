
let inputArea = document.querySelector('#input_area');
let addBtn = document.querySelector('#addBtn');
let taskList = [];

addBtn.addEventListener('click', addTask);

function addTask() {
let taskContents = inputArea.value;
taskList.push(taskContents)
render()
}

function render(){
  let resultHTML = ''
  for(let i = 0; i<taskList.length; i++) {
    resultHTML += `
    <div class="task">
          <div>${taskList[i]}</div>
          <div>
            <button>check</button>
            <button>delete</button>
          </div>
        </div>`
  }
 

  document.querySelector('.task_list').innerHTML = resultHTML;
}