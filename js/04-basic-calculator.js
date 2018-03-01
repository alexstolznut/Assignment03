/*eslint-env browser*/
var x, y, z;


function calculate(x, y, z) {
    "use strict";
    x = Number(x);
    y = Number(y);
    z = z.toUpperCase();
    window.console.log(z);
    var result;


    switch (z) {
        case "ADD":
            result = x + y;
            window.alert(x + " plus " + y + " = " + result);
            break;
        case "SUBTRACT":
            result = x - y;
            window.alert(x + " minus " + y + " = " + result);
            break;
        case "MULTIPLY":
            result = x * y;
            window.alert(x + " multiplied by " + y + " = " + result);
            break;
        case "DIVIDE":
            result = x / y;
            window.alert(x + " divided by " + y + " = " + result);
            break;
        default:
            ask();

    }

    return;


}

function ask() {
    "use strict";
    x = window.prompt("Please enter a number");
    y = window.prompt("Please enter another number");
    z = window.prompt("Please enter an operation to perform - add, subtract multiply, or divide.");
    calculate(x, y, z);

}
ask();
