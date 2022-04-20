'use strict';

// 1

const numOrStr = prompt('Enter number of string');
if((numOrStr.trim() === '' || isNaN( +numOrStr))) {
    console.log('fail');
} else {
    console.log(+numOrStr);
}


// 2

let numOrStr = prompt('Enter number or string');
console.log(numOrStr);
switch (true) {

    case numOrStr === null :
        console.log('Вы отменили');
        break;
    case numOrStr.trim() === '':
      console.log('Empty string');
      break;

    case  isNaN( +numOrStr )  :
        console.log('number is Ba_NaN');
        break;
    default:
        console.log(+numOrStr);
        break;
}