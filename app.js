// function addInput() {
//   const newId = document.querySelectorAll('input').length;
//   const oldValue = document.getElementById('firstInput').value;

//   if (oldValue === '555') {
//     return createNewInput('---', newId);
//   }

//   const newValue =
//     newId % 2 === 0 ? oldValue.toUpperCase() : oldValue.toLowerCase();

//   createNewInput(newValue, newId);
// }

// function createNewInput(value, id) {
//   const form = document.forms.taskForm;
//   const newInput = document.createElement('input');
//   newInput.type = 'text';
//   newInput.value = value;
//   newInput.id = id;
//   form.appendChild(document.createElement('br'));
//   form.appendChild(newInput);
// }

function addTodoItem() {
  const color = checkColor();
  const itemContent = document.getElementById('input-text').value;
  const itemContainer = document.getElementById('item-container');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const checkboxDiv = document.createElement('div');
  checkboxDiv.className = 'check-box';
  checkboxDiv.setAttribute('style', `background-color:${color}`);
  checkboxDiv.appendChild(checkbox);

  const label = document.createElement('label');
  label.innerText = itemContent;
  label.setAttribute('style', `background-color:${color}`);

  const item = document.createElement('div');
  item.className = 'item';
  item.appendChild(checkboxDiv);
  item.appendChild(label);

  itemContainer.appendChild(item);
}

function checkColor() {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (let r of radios) {
    if (r.checked) {
      r.checked = false;
      return (color = r.style.backgroundColor);
    }
  }
}
