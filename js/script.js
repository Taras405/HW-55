const numbersArr = [1, 2, 3];

numbersArr[1] = 10;
console.log(numbersArr);



const stringArr = ['one', 'two', 'three'];

console.log(stringArr.length - 1);
stringArr[3] = 'four';
console.log(stringArr);



let sum = 0;

for (let numberArr of numbersArr) {
    sum += numberArr;
}
console.log(sum);



const numArr = [12, 74, 65, 45, 87];

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}



const strArr = ["Igor", "Taras", "Nazar", "Vlad", "Rostik"];

for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
        console.log(strArr[i]);
        continue;
    }
}



const bigNumberArr = [12, 14, 88, 51, 42, 136, 84, 24, 99, 100];

console.log(Math.max(...bigNumberArr));


console.log(''); // пропуск між завд


const bigNumArr = [12, 24, 48, 53, 87, 88, 1, 15, 22, 42];

for (evenNumber of bigNumArr) {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
    }
}