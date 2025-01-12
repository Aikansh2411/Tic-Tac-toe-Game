let box = document.querySelectorAll(".button");
let turn = "X";
let msg = document.querySelector(".winnerMsg");
let msgContainer = document.querySelector(".winnerContainer");
let newGame = document.querySelector(".NewGame");
let resetBtn = document.querySelector(".Reset");
let count = 0;

box.forEach(btn => {
    btn.addEventListener("click", () => {
        if(turn === "X"){
            btn.innerText = "X";
            btn.style.color = "#60435f";
            turn = "O";
            btn.disabled = true;
        } else {
            btn.innerText = "O";
            btn.style.color = "#857f74";  
            turn = "X";
            btn.disabled = true;
        }
        count++;
        checkWinner();
        checkDraw();
    });
});



const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1 ,4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const disableButtons = () =>{
    for (let element of box)
    {
        element.disabled = true;
    }
};

const checkDraw = () => {
    if (count === 9)
    {
        msg.innerText = `Well played, its a draw for both X and O`;
        count = 0;
        msgContainer.classList.remove("hide");
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
};


const enableButtons = () =>{
    for (let element of box)
    {
        element.disabled = false;
        element.innerText = "";
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let val1 = box[pattern[0]].innerText;
        let val2 = box[pattern[1]].innerText;
        let val3 = box[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "")
            {
                if(val1 === val2 && val2 === val3)
                    {   
                        console.log("Winner",val1);
                        showWinner(val1);
                    }
                }       
    }
};

const resetGame = () => {
    enableButtons();
    msgContainer.classList.add("hide");
    count = 0;
};



newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);