// ============================================================================
var name = ('Задачи н основы работы с DOM в JS');
console.log('Урок № 19 ' + name);
// ============================================================================

// ============================================================================
console.log('1. Алерт по нажатию на кнопку <pre>');
// ============================================================================

// function take() {
//   alert('Привет!');
// }

// ============================================================================
console.log('2. Измение текста в инпуте');
// ============================================================================

function change() {
  var input = document.getElementById('input');
  input.value = '!!!';
}

// ============================================================================
console.log('3. Вывод содержимого инпута');
// ============================================================================

function lookIt() {
  var input2 = document.getElementById('input2');
  alert(input2.value);
}

// ============================================================================
console.log('4. Квадрат содержимого инпутаа');
// ============================================================================

function powNumber() {
  var pow = document.getElementById('pow');
  var number = Number(pow.value);
  var square = number * number;
  alert(square);
}

// or

function powNumber() {
  var pow = document.getElementById('pow');
  var square = Math.pow(pow.value, 2);
  alert(square);
}

// ============================================================================
console.log('5. Обмен содержимым между инпутами');
// ============================================================================

function receiveNumber() {
  var left = document.getElementById('left');
  var rigth = document.getElementById('right');
  var rightV = rigth.value;
  var leftV = left.value;
  right.value = leftV;
  left.value = rightV;
}


// ============================================================================
console.log('6. По нажатию на кнопку меняет ее текст');
// ============================================================================

function newString() {
  var newText = document.getElementById('newText');
  newText.value = 'New text button';
}

// or

function newString2(elem) {
  elem.value = 'New text button2';
}

// ============================================================================
console.log('7. Работа с CSS');
// ============================================================================

function changeColor() {
  var colorText = document.getElementById('colorText');
  colorText.style.color = 'red';
}

// or

function changeColor() {
  document.getElementById('colorText').style.color = 'red';
}

// ============================================================================
console.log('8. Блокирование полей ввода');
// ============================================================================

function block() {
  var block = document.getElementById('myString');
  block.disabled = true;
}

function unblock() {
  var unblock = document.getElementById('myString');
  unblock.disabled = false;
}
