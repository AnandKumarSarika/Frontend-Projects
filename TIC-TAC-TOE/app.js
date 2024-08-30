let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rst");
let newGame=document.querySelector("#new");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
let count = 0; 

const WinPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],   
]

const resetGame=() =>{
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgCon.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=true; 
    }   
}
const enableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=false; 
        box.innerText="";
    }   
}

const showWinner=(winner)=>{
    msg.innerText= `CONGRATULATIONS, WINNER IS ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() => {
    for(let pattern of WinPat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}


reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);