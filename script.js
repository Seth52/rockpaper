/*
rock paper scissors 
input r / p /s buttons  
get computer to start program
randomize a number 1-3 
if 1 rock
if 2 paper
if 3 scissors

if user input r and computer rock - tie 
if user input r and computer paper - you lose comp win
if user input r and comp scissors - you win

if user input p and comp r - you win
if user input p and comp p - tie
if user input p and comp s - you lose

if user input s and comp r - you lose
if user input s and comp p - you win
if user input s and comp s - tie

output result

loop to go again

end 

first make a program that randomly returns rock, paper, scissors

*/ 

let computerSelection=computerPlay();
let test ="";
function computerPlay(){
   let x= Math.floor(Math.random() * 3) + 1;
 
   if (x===1){
       return "rock";}

    else if(x===2){
         return "paper";}
    
    else {return "scissors";}
    }


    /* 
    Write a function that plays a single round of Rock Paper Scissors. 
    The function should take two parameters the playerSelection and 
    computerSelection - 
    and then return a string that declares the 
    winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive 
    so users can input rock, ROCK, RocK or any other variation.*/
    
 /* First we need an input from user - allow case-insensitve
    store input from user
    compare input with computer generated
    decide who won
 */

    let playerSelection = prompt("Choose rock, paper, or scissors and input your choice.").toLowerCase();

   
    
    function playRound(playerSelection, computerSelection){
            if (playerSelection===computerSelection){
            return "It's a tie"}
    
            else if (playerSelection === "rock" && computerSelection ==="paper"){
            return "You lose";}
            
            else if (playerSelection === "rock" && computerSelection === "scissors"){
                return "You win";}
                
                  
            else if (playerSelection ==="paper" && computerSelection==="paper"){
                    return "tie";}    
            else if (playerSelection === "paper" && computerSelection==="rock"){
             return "you win";}
            else if (playerSelection ==="paper" && computerSelection ==="scissors"){
                return "you lose";
            }
             else if (playerSelection ==="scissors" && computerSelection==="scissors"){
                 return "you tie";
             }
             else if (playerSelection ==="scissors" && computerSelection ==="rock"){
                 return "you lose";
             }
             else {return "you win";}
             
                }


     /*Write a NEW function called game(). Call the playRound function
      inside of this one to play a 5 round game that keeps score and 
      reports a winner or loser at the end.Remember loops? 
      This is a great opportunity to use one to play those five rounds:
*/
/*  need to figure out how to keep track of wins
so program needs to run
then a win needs to be allotted
then whoever has 3 wins -- wins 
output result */

function game(){
    for( let i = 0; i <5; i++){
        playRound()
    }


}

}







