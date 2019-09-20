// ============================================================================
var name = 'Приемы работы с массивами на PHP';
console.log('Урок № 14 - ' + name);
// ============================================================================


// ============================================================================
console.log('Заполнение массивов');
// ============================================================================

// заполним массив десятью иксами 'x'. Для этого воспользуемся методом

array = [];
for (var i = 1; i <= 10; i++) {
  array.push('x');
} console.log(array);

// or

array = [];
for (var i = 0; i < 10; i++) {
  array[i] = 'x';
} console.log(array);

// заполним массив числами от 1 до 10:

array = [];
for (var i = 1; i <= 10; i++) {
  array.push(i);
} console.log(array);

// or

array = [];
for (var i = 0; i < 10; i++) {
  array[i] = (i + 1);
} console.log(array);

// ============================================================================
console.log('Переворот массива');
// ============================================================================

// из массива ['a', 'b', 'c', 'd', 'e'] сделаем ['e', 'd', 'c', 'b', 'a']. Для
// этого переберем исходный массив с конца и запишем его элементы в новый массив
// - они будут идти в обратном порядке:

var array = ['a', 'b', 'c', 'd', 'e'];
console.log(array.reverse());

// or

var result = [];
var array = ['a', 'b', 'c', 'd', 'e'];
for (var i = array.length - 1; i >= 0; i--) {
  result.push(array[i]);
} console.log(result);

// ============================================================================
console.log('Переворот объекта');
// ============================================================================

// поменяем ключи и значения в объекте, например из {a: 1, b: 2, c: 3, d: 4, e: 5}
// сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.

var object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
var result = {};

for (var key in object) {
  result[object[key]] = key;
}

console.log(result);

// ============================================================================
console.log('Подсчет колличества элементов');
// ============================================================================

// Пусть дан массив ['a', 'b', 'c', 'a', 'a', 'b']. Давайте подсчитаем количество
// одинаковых элементов в этом массиве и сделаем результат в виде объекта
// {a: 3, b: 2, c: 1}.

array = ['a', 'b', 'c', 'a', 'a', 'b'];
count = { a: 0, b: 0, c: 0 };

for (var i = 0; i < array.length; i++) {
  count[array[i]]++;
}

console.log(count);

// Пусть объект count формируется автоматически таким образом: если такого элемента
// в count нет, то ему следует присвоить значение 1, а если есть - просто увеличить
// значение на единицу:

array = ['a', 'b', 'c', 'a', 'a', 'b'];
count = {};

for (var i = 0; i < array.length; i++) {
  if (count[array[i]] === undefined) {
    count[array[i]] = 1;
  } else {
    count[array[i]]++;
  }
}

console.log(count);

// ============================================================================
console.log('Перебор многомерных массивов');
// ============================================================================

// выведем все его элементы на экран. Для этого нам необходимо запустить два
// вложенных друг в друга цикла:

var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
var result;
for (var i = 0; i <= arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    result = arr[i][j];
    console.log(result);
  }
}

// ============================================================================
console.log('Заполение массивов');
// ============================================================================

/*
1. Заполните массив следующим образом: в первый элемент запишите 'x',
во второй 'xx', в третий 'xxx' и так далее.
*/

var x = 'x';
var string = '';
var result = [];
for (var i = 1; i <= 10; i++) {
  string += x;
  result.push(string);
} console.log(result);

// ============================================================================

/*
2. Заполните массив следующим образом: в первый элемент запишите '1', во второй
'22', в третий '333' и так далее.
*/

var str = '';
result = [];
for (var i = 1; i <= 10; i++) {
  str = '';
  for (var j = 0; j < i; j++) {
    str += i;
  }

  result.push(str);
}

console.log(result);

// ============================================================================

/*
3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым
- сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
сделает массив ['x', 'x', 'x', 'x', 'x'].
*/

function arrayFill(symbol, amount) {
  var string = 'x';
  var result = [];
  for (var i = 1; i <= amount; i++) {
    result.push(string);
  } console.log(result);
}

arrayFill(x, 10);

// or

function arrayFillSecond(symbol, amount) {
  var string = 'x';
  var result = [];
  for (var i = 1; i <= amount; i++) {
    result.push(string);
  } return result;
}

console.log(arrayFillSecond(x, 2));

// ============================================================================

/*
4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
чтобы в сумме получилось больше 10-ти.
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var count = 0;
for (var i = 0; i < array.length; i++) {
  count += array[i];
  if (count > 10) {
    console.log(array[i]);
    break;
  }
}

// and

function amount(arr) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count += arr[i];
    if (count > 10) {
      return arr[i];
    }
  }
}

console.log(amount([1, 2, 3, 4, 5, 6, 7, 8]));

// ============================================================================
console.log('Переворот массива');
// ============================================================================

/*
5. Дан массив с числами. Не используя метода reverse переверните его элементы
в обратном порядке.
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i = array.length - 1; i >= 0; i--) {
  result.push(array[i]);
}

console.log(result);

// ============================================================================
console.log('Многомерные массивы');
// ============================================================================

/*
6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
Найдите сумму элементов этого массива. Массив, конечно же, может быть
произвольным.
*/

var array = [[10, 3, 13, 24], [5, 16, 7], [8, 14]];
var result = 0;
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    result += array[i][j];
  }
} console.log(result);

// and

function arrHuge(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      result += arr[i][j];
    }
  } return result;
}

console.log(arrHuge([[10, 3, 13, 24], [5, 16, 7], [8, 14]]));

// ============================================================================

/*
7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
Найдите сумму элементов этого массива.
Массив, конечно же, может быть произвольным.
*/

var arrBig = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var result = 0;
for (var i = 0; i < arrBig.length; i++) {
  for (var j = 0; j < arrBig[i].length; j++) {
    for (var k = 0; k < arrBig[i][j].length; k++) {
      result += arrBig[i][j][k];
    }
  }
} console.log(result);

// and

function arrMost(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      for (var k = 0; k < arr[i][j].length; k++) {
        result += arr[i][j][k];
      }
    }
  } return result;
}

console.log(arrMost([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));