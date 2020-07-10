//define the colors array
let colors = ["red", "green", "blue","yellow","orange", "pink"]
let colorClass = ["redBtn", "greenBtn", "blueBtn","yellowBtn","orangeBtn", "pinkBtn"]
let effect = ["redBtnShadow", "greenBtnShadow", "blueBtnShadow","yellowBtnShadow","orangeBtnShadow", "pinkBtnShadow"]

let computerChoice = []
let userChoice = []

let round = 1
let score = 0
maxrounds = 4
//grab the board to add colored boxes
let main = document.querySelector("main")

// add boxes(divs) to hold each color
for(let i=0; i<colors.length; i++){
    let box = document.createElement("div")
    box.classList.add(colors[i])
    let button = document.createElement("button")
    button.classList.add(colorClass[i])
    button.setAttribute("id",i)
    button.addEventListener("click",highlightBtn)
    box.appendChild(button)
    main.appendChild(box)
}

//let playBtn = document.querySelector("#play")
//playBtn.addEventListener("click", chooseColor)
let playBox = document.createElement("div")
playBox.classList.add("gamePlay")

let playBtn = document.createElement("button")
playBtn.addEventListener("click", chooseColor)
playBtn.setAttribute("id","play")
playBtn.innerText = "play"
playBox.appendChild(playBtn)
main.appendChild(playBox)


let resetBox = document.createElement("div")
resetBox.classList.add("gameReset")

let resetBtn = document.createElement("button")
resetBtn.addEventListener("click", reset)
resetBtn.setAttribute("id","reset")
resetBtn.innerText = "reset"
resetBox.appendChild(resetBtn)
main.appendChild(resetBox)

function reset(){
    computerChoice = []
    userChoice = []
    round = 1
    score = 0
    document.querySelector("#points").innerText = "  " + score + " "
    document.querySelector("#level").innerText = " " + round
}


//When user clicks on the buttons to follow simon
function highlightBtn(e){
    //console.log("in highlight function")
    let choice =  parseInt(e.target.getAttribute("id"));
    userChoice.push(choice)
    setTimeout(compareChoices, 1000 * round)
    
}

function compareChoices(){
if(computerChoice.length !== 0){
    console.log("in compare choices function")
    let flag = true;
    //console.log("user choice" + userChoice.length)
    //console.log("computer choice" + computerChoice.length)
    if(userChoice.length === computerChoice.length){
        for(let i=0; i< userChoice.length; i++){
            console.log("in for loop")
            if(userChoice[i] !== computerChoice[i]){
                flag=false
                break
            }
        }
    } else {
        flag = false
    }

    if(flag === false){
        console.log("You are in the same level")
        computerChoice = []
        userChoice = []
    
    } else {
        score = score + 1
        document.querySelector("#points").innerText = "  " + score + " "
        if(round == 4 & score == 4){
            alert("Yay!! you won the game!")
        }
        round = round + 1
        if(round <= maxrounds){
            document.querySelector("#level").innerText = " " + round
            console.log("Moving on to next level " + round)
        }
    }

    computerChoice = []
    userChoice = []
    if (round <= maxrounds){
        for(let i=1; i<=round; i++){
            setTimeout(chooseColor, 1000 * 3 * i)
        }
    }
  
}
}


//computer chooses colors
function chooseColor(){
        console.log("in choose color function")
        let colorIndex = getRandomInt(0,6)
        let classToBeAdded = effect[colorIndex]
        let selectedBtn = "div." + colors[colorIndex] + " button"
        console.log(classToBeAdded)
        computerChoice.push(colorIndex)
        console.log("pushed " + colorIndex + "into computerChoice")
        document.querySelector(selectedBtn).classList.add(classToBeAdded)
        setTimeout(function(){
            document.querySelector(selectedBtn).classList.remove(classToBeAdded)}, 1000)
            
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
