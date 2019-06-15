var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(10);


let namberOfSibling = 1 + 3;
let namberOfCandies = 8;
console.log(namberOfCandies / namberOfSibling);

let secondInMinute = 60;
let minuteInHour = 60;
let secondInHour = secondInMinute * minuteInHour;
console.log(secondInHour);

let hoursInDay = 24;
let secondInDay = hoursInDay * secondInHour;
console.log(secondInDay);
let daysInYear = 365;
let secondInYear = daysInYear * secondInDay;
console.log(secondInYear);
console.log();

let mayAge = 48;
let mayAgeSecond = mayAge * secondInYear;
console.log(mayAgeSecond);
console.log();

let ageMisha = 14;
let ageMishaSecond = ageMisha * secondInYear;
console.log(ageMishaSecond);

let ageTanya = 25;
let ageTanyaSecond = ageTanya * secondInYear;
console.log(ageTanyaSecond);

let ageLiza = 0.7;
let ageLizaSecond = ageLiza * secondInYear;
console.log(ageLizaSecond);

console.log();

var highFives = 0;
console.log(highFives++);
console.log(highFives++);
console.log(highFives++);
console.log(highFives++);

console.log();

var x = 10;
x += 7;
x -= 3;
x += 8;
console.log(x);
console.log();

var balloons = 100;
balloons *= 2;
console.log(balloons);

var balloons = 100;
balloons /= 2;
console.log(balloons);

console.log();


var string = 'эЙ, кАК деЛа?';

/*var string1 = string.toUpperCase();
console.log('string1: ' + string1);

var string2 = string1[0];
console.log('string2: ' + string2);

var string3 = string1.toLowerCase();
console.log('string3: ' + string3);

var string4 = string3.slice(1);
console.log('string4: ' + string4);

var totalString = string2 + string4;
console.log(totalString);*/

console.log(string[0].toUpperCase() + string.slice(1).toLowerCase());

console.log();

var javaScriptIsCool = true;
console.log(javaScriptIsCool);
console.log();

var hadShower = true;
var hasBackpack = true;
console.log(hadShower && hasBackpack);
console.log();

var hasApple = true;
var hasOrange = false;
console.log(hasApple || hasOrange);
console.log('*************');

var ageRestriction = 12;
var age = 12;
var withAdult = true;
console.log(ageRestriction <= age || withAdult);
console.log('###########');

var dinosaurs = [
    'Тираннозавр',
    'Велоцираптор',
    'Стегозавр',
    'Трицераптос',
    'Брахиозавр',
    'Птеранодон',
    'Фпатозавр',
    'Диплодок',
    'Компсогнат',
];
console.log(dinosaurs[5]);
dinosaurs[0] = 'Тираннозавр рекс';
console.log(dinosaurs);
console.log();
dinosaurs[3] = 'Вася';
console.log(dinosaurs);
console.log();
dinosaurs[25] = 'Петя';
console.log(dinosaurs);
console.log();

var miniacs = ['Якко', 'Вакко', 'Дот'];
console.log(miniacs[0]);
console.log(miniacs[1]);
console.log(miniacs[2]);
console.log(miniacs.length);
console.log(miniacs[miniacs.length - 1]);

var animals = [];
animals.push('Кот');
animals.push('Пёс');
animals.push('Лама');
console.log(animals);
console.log(animals.length);
animals.unshift('Мартышка');
animals.unshift('Белый медведь');
console.log(animals);
console.log(animals[0] + ' ' + animals[2]);
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');

var lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);
animals.pop();
console.log(animals);
animals.unshift(lastAnimal);
console.log(animals);
animals.shift();
console.log(animals);
animals.shift();
console.log(animals);
animals.pop();
console.log(animals);
animals.push('Корова');
console.log(animals);
animals.push('Миша');
animals.unshift('Алёна');
console.log(animals);

