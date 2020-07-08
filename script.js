//define the colors array
let colors = ["red", "green", "blue","yellow","orange", "pink"]

//grab the board to add colored boxes
let main = document.querySelector("main")

// add boxes(divs) to hold each color
for(let i=0; i<colors.length; i++){
    let box = document.createElement("div");
    box.classList.add(colors[i])
    //append the box to the board
    main.appendChild(box);
}