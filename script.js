const box = document.getElementById('game-container');
const char = document.getElementById("character");
const dot = document.getElementById("dot");
const fakeDot1 = document.getElementById("fakeDot1");
const fakeDot2 = document.getElementById("fakeDot2");
const fakeDot3 = document.getElementById("fakeDot3");
const fakeDot4 = document.getElementById("fakeDot4");
const fakeDot5 = document.getElementById("fakeDot5");
const button = document.getElementById("button")
const left_rightChat = document.getElementById("left-right");
const top_bottomChat = document.getElementById("top-bottom");
let score = document.getElementById("score");
let point = -1; //Its at -1 because I call change initially
let once = 0
const counted = document.getElementById("counter")
const winner = document.getElementById("rules")

let canChange = true; // Flag to control when change can happen
const changeDelay = 500;
const changeDelay2 = 1500;
const changeCountDelay = 500; // Delay in milliseconds (e.g., 500ms or half a second)

const boxRect = box.getBoundingClientRect();
const boxWidth = boxRect.width;
const boxHeight = boxRect.height;

const buttonRect = button.getBoundingClientRect();
const buttonWidth = buttonRect.width;
const buttonHeight = buttonRect.height;

let thisleft = -300
let thisbottom = -300

button.style.left = `${thisleft}px`
button.style.top = `${thisbottom}px`

let specialNum = Math.floor(Math.random() * (100 + point) - point)
let specialNum2 = Math.floor(Math.random() * (100 + point) - point)
let specialNum3 = Math.floor(Math.random() * (100 + point) - point)
let specialNum4 = Math.floor(Math.random() * (100 + point) - point)

//Add an invisible level where the background and the dot become the save color to be mysterious

function ranNum(){
    if(specialNum + 1 == point){
        specialNum = Math.floor(Math.random() * (100 + point) - point)
    }
    if(specialNum > 15 + point){
        specialNum = specialNum - 5
    }
    if(specialNum < point){
        specialNum = Math.floor(Math.random() * (100 + point) - point)
    }
}
function ranNum2(){
    if(specialNum2 == point){
        specialNum2 = Math.floor(Math.random() * (100 + point) - point)
        if(specialNum2 == specialNum){
            specialNum2 = Math.floor(Math.random() * (100 + point) - point)
        }
    }
    if(specialNum2 > 25){
        specialNum2 = specialNum2 - 5
    }
    if(specialNum2 < point){
        specialNum2 = Math.floor(Math.random() * (100 + point) - point)
    }
}
function ranNum3(){
    if(specialNum3 == point){
        specialNum3 = Math.floor(Math.random() * (100 + point) - point)
        if(specialNum3 == specialNum2 || specialNum3 == specialNum){
            specialNum3 = Math.floor(Math.random() * (100 + point) - point)
        }
    }
    if(specialNum3 > 30){
        specialNum3 = specialNum3 - 5
    }
    if(specialNum3 < point){
        specialNum3 = Math.floor(Math.random() * (100 + point) - point)
    }
}
function ranNum4(){
    if(specialNum4 == point){
        specialNum4 = Math.floor(Math.random() * (100 + point) - point)
        if(specialNum4 == specialNum || specialNum4 == specialNum2 || specialNum == specialNum3){
            specialNum4 = Math.floor(Math.random() * (100 + point) - point)
        }
    }
    if(specialNum4 > 35){
        specialNum4 = specialNum4 - 5
    }
    if(specialNum4 < point){
        specialNum4 = Math.floor(Math.random() * (100 + point) - point)
    }
}

change()

