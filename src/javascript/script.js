
var player_choice = "";
var ferramentas = ['rock', 'paper', 'scissors']


var computer_choice = "";
var player_points = 0;
var computer_points = 0;
let resultado = document.getElementById("result")


function computer() {
  const random = Math.floor(Math.random() * ferramentas.length);
  var choice = ferramentas[random];
  computer_choice = document.getElementById("computer_choice").innerHTML = choice;
  check();
}

 function rock() {
  player_choice =  document.getElementById("player_choice").innerHTML = ferramentas[0];
  computer();
}

 function paper() {
   player_choice = document.getElementById("player_choice").innerHTML = ferramentas[1];
   computer();
}

 function scissors() {
   player_choice = document.getElementById("player_choice").innerHTML = ferramentas[2];
   computer();
}


function check() {
  if(player_choice === computer_choice) {
    document.getElementById("result").innerHTML = "Draw";
  }

  if(player_choice === 'rock' && computer_choice === 'paper') {
    document.getElementById("result").innerHTML = "You Lose this round";
    computer_points++
    points();
  }
  else if(player_choice === 'paper' && computer_choice === 'rock') {
    document.getElementById("result").innerHTML = "You Win this round";
    player_points++
    points();
  }

  if(player_choice === 'scissors' && computer_choice === 'paper') {
    document.getElementById("result").innerHTML = "You Win this round";
    player_points++
    points();
  }
  else if(player_choice === 'paper' && computer_choice === 'scissors') {
    document.getElementById("result").innerHTML = "You Lose this round";
    computer_points++
    points();
  }


  if(player_choice === 'rock' && computer_choice === 'scissors') {
    document.getElementById("result").innerHTML = "You Win this round";
    player_points++
    points();
  }
  else if (player_choice === 'scissors' && computer_choice === 'rock') {
    document.getElementById("result").innerHTML = "You Lose this round";
    computer_points++
    points();
  }

}

function points() {
 document.getElementById("player-points").innerHTML = String(player_points);

 document.getElementById("computer-points").innerHTML = String(computer_points); // transfere o valor da pontuação para o site

 if (computer_points === 5) {
    document.getElementById("result").innerHTML = "Game Over - Computer Wins"
  
    zerar();
    
 }
 else if(player_points === 5) {
    document.getElementById("result").innerHTML = "Game Over - Player Wins"
  
    zerar();
 }
}

function zerar() {
  player_points = 0;
  computer_points = 0;
  console.log(player_points);
  console.log(computer_points);
  document.getElementById("player-points").innerHTML = String(player_points);

  document.getElementById("computer-points").innerHTML = String(computer_points);

}

