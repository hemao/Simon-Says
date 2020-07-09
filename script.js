//define the colors array
let colors = ["red", "green", "blue","yellow","orange", "pink"]
let colorClass = ["redBtn", "greenBtn", "blueBtn","yellowBtn","orangeBtn", "pinkBtn"]

//grab the board to add colored boxes
let main = document.querySelector("main")

// add boxes(divs) to hold each color
for(let i=0; i<colors.length; i++){
    let box = document.createElement("div")
    box.classList.add(colors[i])
    
    let button = document.createElement("button")
    button.classList.add(colorClass[i])
    button.addEventListener("click",highlightBtn)
    box.appendChild(button)
    main.appendChild(box)
}

let playBtn = document.querySelector("#play")
playBtn.addEventListener("click", chooseColor)

//highlights the button when clicked
function highlightBtn(){
    
}


//computer chooses colors
function chooseColor(){
   //document.querySelector("div.red button").click();
   // let colorIndex = getRandomInt(0,6)
   // document.querySelector("div.red button").classList.add("redBtnShadow")
   // setTimeout(function(){
    //    document.querySelector("div.red button").classList.remove("redBtnShadow")}, 2000)
    //    document.querySelector("div.red button").classList.add("redBtnShadow")

    document.querySelector("div.green button").classList.add("greenBtnShadow")
    setTimeout(function(){
        document.querySelector("div.green button").classList.remove("greenBtnShadow")}, 2000)
        document.querySelector("div.green button").classList.add("greenBtnShadow")
    
    document.querySelector("div.yellow button").classList.add("yellowBtnShadow")
    setTimeout(function(){
        document.querySelector("div.yellow button").classList.remove("yellowBtnShadow")}, 2000)
        document.querySelector("div.yellow button").classList.add("yellowBtnShadow")
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