function change() {
    console.log(specialNum)
    console.log(specialNum2)
    console.log(specialNum3)
    console.log(specialNum4)
    const boxRect = box.getBoundingClientRect();
    const boxWidth = boxRect.width;
    const boxHeight = boxRect.height;
    //just in case I want to add a timer for a game over function
    if (!canChange) return;
    canChange = false;
    ranNum()
    ranNum2()
    ranNum3()
    ranNum4()
if(!(point == specialNum)){
        box.style.backgroundColor = "white"
        dot.style.border = "3px solid black"
    // Ensure the dot stays within the box and doesn't overflow
    let left = Math.floor(Math.random() * (boxWidth - 50));
    let bottom = Math.floor(Math.random() * (boxHeight - 50));

    // Update dot's position, using left and top only
    dot.style.left = `${left}px`;
    dot.style.top = `${bottom}px`;

    //displays the score
    point++
    score.textContent = `Score = ${point}`;

    console.log("Dot spawned at:", left, bottom);
     
    dot.style.background = "linear-gradient(to right, black, gray, white)"

    let thisleft = -300
    let thisbottom = -300

    button.style.left = `${thisleft}px`
    button.style.top = `${thisbottom}px`
    //A delay to prevent it from being clicked twice
    setTimeout(() => {
        canChange = true;
    }, changeDelay);

    if (point >= 1){
        counter()
    }
}
if(point == specialNum){
    once++
    button.style.backgroundColor = "red"

    let left = Math.floor(Math.random() * (boxWidth - 50));
    let bottom = Math.floor(Math.random() * (boxHeight - 50));
    let thisleft = Math.floor(Math.random() * (boxWidth - 50));
    let thisbottom = Math.floor(Math.random() * (boxHeight - 50));

    dot.style.left = `${left}px`;
    dot.style.top = `${bottom}px`;
    dot.style.border = "3px solid red"

    button.style.left = `${thisleft}px`
    button.style.top = `${thisbottom}px`

    score.textContent = `Score = ${point}`

    console.log("Dot spawned at:", left, bottom);

    setTimeout(() => {
        canChange = true;
    }, changeDelay);
}
if(point == specialNum2){
    let left = Math.floor(Math.random() * (boxWidth - 50));
    let bottom = Math.floor(Math.random() * (boxHeight - 50));

    dot.style.left = `${left}px`;
    dot.style.top = `${bottom}px`;

    box.style.backgroundColor = "blue"
    dot.style.border = "3px solid blue"
    dot.style.background = "blue"

    score.textContent = `Score = ${point}`

    console.log("Dot spawned at:", left, bottom);

    setTimeout(() => {
        canChange = true;
    }, changeDelay);
}
if(point == specialNum3){
    let left = Math.floor(Math.random() * (boxWidth - 50));
    let bottom = Math.floor(Math.random() * (boxHeight - 50));

    dot.style.left = `${left}px`;
    dot.style.top = `${bottom}px`;

    box.style.backgroundColor = "blue"
    dot.style.border = "3px solid blue"
    dot.style.background = "blue"

    score.textContent = `Score = ${point}`

    console.log("Dot spawned at:", left, bottom);

    setTimeout(() => {
        canChange = true;
    }, changeDelay);
}
if(point == specialNum4){
    let left = Math.floor(Math.random() * (boxWidth - 50));
    let bottom = Math.floor(Math.random() * (boxHeight - 50));

    dot.style.left = `${left}px`;
    dot.style.top = `${bottom}px`;

    box.style.backgroundColor = "blue"
    dot.style.border = "3px solid blue"
    dot.style.background = "blue"

    score.textContent = `Score = ${point}`

    console.log("Dot spawned at:", left, bottom);

    setTimeout(() => {
        canChange = true;
    }, changeDelay);
}
if(point == 100){
    winner.style.color = "gold"
    winner.textContent = "You Win!"
    winner.style.fontSize = "60px"
   }
}
//Visually says "+1" to indicate you touched the dot
function counter() {
    counted.textContent = "+1";
    setTimeout(() => {
        counted.textContent = "";
    }, changeCountDelay);
}

function unlock(){
    console.log(specialNum)
    console.log(point)
    if(point == specialNum){
    console.log("I made it")
    dot.style.border = "3px solid black";
    score.textContent = `Score = ${point}`
    };
    point++
}

function changeColor(){
    const boxRect = box.getBoundingClientRect();  // Recalculate every time
    const x = event.clientX - boxRect.left;
    const y = event.clientY - boxRect.top;
    hue1 = Math.floor(Math.random() * (255));
    hue2 = Math.floor(Math.random() * (255));
    hue3 = Math.floor(Math.random() * (255));
    char.style.backgroundColor = `rgb(${hue1}, ${hue2}, ${hue3})`
}

window.addEventListener('mousemove', function(event) {
    changeColor()

    const boxRect = box.getBoundingClientRect();  // Recalculate every time
    const x = event.clientX - boxRect.left;
    const y = event.clientY - boxRect.top;

    // Update the character's position
    char.style.left = `${x - 12.5}px`;
    char.style.top = `${y - 12.5}px`;

    const charRect = char.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();

    // Position messages based on the char and dot positions
    if (charRect.right < dotRect.right) {
        left_rightChat.textContent = "To the Right";
    } else {
        left_rightChat.textContent = "To the Left";
    }

    if (charRect.top < dotRect.top) {
        top_bottomChat.textContent = "Below You";
    } else {
        top_bottomChat.textContent = "Above You";
    }

    // If the char and dot are touching, change the dot's position and update score
    if (areElementsTouching(char, dot)) {;
        change()
    }
    if (areElementsTouching(char, button)) {
        if(point == specialNum){unlock()}
    }
});


// Detect if two elements are touching (i.e., their bounding boxes are intersecting)
function areElementsTouching(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}
