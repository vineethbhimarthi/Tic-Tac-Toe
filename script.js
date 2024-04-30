let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
let clicks=0;
let hasWinner=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX)
        {
            box.innerHTML="X";
            turnX=false;
            clicks++;
        }
        else{
            box.innerHTML="O";
            turnX=true;
            clicks++;
        }
        box.disabled=true;
        hasWinner= checkWinner();
        if(clicks==9 &&!hasWinner )
        draw();
    });

});

const disableBoxes=() => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=() => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner=(winner)=>{
    msg.innerText=`Congratulations, ${winner} is WINNER`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
function checkWinner(){
    for(pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("winner",pos1);
            showWinner(pos1);
            disableBoxes();
            return true;
        }
    }

    }
    return false;
}
const draw=()=>{
    msg.innerText=`OOPS!, Game is Drawn`;
    msgContainer.classList.remove("hide");
    //disableBoxes();
}

let resetGame = () =>{
    turnX=true;
    enableBoxes();
   msgContainer.classList.add("hide");
   clicks=0;
 hasWinner=false;
}

newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
 