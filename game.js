let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissor"]
    const randIdx =Math.floor(Math.random()*3);
    return option[randIdx]
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText= "Draw Play Again";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore
        console.log("You Win ");
        msg.innerText= `You Win!!!  Your ${userChoice} beats  ${compChoice}`;
        
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Loose")
        msg.innerText= `You Loose!!!  ${compChoice} beats your ${userChoice}`;
    }
}






const playGame=(userChoice)=>{
    console.log("user choice is",userChoice)
    const compChoice=genCompChoice()
    console.log("comp choice is",compChoice)


    if(userChoice===compChoice){
        //draw game
        drawGame();

    }else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"?false:true;
        }
        else {
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }




}







choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playGame(userChoice);

    })
    });