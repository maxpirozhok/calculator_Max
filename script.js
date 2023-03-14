let userInput = document.getElementById('userInput');
let calculate = '';

function press (num) {
    calculate += num
    userInput.value = calculate
}

function result () {
    if (userInput.value != 0) {
    userInput.value = eval(calculate)
    calculate = ''}
    else {
        calculate = 0
        userInput.value = eval(calculate)
        calculate = ''
    }
}

function clearField (){
    calculate = '';
    userInput.value = calculate;
}