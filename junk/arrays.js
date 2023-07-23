// task 1
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

// task 2
function filterRangeInitialVersion(arr, a, b) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] < b) {
            result.push(arr[i])
        }
    }
    return result
}

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
* */

// task 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

/*
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
* */

// task 4
function sortInReverse(arr) {
    return arr.sort((a, b) => b - a);
}

// task 5
function copySorted(arr) {
    return arr.slice().sort();
}

/*
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
* */

// task 6
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// task 7
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша*/

// task 8
/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/!*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*!/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин*/

// task 9
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя*/

// task 10
// let arr = [1, 2, 3];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// task 11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// task 12
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

// task 13
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
