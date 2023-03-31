display = document.getElementById('display')
clearDisplay = document.querySelector('.red')
backSpace = document.querySelector('.backSpace')
equale = document.querySelector('.blue')
buttons = document.querySelectorAll('.btn')
parRight = document.getElementById('parRight')
parLeft = document.getElementById('parLeft')
icon = document.getElementById('icon')
span = document.getElementById('span')
calculator = document.querySelector('.calculator')


clearDisplay.addEventListener('click',function(){
    display.value = ''
})

backSpace.addEventListener('click',function(){
    let displayValue = display.value.split('');
    displayValue.pop();
    display.value = displayValue.join('');
})

function addToDisplay(value){
    display.value += value;
}

parRight.onclick = function() {
    display.value += '(';
}
parLeft.onclick = function() {
    display.value += ')';
}

equale.addEventListener('click', function () {
    if(display.value != ''){
        try{
            let result = eval(display.value);
            display.value = result  
        }
        catch{
            display.value = 'Error!'
        }
    }
    else {
        display.value = 'Nothing to show'
    }
})