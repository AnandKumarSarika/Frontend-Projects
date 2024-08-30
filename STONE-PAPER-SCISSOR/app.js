let userScore=0;
let compScore=0;
let drawScore=0;

const msg=document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const drawGame=()=>{
    drawScore++;
    drawScorePara.innerText=drawScore;
    msg.innerText="GAME DRAW";
    msg.style.backgroundColor="blue";
}
const getCompChoice = ()=>{
    const options=['rock','paper','scissor'];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="YOU WIN";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="YOU LOSE";
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=> {
    const compChoice=getCompChoice();

    if(userChoice=== compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin= compChoice === "scissors" ? false : true;
        }else{
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
}
}


choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})