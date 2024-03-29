// ============================================================================
var name = 'Продвинутая работа с пользовательскими функциями';
console.log('Урок № 17 - ' + name);
// ============================================================================

// Сделать функцию возведения в квадрат

function powNumber(num) {
  return num * num;
}

var num = 6;
console.log(powNumber(num));

// Если не передали значение в функцию, сделать значение 3 по умолчанию.

function powNumber(num) {
  if (num === undefined) {
    num = 3;
  } return num * num;
}

console.log(powNumber());

// or

function powNumber(num) {
  num = num || 3;
  return num * num;
}

console.log(powNumber(2));


// Рекурсия

// function last(arr) {
//   console.log(arr.pop());
//
//   if (arr.length != 0) {
//     last(arr);
//   }
// }
//
// var arr = [1, 2, 3, 4, 5];
// last(arr);

// ============================================================================
console.log('Работа с рекурсией');
// ============================================================================

/*
1. Дан массив с числами. Выведите последовательно его элементы используя
рекурсию и не используя цикл.
*/

function reqNumber(arr) {
  console.log(arr[0]);
  arr.splice(0, 1);
  if (arr.length > 0) {
    reqNumber(arr);
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
reqNumber(arr);

// or

function reqNumber(arr) {
  console.log(arr.shift());
  if (arr.length != 0) {
    reqNumber(arr);
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
reqNumber(arr);

// ============================================================================

/*
2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять
сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
*/

// Частично через рекурсию..

function getAmount(arr) {
  result += +arr[0];
  arr.splice(0, 1);
  console.log(result);
  if (result < 9) {
    getAmount(arr);
  }
}

var num = 162444;
var result = 0;
var arr = String(num).split('');
getAmount(arr);

// or

function getAmountNum(num) {
  var result = 0;
  var resultArray = [];
  var arr = String(num).split('');
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    result += +arr[i];
    if (result <= 9) {
      resultArray.push(result);
    }
  } return resultArray;
}

var num = 162444;
console.log(getAmountNum(num));

// ============================================================================

// Дополнительно )

// Сделайте функцию cut, которая первым параметром будет принимать строку, а
// вторым параметром - сколько первых символов оставить в этой строке. Второй
// параметр должен быть необязательным и по умолчанию принимать значение 10.

function cut(str, cut) {
  if (cut === undefined) {
    cut = 10;
  }

  var newStr = str.split('').splice(0, cut);
  return newStr.join(' ');
}

var str = 'usually string';
console.log(cut(str, 1));

// ============================================================================

// Дан массив с числами. Найдите сумму элементов этого массива используя
// рекурсию и не используя цикл.

function amountNumber(arr) {
  result += arr[0];
  arr.splice(0, 1);
  console.log(result);
  if (arr.length !== 0) {
    amountNumber(arr);
  }
}

var arr = [1, 2, 3, 4];
var result = 0;
amountNumber(arr);

// or

function amountNumber(arr) {
  result += arr[0];
  arr.shift();
  console.log(result);
  if (arr.length !== 0) {
    amountNumber(arr);
  }
}

var arr = [1, 2, 3, 4];
var result = 0;
amountNumber(arr);

// ============================================================================

// Дан многомерный массив с числами, массив произвольного уровня вложенности,
// например, [1, [2, [3, 4]], 5]. Сделайте функцию flatten, которая из нашего
// массива сделает [1, 2, 3, 4, 5]. Массив, конечно же, может быть любым.

function flatten(mostArr) {
  var newArr = [];
  for (var i = 0; i < mostArr.length; i++) {
    for (var j = 0; j < mostArr[i].length; j++) {
      newArr = [];
      newArr.push(mostArr[0]) + newArr.push(mostArr[i][0]) + newArr.push(mostArr[i][j][0]) +
      newArr.push(mostArr[i][j][1]) + newArr.push(mostArr[2]);
    }
  } return newArr;
}

var mostArr = [1, [2, [3, 4]], 5];
console.log(flatten(mostArr));

// Как решить данную задачу проще?
