console.log('------------#Пункт №5');
console.log('суммирование двух чисел');
let a=1+1;
console.log('1+1=',a);


console.log('вычитание двух чисел');
let b = 2-1;
console.log('2-1=',b);


console.log('умножение двух чисел');
let c = 2*3;
console.log('2*3=',c);


console.log('деление двух чисел');
let d = 15/5;
console.log('15/5=',d);

console.log('------------#Пункт №6');
console.log('Вывод чисел от 1 до 5');

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log('------------#Пункт №7');
console.log('Вывод чисел от 5 до 1');

for (let i = 5; i >= 1; i--) {
    console.log(i);
}


console.log('------------#Пункт №8');
console.log('Расширьте функцию getMarkInfo');

function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный бал')
    } else {
        console.log('У вас средний бал')
    }
}
getMarkInfo(10)
getMarkInfo(1)


console.log('------------#Пункт №9');
console.log('Расширьте функцию getDayInfo');

function getDayInfo(position) {
    switch (position) {
        case 0 :
            console.log('Sunday')
            break;
        case 1 :
            console.log('Monday')
            break;
        case 2 :
            console.log('Tuesday')
            break;
        case 3 :
            console.log('Wednesday')
            break;
        case 4 :
            console.log('Thursday')
            break;
        case 5 :
            console.log('Friday')
            break;
        case 6 :
            console.log('Saturday')
            break;
        default:
            console.log('Wrong data')
            break;
    }    
}
for (let position = 0; position <= 7; position++) {
    getDayInfo(position);
}

console.log('------------#Пункт №10');
console.log('Дан массив [a, b, c]. Добавьте ему в конец элементы 1, 2, 3.');

let arr = ['a', 'b', 'c'];
console.log(arr);
arr.push(1, 2, 3.)
console.log(arr);

console.log('------------#Пункт №11');
console.log('Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat).');

let arr1 = [1, 2, 3], arr2 = [4, 5, 6];
console.log(arr1);
console.log(arr2);
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log('------------#Пункт №12');
console.log('Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.');

function countNumber(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    console.log('ответ =',total);
  }
  countNumber(10);
  countNumber(5);
  countNumber(3);
  