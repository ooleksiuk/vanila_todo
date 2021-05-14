const array = [
  'color-blue',
  'color-orange',
  'color-green',
  'color-red',
  'color-light-green',
  'color-deep-blue ',
];
let id = 1;

// ******************* Selectors
const todoInput = document.getElementById('input-text');
// List of todo
const itemContainer = document.getElementById('item-container');
const radios = document.querySelectorAll('input[type="radio"]');

// ******************* Event Listeners

// ******************* Functions
function addTodoItem() {
  // get the color selector
  const colorClass = checkColor();
  // get the text value
  const itemContent = todoInput.value;

  // create a checkbox with click-listener
  const checkbox = document.createElement('input');
  checkbox.id = id;
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', itemCompleted);

  // create a colored checkbox-container
  const checkboxDiv = document.createElement('div');
  checkboxDiv.id = `cb-div${id}`;
  checkboxDiv.className = 'check-box';
  checkboxDiv.classList.add(colorClass);
  checkboxDiv.appendChild(checkbox);

  // create a colored-element with entered text
  const label = document.createElement('label');
  label.id = `cb-label${id}`;
  label.innerText = itemContent;
  label.classList.add(colorClass);

  // create a list-element
  const item = document.createElement('div');
  item.className = 'item';
  item.appendChild(checkboxDiv);
  item.appendChild(label);

  itemContainer.appendChild(item);
  id++;
  // reset the input value
  todoInput.value = '';
}

// Choose color css-selector (based on the selected radio-input / randome selection)
function checkColor() {
  // get the selected radio-input
  const radio = document.querySelector('input[type="radio"]:checked');
  if (radio) {
    radio.checked = false;
    return radio.className;
  } else {
    // random color selection
    return array[Math.floor(Math.random() * array.length)];
  }
}

// Checked/Unchecked event-handler
function itemCompleted(e) {
  // get id of the event object
  const id = e.target.id;
  // get the required list-element
  const checkboxDiv = document.getElementById(`cb-div${id}`);
  const label = document.getElementById(`cb-label${id}`);

  // change the style of the list-element depend on checked/unchecked state of the checkbox
  if (e.target.checked) {
    checkboxDiv.classList.add('completed');
    label.classList.add('completed');
  } else {
    checkboxDiv.classList.remove('completed');
    label.classList.remove('completed');
  }
}
