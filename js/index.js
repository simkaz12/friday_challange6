console.clear();

const rockDOM = document.getElementById('rock');
const paperDOM = document.getElementById('paper');
const scissorsDOM = document.getElementById('scissors');
const bodyDOM = document.body;
const resetDOM = document.getElementById('reset');

const pcChoice0 = 0; //rock
const pcChoice1 = 1; //paper
const pcChoice2 = 2; //scissors

const youWon = `YOU WON!!!`
const youLost = `You Lost...`
const draw = `Draw...`

const resetButtonHTML = `<button id="reset">Reset</button>`;

const rockVsRock = `<img src="./rock vs/Rocks_Vs_rock.jpg" alt="rockVsRock">`;
const rockVsPaper = `<img src="./rock vs/Rocks_Vs_paper.jpg" alt="rockVsPaper">`;
const rockVsScissors = `<img src="./rock vs/Rock_VS_Scissors.png" alt="rockVsScissors">`;

const paperVsRock = `<img src="./paper vs/Rocks_Vs_paper.jpg" alt="paperVsRock">`;
const paperVsPaper = `<img src="./paper vs/paper_vs_paper.jpg" alt="paperVsPaper">`;
const paperVsScissors = `<img src="./paper vs/paper_vs_scissors.jpg" alt="paperVsScissors">`;

const scissorsVsRock = `<img src="./scissors vs/Rock_VS_Scissors.png" alt="scissorsVsRock">`;
const scissorsVsPaper = `<img src="./scissors vs/paper_vs_scissors.jpg" alt="paperVsScissors">`;
const scissorsVsScissors = `<img src="./scissors vs/scissors_vs_scissors.jpg" alt="scissorsVsScissors">`;

function getRandom() {
    return Math.floor(Math.random() * 3);
};

rockDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const rez = getRandom(3);
    if (rez === 0) {
        bodyDOM.innerHTML = `<div id="imgDiv">${rockVsRock}</div><p>Draw</p>${resetButtonHTML}`; 
        console.log(draw);
    } else if (rez === 1) {
        bodyDOM.innerHTML = `<div id="imgDiv">${rockVsPaper}</div><p>You Lost...</p>${resetButtonHTML}`;
        console.log(youLost);
    } else {
        bodyDOM.innerHTML = `<div id="imgDiv">${rockVsScissors}</div><p>You Won!!!</p>${resetButtonHTML}`;
        console.log(youWon);
    }

});
paperDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const rez = getRandom(3);
    if (rez === 0) {
        bodyDOM.innerHTML = `<div id="imgDiv">${paperVsRock}</div><p>You Won!!!</p>${resetButtonHTML}`;
        console.log(youWon);
    } else if (rez === 1) {
        bodyDOM.innerHTML = `<div id="imgDiv">${paperVsPaper}</div><p>Draw</p>${resetButtonHTML}`;
        console.log(draw);
    } else {
        bodyDOM.innerHTML = `<div id="imgDiv">${paperVsScissors}</div><p>You Lost...</p>${resetButtonHTML}`;
        console.log(youLost);
    }
});
scissorsDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const rez = getRandom(3);
    if (rez === 0) {
        bodyDOM.innerHTML = `<div id="imgDiv">${scissorsVsRock}</div><p>You Lost...</p>${resetButtonHTML}`;
        console.log(youLost);
    } else if (rez === 1) {
        bodyDOM.innerHTML = `<div id="imgDiv">${scissorsVsPaper}</div><p>You Won!!!</p>${resetButtonHTML}`;
        console.log(youWon);
    } else {
        bodyDOM.innerHTML = `<div id="imgDiv">${scissorsVsScissors}</div><p>Draw</p>${resetButtonHTML}`;
        console.log(draw);
    }
});
resetDOM.addEventListener('click', () => {
    bodyDOM.innerHTML = `<div>Pasirink norint pradeti:</div>
    <form id="rock">
        <button type="submit">Rock</button>
    </form>
    <form id="paper">
        <button type="submit">Paper</button>
    </form>
    <form id="scissors">
        <button type="submit">Scissors</button>
    </form>`;
});

