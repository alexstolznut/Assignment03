///*eslint-env browser*/
////STEP 1
//function halfNumber(number) {
//    'use strict';
//    var result = parseFloat( Number(number) / 2);
//    return "Half of " + number + " is " + result;
//}
//window.console.log(halfNumber(100));
////STEP 2
//function squareNumber(number){
//    number = Number(number);
//    var result = number*number;
//    return "The result of squaring the number " + number + " is " +result;
//}
//
//window.console.log(squareNumber(10));
//
////STEP 3
//function percentOf(x,y){
//    x = parseFloat(x); 
//    y = parseFloat(y);
//    var result = (x / y) * 100;
//    return x + " is " + result + "% of " + y;
//}
//window.console.log(percentOf(4,2));
////STEP 4
//
//function findModulus(x,y){
//    x = Number(x), y = Number(y);
//    var result = y%x;
//    return result + " is the modulus of " + x + " and " + y;
//}
//window.console.log(findModulus(4,10));

//STEP 5

function calculate() {
    var numbers = window.prompt("Numbers").split(",");
    var sum = 0;
    for (var i = 0; i < numbers.length; i = i + 1) {
        sum += Number(numbers[i]);

    }
    window.console.log(sum);
}
calculate();

