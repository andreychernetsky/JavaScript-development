// ============================================================================
var name = 'Работа с циклами for и while';
console.log('Урок № 5 - ' + name);
// ============================================================================

// ============================================================================
console.log('Циклы while и for');
// ============================================================================

/*
1. Выведите столбец чисел от 1 до 100.
*/

var i = 1;
while (i <= 100) {
  // console.log(i);
  i++;
}

for (var i = 1; i <= 100; i++) {
  // console.log(i);
}

// ============================================================================

/*
2. Выведите столбец чисел от 11 до 33.
*/

var i = 11;
while (i <= 33) {
  // console.log(i);
  i++;
}

for (var i = 11; i <= 33; i++) {
  // console.log(i);
}

// ============================================================================

/*
3. Выведите столбец четных чисел в промежутке от 0 до 100.
*/

var i = 2;
while (i <= 100) {
  // console.log(i);
  i += 2;
}

for (var i = 2; i <= 100; i += 2) {
  // console.log(i);
}

// ============================================================================

/*
4. С помощью цикла найдите сумму чисел от 1 до 100.
*/

var i = 1;
var result = 0;
while (i <= 100) {
  result = result + i;
  i++;
}

// console.log(result);

var result = 0;
for (var i = 1; i <= 100; i++) {
  result = result + i;
}

// console.log(result);

// ============================================================================
console.log('Работа с for для массивов');
// ============================================================================

/*
5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите
все эти элементы на экран.
*/

var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  // console.log(array[i]);
}

// ============================================================================

/*
6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму
элементов этого массива. Запишите ее в переменную result.
*/

var array = [1, 2, 3, 4, 5];
var result = 0;
for (var i = 0; i < array.length; i++) {
  result = result + array[i];
}

// console.log(result);

// ============================================================================
console.log('Работа с for-in');
// ============================================================================

/*
7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы
этого объекта.
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
*/

var object = { green: 'зеленый', red: 'красный', blue: 'голубой' };
for (var key in object) {
  // console.log('Ключ: ' + key + ', элемента: ' + object[key]);
}

// ============================================================================

/*
8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
С помощью цикла for-in выведите на экран строки такого формата:
'Коля - зарплата 200 долларов.'
*/

var object = { Коля: '200', Вася: '300', Петя: '400' };
for (var name in object) {
  // console.log(name + ' - зарплата ' + object[name] + ' долларов.');
}

/*
Но это не решение задачи, поставлена задача вывести только один параметр.
А как вывести конкретно первые значине и ключ из массива с помощью цикла for-in
я не могу понять
*/

// ============================================================================
console.log('Задачи');
// ============================================================================

/*
9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора
if выведите на экран столбец тех элементов массива, которые больше 3-х,
но меньше 10.
*/

var array = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < array.length; i++) {
  if (array[i] > 3 && array[i] < 10) {
    // console.log(array[i]);
  }
}

// ============================================================================

/*
10. Дан массив с числами. Числа могут быть положительными и отрицательными.
Найдите сумму положительных элементов массива.
*/
var result = 0;
var array = [2, -3, -9, 1, -4, 5, 8];
for (var i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    result = result + array[i];
  }
}

// console.log(result);

// ============================================================================

/*
11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
оператора if проверьте есть ли в массиве элемент со значением, равным 4.
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет -
ничего делать не надо.
*/

var array = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < array.length; i++) {
  if (array[i] === 4) {
    // console.log('Есть!');
    break;
  }
}

// ============================================================================

/*
12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите
на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
*/

var array = ['10', '20', '30', '50', '235', '3000'];
for (var i = 0; i < array.length; i++) {
  if (array[i][0] == '1' || array[i][0] == '2' || array[i][0] == '5') {
    // console.log(array[i]);
  }
}

// ============================================================================

/*
13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for
создайте строку '-1-2-3-4-5-6-7-8-9-'.
*/

var string = '-';
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < array.length; i++) {
  string = string + array[i] + '-';
}

// console.log(string);

// ============================================================================

/*
14. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а выходные дни выведите жирным.
*/

var dayTheWeeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for (var i = 0; i < dayTheWeeks.length; i++) {
  if (i == 5 || i == 6) {
    // document.write(dayTheWeeks[i].bold() + '<br>');
  } else {
    // document.write(dayTheWeeks[i] + '<br>');
  }
}

// ============================================================================

/*
15. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
*/

var dayTheWeeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for (var i = 0; i < dayTheWeeks.length; i++) {
  if (i == 3) {
    // document.write(dayTheWeeks[i].italics() + '<br>');
  } else {
    // document.write(dayTheWeeks[i] + '<br>');
  }
}

// or

var dayTheWeeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
var day = 3;
for (var i = 0; i < dayTheWeeks.length; i++) {
  if (day == i) {
    // document.write(dayTheWeeks[i].italics() + '<br>');
  } else {
    // document.write(dayTheWeeks[i] + '<br>');
  }
}

// ============================================================================

/*
16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не
станет меньше 50. Какое число получится? Посчитайте количество итераций,
необходимых для этого (итерация - это проход цикла), и запишите его в
переменную num.
*/

var n = 1000;
var num = 6;
for (var i = 1; i < num; i++) {
  n = n / 2;
  // console.log(n);
}

// Нижи твои решения

for (var n = 1000, num = 0; n > 50; n /= 2, num++);
// console.log(n);
// console.log(num);

var num = 0;
var n = 1000;
while (n > 50) {
  n = n / 2;
  num++;
}

// console.log(num);
// console.log(n);