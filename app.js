function findEven(){

    var start = document.getElementById("number1").value;
    var end = document.getElementById("number2").value;
    var evenNums = "<br>Even Numbers:<br>";

    for(i=start; i<=end; i++){

      if(i % 2 == 0){
        evenNums += i + "<br>";
      }
    }

    document.getElementById("result").innerHTML = evenNums;
  }


document.getElementById('number1').addEventListener('blur', e => {
    const num1 = e.target.value;
    let num1output = '';
    let messageColor='red';
    if (num1 > 100) {
        num1output = `Number 1 input ${num1} is not a valid number`
        messageColor = 'red';
    } else if ( num1 < 2) {
        num1output = `Number 1 input ${num1} is not a valid number`;
        messageColor = 'red';
    }
    const number1HelpElement = document.getElementById('number1Help');
    number1HelpElement.textContent = `${num1output}`;
    number1HelpElement.style.color = messageColor;
})

document.getElementById('number2').addEventListener('blur', e => {
    const num2 = e.target.value;
    let num2output = '';
    let messageColor='red';
    if (num2 > 100) {
        num2output = `Number 2 input ${num2} is not a valid number`
        messageColor = 'red';
    } else if ( num2 < 2) {
        num2put = `Number 2 input ${num2} is not a valid number`;
        messageColor = 'red';
    }
    const number1HelpElement = document.getElementById('number1Help');
    number1HelpElement.textContent = `${num2output}`;
    number1HelpElement.style.color = messageColor;
})