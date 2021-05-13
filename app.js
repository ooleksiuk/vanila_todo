const array = [
  'color-blue',
  'color-orange',
  'color-green',
  'color-red',
  'color-light-green',
  'color-deep-blue ',
];
var id = 1;

// ******************* Selectors
const todoInput = document.getElementById('input-text');
// List of todo
const itemContainer = document.getElementById('item-container');
const radios = document.querySelectorAll('input[type="radio"]');

// ******************* Event Listeners

// ******************* Functions
function addTodoItem() {
  // let radios = document.querySelectorAll('input[type="radio"]');

  // for (const r of radios) {
  //   contact[i].addEventListener('change', function () {
  //     let val = this.value; // this == the clicked radio,
  //     console.log(val);
  //   });
  // }

  const colorClass = checkColor();
  const itemContent = todoInput.value;

  const checkbox = document.createElement('input');
  checkbox.id = id;
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', itemCompleted);

  const checkboxDiv = document.createElement('div');
  checkboxDiv.id = 'cb-div' + id;
  checkboxDiv.className = 'check-box';
  checkboxDiv.classList.add(colorClass);
  checkboxDiv.appendChild(checkbox);

  const label = document.createElement('label');
  label.id = 'cb-label' + id;
  label.innerText = itemContent;
  label.classList.add(colorClass);

  const item = document.createElement('div');
  item.className = 'item';
  item.appendChild(checkboxDiv);
  item.appendChild(label);

  itemContainer.appendChild(item);
  id++;
  todoInput.value = '';
}

function checkColor() {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (let r of radios) {
    if (r.checked) {
      r.checked = false;
      // radios[radios.length - 1].checked = true;
      return r.className;
    }
  }
  return (color = array[Math.floor(Math.random() * array.length)]);
}

function itemCompleted(e) {
  const id = e.target.id;
  const checkboxDiv = document.getElementById('cb-div' + id);
  const label = document.getElementById('cb-label' + id);

  if (e.target.checked) {
    checkboxDiv.classList.add('completed');
    label.classList.add('completed');
  } else {
    checkboxDiv.classList.remove('completed');
    label.classList.remove('completed');
  }
}
