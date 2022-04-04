'use strict';

// 1




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