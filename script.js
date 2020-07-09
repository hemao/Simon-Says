//define the colors array
let colors = ["red", "green", "blue","yellow","orange", "pink"]
let colorClass = ["redBtn", "greenBtn", "blueBtn","yellowBtn","orangeBtn", "pinkBtn"]
let effect = ["redBtnShadow", "greenBtnShadow", "blueBtnShadow","yellowBtnShadow","orangeBtnShadow", "pinkBtnShadow"]
let computerChoice = []
let userChoice = []

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

let playBtn = document.querySelector("#play")
playBtn.addEventListener("click", chooseColor)

/* play round 1
computer chooses color */
//chooseColor()


//highlights the button when clicked
function highlightBtn(e){
    let choice =  e.target.getAttribute("id");
    userChoice.push(choice)
    compareChoices()
}

function compareChoices(){
    let flag = true;

    if(userChoice.length == computerChoice.length){
        for(let i=0; i< userChoice.length; i++){
            if(userChoice[i] != computerChoice[i]){
                flag=false
                break
            }
        }
    } else {
        flag = false
    }

    if(flag === false){
        console.log("oops! you selected incorrect color!")
        console.log("You are in the same level")
    } else {
        console.log("Moving on to next level")
    }
}


//computer chooses colors
function chooseColor(){
    let colorIndex = getRandomInt(0,6)
    let classToBeAdded = effect[colorIndex]
    let selectedBtn = "div." + colors[colorIndex] + " button"
    console.log(classToBeAdded)
    computerChoice.push(colorIndex)
    document.querySelector(selectedBtn).classList.add(classToBeAdded)
    setTimeout(function(){
        document.querySelector(selectedBtn).classList.remove(classToBeAdded)}, 2000)

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
