let userName = window.prompt("What is your name?");
userName ? window.alert(`Hello ${userName}!`):window.alert('Please enter a name!');

let userQuestion = window.prompt('What is your question to the Ball of fortune?');

window.alert(`${userName} is asking, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall='It is certain';
    break;
   case 1:
    eightBall='It is decidely so';
    break;
   case 2:
    eightBall='Reply hazy try again';
    break; 
   case 3:
    eightBall='Cannnot predict';
    break; 
   case 4:
    eightBall='Do not count on it';
    break; 
   case 5:
    eightBall='My sources say no';
    break; 
   case 6:
    eightBall='Outlook not so good';
    break;  
   case 7:
    eightBall='Signs point to yes';
    break;   
}

window.alert(eightBall);