var furryAnimals = ['Альпака', 'Лемур', 'Йети'];
var scalyAnimals = ['Удав', 'Годзилла'];
var furryAndScaly = furryAnimals.concat(scalyAnimals);
console.log(furryAndScaly);
console.log(furryAnimals);
console.log(scalyAnimals);
var featheredAnimals = ['Ара', 'Додо'];
console.log(featheredAnimals);
var allAnimals = featheredAnimals.concat(scalyAnimals, furryAnimals);
console.log(allAnimals);
console.log(allAnimals.indexOf(3));
console.log(allAnimals[4]);
var boringAnimals = ['Мартышка', 'Кот', 'Рыба', 'Ящерица'];
console.log(boringAnimals.join(' - '));
console.log(boringAnimals.join(' * '));
console.log(boringAnimals.join(' и '));
var age = [11, 14, 79];
console.log(age.join(' '));

var landmarks = [];
landmarks.push('Мой дом');
landmarks.push('Дорожка к дому');
landmarks.push('Мигающий фонарь');
landmarks.push('Протекающий гидрант');
landmarks.push('Пожарная станция');
landmarks.push('Приют для кошек');
landmarks.push('Моя бывшая школа');
landmarks.push('Дом подруги');
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);
landmarks.pop();
console.log(landmarks);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(7.65894));
console.log();

console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4));
console.log(Math.floor(Math.random() * 4));
console.log();

console.log();

var phrases = [
    'Подумай хорошенько, а нужно ли тебе это?',
    'Нет, нет, не делай этого, папа заругает!',
    'Не вздумай',
    'Да, это определённо надо сделать',
    'Да ну, лучше не надо',
    'Может не сегодня?',
    'Компьютер говорит: нет',
    'Сделай это прямо сейчас',
    'Ну попробуй, почему бы и нет?',
    'Ок, действуй!'
];

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log(phrases[Math.floor(Math.random() * phrases.length)]);
console.log();
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');


console.log('#########################################');
console.log();
var randomBodyPart = ['нос', 'глаз', 'лоб', 'череп'];
var randomOdjective = ['прекрасная', 'восхитительная', 'великолепная', 'блистательная'];
var randomInsult = ['луна.', 'ветка лозы.', 'капля росы.', 'картина.'];
var insult = 'У тебя ' + randomBodyPart[Math.floor(Math.random() * randomBodyPart.length)] + ' один в один как ' + randomOdjective[Math.floor(Math.random() * randomOdjective.length)] + ' ' + randomInsult[Math.floor(Math.random() * randomInsult.length)];
console.log(insult);
console.log();
console.log('#########################################');


var array = [];
/*array.push(1);
array.push(2);
array.push(3);*/
array[0] = 5;
array[1] = 'fff';
array[2] = 7;
array[3] = 'Вася';
array[4] = 8;
console.log(array);


var cat = {
    'legs': 3,
    'name': 'Гармония',
    'color': 'Черепаховый'
};
console.log(cat['color']);
console.log(cat.color);
console.log(Object.keys(cat));

/*var catFanny = {};// Заполнение пустого мобъекта с помощью кв.скобок.
catFanny['legs'] = 5;
catFanny['name'] = 'Чоч';
   catFanny['color'] = 'red';
catFanny['vois'] = 'Мяв-мяв';
catFanny['age'] = 3;

console.log(catFanny);*/

var catFanny = {}; // Заполнение пустого объекта без кв.скобок.
catFanny.legs = 5;
catFanny.name = 'Чоч';
catFanny.c
olor = 'red';
catFanny.vois = 'Мяв-мяв';
catFanny.age = 3;

console.log(catFanny);
console.log();
console.log();


var anna = {
    name: 'Анна',
    age: 11,
    lackyNambers: [2, 4, 8, 16]
};
var dave = {
    name: 'Дэйв',
    age: 5,
    lackyNambers: [3, 9, 40]
};
var kate = {
    name: 'Катя',
    age: 9,
    lackyNambers: [1, 2, 3]
};
var friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[1].age);
console.log(friends[0].name);
console.log(friends[2].lackyNambers[0]);

