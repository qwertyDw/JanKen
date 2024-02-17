// 1. define-> zarlah
var playerChoice = document.querySelector(".yourChoice");
var ComChoice = document.querySelector(".ComChoice");
var winner=document.querySelector(".winner");
var random;
var countP=document.querySelector(".pCount");
var countC=document.querySelector(".cCount")
var countPl=0;
var countCl=0;
//2. function zarlah
function play(player){
    if(player=='rock'){
        playerChoice.innerText="Player:Rock";
    }if(player=='paper'){
        playerChoice.innerText="Player:Paper";
    }if(player=='scissors'){
        playerChoice.innerText="Player:Scissors";
    }
    // 0, 1, 2-> rock, 1->paper
    //Math.random() -> 0-1 in hoorond random too gargaj irne.
    random=Math.floor(Math.random()*3);
    console.log(random)
    if(random==0){
        ComChoice.innerText="Computer:Rock"
    }if(random==1){
        ComChoice.innerText="Computer:Paper"
    }if(random==2){
        ComChoice.innerText="Computer:Scissors"
    }
    if((player=='rock' && random==2)||(player=='scissors' && random==1)||(player=='paper' && random==0)){
        winner.innerText="Player wins."
        countPl++;
        countP.innerText="Player: "+countPl
    }
    else if((player=='rock' && random==1)||(player=='scissors' && random==0)||(player=='paper' && random==2)){
        winner.innerText="Computer wins."
        countCl++;
        countC.innerText="Computer: "+countCl
    }
    else if((player=='scissors' && random==2) || (player=='rock' && random==0) || (player=='paper' && random==1)){
        winner.innerText="Tie"
    }
    if(countCl==3 || countPl==3){
        alert("You've Won.")
        restart();
    }
}
function restart(){
    countCl=0;
    countPl=0;
    countC.innerText="Computer: "+countCl
    countP.innerText="Player: "+countPl
    winner.innerText=""
    ComChoice.innerText="Computer:"
    playerChoice.innerText="Player:"
}
