//let age = 30;
//let user = "Artem";
//let message = 'Hello';
//console.log(age);
//console.log(user);
//console.log(message);
//let str = "׀ׁ€׀¸׀²׀µׁ‚";
//let str1 = "Hello";
//let str2 = `Hi - $ {1+2}`;
//console.log(str1);
//console.log(str2); 
//let x = 2,
//  y = 3;
//console.log(y - x);
//console.log(5 % 2);
//console.log(2 ** 3);
//let a = 1,
//  b = 2;
//let c = 2 - (a = b + 1);
//console.log(a);
//console.log(c);
//let a, b, c;
//c = 2 + 2;
//b = c;
//a = b;
//let n = 2;
//n += 5;
//n = n + 5
//console.log(n);
//n *= 2;
//n = n * 2;
//console.log(n);
//let a = 3;
//a *= 3 + 5;
//console.log(a);
//let counter = 2;
//counter++;
//console.log(counter);
//let counter = 2;
//counter--;
//console.log(counter);
//let counter = 2;
//let a = counter++;
//console.log(a);
//let x;
//true || (x + 1);
//console.log(x);


// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
//let b1 = 5 % 3;
//let b2 = 3 % 5;
//let b3 = 5 + `3`;
//let b4 = `5` - 3;
//let b5 = 75 + `кг`;
//console.log(b1);
//console.log(b2);
//console.log(b3);
//console.log(b4);
//console.log(b5);

// Результаты переменных вывести в console.log();

// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.
//let heightC = 10;
//let dC = 4;
//let v;
//v = heightC * dC;
//console.log(v)

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
//let a = 10;
//let b = 2;
//let c;
//let d;
//c = a * b;
//d = c / b;
//console.log(c);
//console.log(d);


// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.
//let c = 15;
//let d = 2;
//let result = c + d;
//console.log(result);


// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
//let a = 10;
//let b = 2;
//let c = 5;
//let d;
//d = a + b + c;
//console.log(d);

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.
//let a = 17;
//let b = 10;
//let c = a - b;
//let d = c + c;
//let resuit = d + c;
//console.log(resuit);


// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
//let name = "Artem";
//let message = 'привет';
//console.log(message);
//console.log(name);
// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
//let age = "30";
//let me = 'Мне лет';
//console.log(me);
//console.log(age);

// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.
//let str = 'abcde';
//console.log(str[0]);
//console.log(str[2]);
//console.log(str[4]);
//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
//console.log(60 * 60);
//console.log(3600 * 24);
//console.log(86400 * 30);


//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);
//let num = 47;
//num += 7;
//num -= 18;
//num *= 10;
//num /= 15;
//console.log(num);


// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);
//let num = 10;
//num =++;
//num =++;
//num =--;
//console.log(num);

// Условие
// Пример 1
// Если переменная num = 5, то выведите 'true' в console.log, иначе выведите 
//'false'.
// let num = 5;
// if(num === 5){
//     console.log(true);
// }else{
//     console.log(false);
// }
// Пример 2
// У вас есть дом. В доме 3 подъезда, в каждом подъезде по 10 квартир.
// 1 подъезд = 1 - 10;
// 2 подъезд = 11 - 20;
// 3 подъезд = 21 - 30;
// При введении номера квартиры в консоль должно выводиться номер подъезда
// Если вводить не существующую квартиру должно выводиться 'нет такой квартиры'
// let number = 100;
// if (number > 0 && number <= 10){
//     console.log('1 подъезд');
// }else if(number > 10 && number <=20){
//     console.log('2 подъезд');
// }else if(number > 20 && number <=30){
//     console.log('3 подъезд');
// }else{
//     console.log('нет такой квартиры');
// }
// Циклы
// Пример 3
// Выведите столбец чисел от 1 до 10.
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// Пример 4
// Дан массив с элементами [1,2,3]. C помощью цикла for выведите все 
// эти элементы.
// let arr = [1,2,3];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// Пример 5
// Дан массив с элементами [2,3,4,5]. С помощью цикла for найдите произведение
// элементов этого массива.
// let result = 1;
// let arr = [2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     result = result * arr[i];
//     // 1*2 = 2
//     //2*3 = 6
//     // 6 * 4 = 24
//     // 24 * 5 = 120
// }
// console.log(result);

// Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).
//let min = 25;
//if (min >= 0 && min <= 14) {
//   console.log(`в первую четверть`);
//}
//if (min >= 15 && min <= 30) {
//    console.log(`Во вторую четверть`);
//}
//if (min >= 31 && min <= 45) {
//    console.log(`В третью четверть`);
//}
//if (min >= 46 && min <= 59) {
//    console.log(`В четвертую четверть`);
//}

// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

//let ru = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let en = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// let lang = en;
// console.log(lang);

// Пример 3 
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.

// Пример 4
// Создаются переменные red и yellow для красного и 
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.
//if (red == true) {
//    console.log("стой");
//} else {
//    console.log("едь");
//}
//if (yellow == true) {
//    console.log("приготовиться");
//}
//if (green == true) {
//    console.log("true");
//}





// Циклы
// Пример 5
// Выведите столбец чисел от 1 до 12.
//let i = 1;
//while (i <= 12) {
//    console.log(i);
//    i++;
//}

// Пример 6
// Выведите столбец чисел от 5 до 13.
//let i = 5;
//while (i <= 13) {
//    console.log(i);
//    i++;
//}
// Пример 7
// Выведите столбец четных чисел в промежутке от 0 до 16.
//for (let i = 0; i <= 16; i++) {
//   if (i % 2 == 0) {
//       console.log(i);
//  }
//}
// Пример 8 
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]
//let result = 1;
//let arr = [2, 5, 8, 3, 6];
//for (let i = 0; i < arr.length; i++) {
//  result = result * arr[i];
//     // 1*2 = 2
//     //2*5 = 10
//     // 10 * 8 = 80
//     // 80 * 3 = 240
//     //  240 * 6 =1440
//}
//console.log(result);


// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:years,myDog,guests
// Функции:makeTea,dogYears
// Встроенные функции:'Rex' 4
// Аргументы:dogname,age,cups,tea
// Параметры: 
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old'); 
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
//let txt = 'JS';
//console.log(txt.toLowerCase());
//строка преобразуется в нижний регистр


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
//let txt = 'я люблю javascript'
//console.log(txt.substr(2));
// console.log(txt.substring(2));
// console.log(txt.slice(1));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
//let txt = 'я люблю JS';
//console.log(txt.substr(1, 6));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

//let txt = 'Я-люблю-JS!';
//console.log(txt.replace(/-/i, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

//let txt = 'я люблю JS';
//console.log(txt.split(","));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

//let txt = 'привет мир';
//console.log(txt.split(""));

//'use strict';
// Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().
// let cat = {};
// cat.name = "Roxy";
// cat.lags = 4;
// cat.color = "grey";
// cat["full name"] = "Roxy, красивая кошка";
// console.log(cat["full name"]);

// Напишите функцию-конструктор Person, которая принимает два параметра: 
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в 
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью 
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let person_1 = new Person('Andrey', 28);
// console.log(person_1.name);
// console.log(person_1.age);
// console.log(person_1);

// Person.prototype.specialty = "менеджер";
// console.log(person_1.specialty);

// Используя литерал объекта создайте объект cat с тремя свойствами: 
// name, legs и color.
// С помощью Object.create() создайте объект kitten 
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().

// let cat = {
//     legs:4,
//     name : 'Roxy',
//     color: 'grey'
// }
// let kitten = Object.create(cat);
// console.log(kitten.name);
// console.log(kitten.legs);
// console.log(kitten.color);

// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод 
// getSalary(), который будет выводить зарплату работника. Зарплата - 
// это произведение (умножение) ставки rate на количество отработанных 
// дней days.

