const inputForm = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCounter = document.getElementById('counter-content');
/**
 * Create list item.
 * @param {String} input the input string from the form.
 * @return {Element} the list item.
 */
// const createItem = function create(input) {
//   const li = document.createElement('li');
//   li.setAttribute('class', 'todo-item');
//   const tg = document.createElement('input');
//   tg.setAttribute('type', 'checkbox');
//   tg.setAttribute('class', 'toggle');
//   tg.style.margin = '5px';
//   li.append(tg);
//   li.appendChild(document.createTextNode(input));
//   const cross = document.createElement('button');
//   cross.setAttribute('type', 'button');
//   cross.setAttribute('class', 'close');
//   cross.setAttribute('aria-label', 'Close');
//   const sp = document.createElement('span');
//   sp.setAttribute('aria-hidden', 'true');
//   sp.innerHTML = '&times;';
//   cross.append(sp);
//   li.append(cross);
//   return li;
// };

/**
 * Create list item.
 * @param {String} input the input string from the form.
 * @return {Element} the list item.
 */
function createItem(input) {
  const li = document.createElement('li');
  li.setAttribute('class', 'todo-item');
  li.innerHTML = `
    <input type='checkbox' class='toggle'>
    <div class='todo-content'>${input}  </div>
    <button type='button' class='close' aria-label='Close'>
      <span aria-label='true'>&times;</span>
    </button>
  `;
  return li;
}

/**
 * Change the count on the page.
 * @return {Methods} The methods of the counter.
 */
function Counter() {
  let count = 0;
  /**
  * Display the count on the page
  */
  function displayConut() {
    if (count === 0) {
      todoCounter.innerHTML = 'no item left';
    } else if (count === 1) {
      todoCounter.innerHTML = '1 item left';
    } else {
      todoCounter.innerHTML = `${count} items left`;
    }
  }

  return {
    increase: () => {
      count += 1;
      displayConut();
    },
    decrease: () => {
      if (count > 0) {
        count -= 1;
        displayConut();
      }
    },
  };
}

const counter = new Counter();

inputForm.addEventListener('keydown', (e) => {
  if (e.which === 13 || e.keyCode === 13) {
    const input = e.target.value;
    if (input && input !== '') {
      todoList.appendChild(createItem(input));
      document.getElementById('form-input').value = '';
      counter.increase();
    }
  }
});

todoList.addEventListener('click', (e) => {
  const tg = e.target;
  // console.log(tg);
  if (tg.tagName === 'SPAN') {
    if (!tg.checked) {
      counter.decrease();
    }
    tg.parentNode.parentNode.remove(); // remove the todo
  } else if (tg.tagName === 'INPUT') {
    if (tg.checked) {
      counter.decrease();
      tg.parentNode.classList.add('todo-item-complete'); // check the todo
    } else {
      counter.increase();
      tg.parentNode.classList.remove('todo-item-complete'); // uncheck the todo
    }
  }
});