var myCrazyObject = {
    'name': 'Нелепый объект',
    'some array': [7, 9, {
        purpose: 'путаница',
        namber: 123
    }, 3.3],
    'random anymal': 'Банановая акула'
};
console.log(myCrazyObject['some array'][2].namber);

//Упражнение из книги стр.82
var scores = {};
scores['Вася'] = 3;
scores['Лена'] = 5;
scores['Дима'] = 7;

console.log(scores);
scores['Вася'] += 1;
scores['Лена'] += 2;
scores['Дима'] += 4;
console.log(scores);

console.log();

let message = 'Здравствуйте, дорогие сограждане!';
console.log(message);

let name = 'vdfааааf';
console.log('Привет ' + name);
if (name.length > 6) {
    console.log('Какое у вас длинное имя!')
} else {
    console.log('Недлинное имя')
}

console.log();

let chicken = false;
let pork = false;
let apple = false;

if (chicken) {
    console.log('Отлично, я буду курицу!');
} else if (pork) {
    console.log('Ну, ладно, буду свинину.');
} else if (apple) {
    console.log('Печалька, придётся яблоко грызть.')
} else {
    console.log('Ничего нет, пойду домой.')
}

let nameMy = 'Вальаутшуграшгукрга';

if (nameMy === 'Таня') {
    console.log('Привет мне.');
}
else if (nameMy === 'Маша') {
    console.log('Привет, доченька!');
}
else if (nameMy === 'Миша') {
        console.log('Привет, сыночек!');
}
    else if (nameMy === 'Владимир') {
    console.log('Здравствуйте, Владимир, папа Тани.');
}
    else if (nameMy === 'Валентина') {
        console.log('Здравствуйте, Валентина, мама Тани.')
} else {
    console.log('Привет, незнакомец!');
}

    let sheepCounted = 0;
    while (sheepCounted <= 10) {
        console.log('Посчитано овец ' + sheepCounted + '!');
        sheepCounted++;
    }
    console.log('Хрррррр-псссссс-хррррррр...');

    for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
        console.log('Посчитано с for овец ' + sheepCounted + '!')
    }

    let xx = 3;
 while ( xx < 10000) {
     console.log(xx);
     xx = xx * 3;
 }

 for (let a = 3; a < 10000; a = a * 3) {
     console.log(a);
 }

 let animalsFanny = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'];
 for (let i = 0; i < animalsFanny.length; i++) {
     console.log('"' + animalsFanny[i] + ' -' + ' прекрасное животное.' + '"' )
 }

 let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
 let randomString = '';
 while (randomString.length <= 6) {
     let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
     randomString += randomLetter;
      console.log(randomString);
 }
 console.log('-------------------------------');

 let input = 'javascript is awesome';
 let output = '';
 for (let i = 0; i < input.length; i++) {
     if (input[i] == 'a') {
         output += '4';
     }
     else if (input[i] == 'e') {
         output += '3';
     }
     else if (input[i] == 'i') {
         output += '1';
     }
     else if (input[i] == 'o') {
         output += '0';
     }
     else {
         output += input[i];
     }

 }
console.log(output);
console.log('--------------------------------');
 console.log('-------------------------------');

/*let nameMy = prompt('Введите ваше имя');
let nameMykuku = parseInt(nameMy)
if (nameMy === 'Таня') {
    alert('Привет мне.');
}
else if (nameMy === 'Маша') {
    alert('Привет, моя сладенькая доченька!))')
}
else if (nameMy === 'Миша') {
    alert('Привет, мой мачо-мускулистенький сыночек!))')
}
else {
    alert('А вы кто? Я вас не знаю. Не соизволили бы вы покинуть помещение?');
    alert('Да что ж такое-то? Руки прочь от моего компа!!!!');
    alert('Щас пистолет достану...');
}*/
console.log('--------------------------------');
console.log('--------------------------------');

