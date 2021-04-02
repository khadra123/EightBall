//Asks for the player's name
var userName = window.prompt("What is your name?");
window.alert(`Hello ${userName}!`);

//stores name information and alerts the player what they wrote
let userQuestion = window.prompt('What is your question to the Ball of fortune?');

window.alert(`${userName} is asking, ${userQuestion}`);

//Selects a number between 0-7 (8 not included since it starts from 0)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//Based on number chooses a value to output
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

//Displays the answer
window.alert(eightBall);