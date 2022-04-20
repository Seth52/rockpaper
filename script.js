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



function computerPlay(){
   let x= Math.floor(Math.random() * 3) + 1;
   if (x===1){
       return "Rock";}
    else if(x===2){
        return "Paper";}
    
    else {return "Scissors";}
    }
    













