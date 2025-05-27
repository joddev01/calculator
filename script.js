let number = 0;
let number2 = 0;
let result = 0;

document.getElementById("add").onclick = function() {
    console.log("add was clicked");
    number = number + 1;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};
document.getElementById("reset").onclick = function() {
    console.log("reset was clicked");
    number = 0;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};
document.getElementById("sub").onclick = function() {
    console.log("sub was clicked");
    number = number - 1;
    console.log(number);
    document.getElementById("num").innerHTML = number;
    if(number <= 0) {
        console.log("it is a negative value");
        document.getElementById("num").innerHTML = "Error";
        number = 0;
    }
};
document.getElementById("add2").onclick = function() {
    console.log("2 add  was clicked");
    number2 = number2 + 1;
    console.log(number2);
    document.getElementById("num2").innerHTML = number2;
    
};
document.getElementById("reset2").onclick = function() {
    console.log("2 reset was clicked");
    number2 = 0;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
};
document.getElementById("sub2").onclick = function() {
    console.log("2 sub was clicked");
    number2 = number2 - 1;
    console.log(number2);
    document.getElementById("num2").innerHTML = number2;
    if(number2 <= 0) {
        console.log("it is a negative value");
        document.getElementById("num2").innerHTML = "Error";
        number2 = 0;
    }
};
document.getElementById("result4").onclick = function() {
    console.log("btn clicked");

    const checkbox = document.getElementById("inp");
    const checkbox2 = document.getElementById("inp2");
    const checkbox3 = document.getElementById("inp3");
    const checkbox4 = document.getElementById("inp4");

    if(checkbox.checked) {
        console.log("Addition Selected");
        result = number + number2;
        document.getElementById("num3").innerHTML = result;
    }
    else if(checkbox2.checked) {
        console.log("Subtraction Selected");
        result = number - number2;
        document.getElementById("num3").innerHTML = result;
    }
    else if(checkbox3.checked) {
        console.log("Multiplication Selected");
        result = number * number2;
        document.getElementById("num3").innerHTML = result;
    }
    else if(checkbox4.checked) {
        console.log("Division Selected");
        if(number2 === 0) {
            console.log("Cannot divide by zero");
            document.getElementById("num3").innerHTML = "Error";
            result = 0;
        } else {
        result = number / number2;
        document.getElementById("num3").innerHTML = result;
    }
}
else {
    console.log("No operation selected");
    document.getElementById("num3").innerHTML = "Error";
}
};