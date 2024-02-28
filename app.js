let boxes = document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");

let newGameBtn=document.querySelector("#new-btn");

let msgContainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");

let turn0 = true;//playerX,player0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const ResetGame =  () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0){
            // player o turn
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();

    });
    });

    const   disableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    };

    const   enableBoxes = () => {
        for(let box of boxes){
         box.disabled = false ;
         box.innerText="";
        }
    };



    const showWinner = (winner) => {
      msg.innerText=`Congratulations, Winner is ${winner}`; 
      console.log(msg.innerText); 
      msgContainer.classList.remove("hide");
      disableBoxes();
    }

    const checkWinner = () => {
        for(let patttern of winPatterns){
               let pos1Value =  boxes[patttern[0]].innerText;
               let pos2Value =  boxes[patttern[1]].innerText;
               let pos3Value =  boxes[patttern[2]].innerText;

               if(pos1Value  != "" && pos2Value != "" && pos3Value != ""){
                if(pos1Value == pos2Value && pos2Value == pos3Value ){
                    console.log("winner",pos1Value);//
                    showWinner(pos1Value);
                }

            }
        }
    };

   newGameBtn.addEventListener("click",ResetGame);
   resetBtn.addEventListener("click",ResetGame);




     

