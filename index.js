let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let turnO=true; 
let newGame=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
const winpattern= 
               [[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box click");
        
        if(turnO){
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkwinner();
        if(count===9 && !isWinner){
            gamedraw();
        }
    });
});

const gamedraw=()=>{
msg.innerText= `Game Was Draw`;
msgContainer.classList.remove("hide");
disablebox();
};

const disablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
};
const checkwinner=()=>{
    for(let pattern of winpattern)
    {
        let pos1 =boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                // console.log("winner",pos1);
                showwinner(pos1);
                return true;
            }
        }
    }
};

const resetGame=()=>{
    turnO=true;
    count=0;
    enablebox();
    msgContainer.classList.add("hide");
};

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);