// variable for randomly generated number everytime at the start of the game 19-120
var randomNumber=Math.floor(Math.random()*101 + 19)

// running debugger
console.log(randomNumber)

// returns the random number to show in the html 
$('.randomnumber').text(randomNumber);

// variable for each crystal needs to generate a random number when clicked between 1-12
var randomJewelNum1 = Math.floor(Math.random()*11 + 1)
var randomJewelNum2 = Math.floor(Math.random()*11 + 1)
var randomJewelNum3 = Math.floor(Math.random()*11 + 1)
var randomJewelNum4 = Math.floor(Math.random()*11 + 1)

// running debugger
console.log (randomJewelNum1)

// variables for totals of wins, losses, and total score so far
var wins = 0;
var losses = 0;
var userTotal = 0;

// returns the losses and wins to show in the html
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// each time a crystal is clicked it adds to the total score box;
// if the user total exceeds the random number calls the loser function
// if the user total equals the random number calls the winner function  
$('#clear').on ('click', function(){
    userTotal = userTotal + randomJewelNum1;
    console.log("New userTotal= " + userTotal);
    $('.totalscore').text(userTotal); 
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          loser();
        }   
  })
$('#green').on ('click', function(){
    userTotal = userTotal + randomJewelNum2;
    console.log("New userTotal=" + userTotal);
    $('.totalscore').text(userTotal);
    if (userTotal === randomNumber){
        winner();
    }
    else if (userTotal > randomNumber){
        loser();
    }
})  

$('#red').on ('click', function(){
    userTotal = userTotal + randomJewelNum3;
    console.log("New userTotal= " + userTotal);
    $('.totalscore').text(userTotal);
    if (userTotal === randomNumber){
        winner();
    }
    else if (userTotal > randomNumber){
        loser();
    }
})
$('#yellow').on('click', function(){
    userTotal = userTotal + randomJewelNum4;
    console.log("New userTotal= " + userTotal);
    $('.totalscore').text(userTotal);
    if  (userTotal === randomNumber){
        winner();
    }
    else if (userTotal > randomNumber){
        loser();
    }
})
  
// defined winner and loser functions with alerts
function winner(){
    alert("You're a winner!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

function loser(){
    alert("You're a loser!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

// reset function which resets the random number, the jewel random numbers, and total score   
function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    console.log(randomNumber)
    $('.randomnumber').text(randomNumber);
    randomJewelNum1= Math.floor(Math.random()*11+1);
    randomJewelNum2= Math.floor(Math.random()*11+1);
    randomJewelNum3= Math.floor(Math.random()*11+1);
    randomJewelNum4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('.totalscore').text(userTotal);
    } 