let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = ()=>{
    const options= ['rock','paper','scissors']
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const showWiner = (userWin, userChoice , compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        msg.style.fontSize = "2rem"
    }
    else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        msg.style.fontSize = "2rem"
    }
}

const drawGame = ()=>{
    msg.innerText = "Game is Draw. Please play Again."
    msg.style.backgroundColor = "#081b31"
    msg.style.fontSize = "2rem"
}
const playGame = (userChoice) => {
    
    const compChoice = genCompChoice()


    if(userChoice===compChoice){
        drawGame()
    }
    else{
        let userWin = true

        if(userChoice==="rock"){
            //scissers, paper
            userWin = compChoice==="paper"? false:true

        }
        else if(userChoice === 'paper'){
            //scissers, rock
            userWin = compChoice === 'scissers'? false:true

        }
        else{
            userWin = compChoice ==='rock'? false:true
        }

        showWiner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