// class worker{
//     constructor(name, surname, rate,days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
// }
// worker = new worker('Andrey', 'Makeenko', 100, 21);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.getSalary());


//Домашнее задание

//1 Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
// let city1 = {
//     name: "Ncity",
//     population: 1000000
// };
// // Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// let city2 = {
//     name: "cityM",
//     population: 1e6
// };
// // Создайте у объектов city1 и city2 методы getName(), которые вернут 
// // соответствующие названия городов.
// function getName() {
//     return this.name;
// }
// city1.getName = getName;
// city2.getName = getName;

// // Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// // возвращать информацию о городе в формате 
// // «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// // со своими значениями. Примечание: можно обращаться к каждому свойству 
// // через цикл for/in, но методы объекта возвращать не нужно.
// function exportStr() {
//     return `name=${this.name}\npopulation=${this.population}\n`;
// }
// city1.exportStr = exportStr;
// city2.exportStr = exportStr;
// // Создайте глобальную функцию getObj(), которая возвращает this. 
// // А у каждого из объектов city1 или city2 метод getCity, который 
// // ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// // вызова можно обратиться через this..
// function getObj() {
//     return this;
// }

// function getCity() {
//     return getObj.apply(this).getName
// }
// city1.getCity = getCity;
// city2.getCity = getCity;
// console.log(city1.exportStr());
// console.log(city2.exportStr());
// console.log(city1.getCity());
// console.log(city2.getCity());
//2 Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
// let d1 = [45, 78, 10, 3];
// d1[7] = 100;
// console.log(d1);
// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
// let d2 = [45, 78, 10, 3];
// let sum2 = 0;
// for (let i = 0; i < d2.length; i++) {
//     sum2 += d2[i];
//     console.log(sum2);
// }
//почитай for/in !!!

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
// let d3 = [45, 78, 10, 3];
// d3[7] = 100;
// let sum3 = 0;
// for (let i in d3) {
//     sum3 += d3[i];
//     console.log(sum3);

// }
// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
// let d4 = [45, 78, 10, 3];
// d4.sort(function my(a, b) {
//     return b - a;
// })
// console.log(d4);


//'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задача 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }

//Home work
// задача 5
// function func() {
//let elems = document.querySelectorAll('p');
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].innerHTML = i + 0;
//     }
// }
// Задача 1
// function buttonClick() {
//     let elem = document.getElementById('elem');
//     elem.innerHTML = 'Ку-ку! А я <strong>жирный!</strong>';
// }
// Задача 2
// function buttonClick() {
//     let elem = document.querySelector('#elem');
//     elem.innerHTML = '<h3>Абзац превратился в h3!</h3>';
// }
// задача 3

// function buttonClick() {
//     let elem = document.querySelector('#elem');
//     elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
// }
// задача 4*
// function buttonClick() {
//     let elem = +document.querySelector('.a').value;
//     let elem1 = +document.querySelector('.b').value;
//     let result = document.querySelector('p');
//     result.innerHTML = elem + elem1;
// }

//Домашнее задание
//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test" 
// let elem = document.getElementsByTagName('input');
// let elem1 = document.getElementById('test');
// for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener('blur', func);
// }
// function func() {
//     elem1.innerHTML = this.value;
// }
// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

//3
// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
// let elem = document.querySelector('p');
// for (elem i = 0; i < elem.length; i++) {
//     elem[i].addEventListener('click', func);
// }

// function func() {
//     this.innerHTML = this.innerHTML * this.innerHTML;
// }
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
// let elem = document.getElementsByTagName('input');
// for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener('blur', func);
// }

// function func() {
//     let correctLength = this.dataset.length; //правильное количество
//     let inputDataLength = this.value.length; //вбитое в инпут количество
//     if (correctLength == inputDataLength) {
//         this.style.borderColor = 'green';
//     } else {
//         this.style.borderColor = 'red';
//     }
// }