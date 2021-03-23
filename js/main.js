let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let stationL = document.querySelector('.stationL');
let stationC = document.querySelector('.stationC');
let stationR = document.querySelector('.stationR');
let userScore = document.querySelector('#user-score');
let computerScore = document.querySelector('#computer-score');
let messageArea = document.querySelector('.battleC');
let score;

let decision;
let clicked = false;

function scoreUp(playerScore) {
    score = Number(playerScore.textContent);
    score++;
    playerScore.textContent = score;
}

function winCheck() {
    if (Number(userScore.textContent) < 5 && Number(computerScore.textContent) < 5) {
        clicked = false;
    } else if (Number(userScore.textContent) == 5){
        messageArea.textContent = 'YOU WIN!'
    } else if (Number(computerScore.textContent) == 5){
        messageArea.textContent = 'YOU LOSE!'
    }
}

rock.addEventListener('click', () => {
    if (clicked == false) {
        clicked = true;
        rock.classList.add('rock-image-clicked');
        stationL.classList.replace('stationL', 'battleL');
        decision = Math.random();
        if (decision < 0.5) {
            paper.classList.add('paper-image-clicked');
            stationC.classList.replace('stationC', 'battleR');
            paper.setAttribute('id', 'computer-win');
            rock.setAttribute('id', 'user-lose');
            setTimeout(() => {
                scoreUp(computerScore);
                stationC.classList.replace('battleR', 'stationC');
                stationL.classList.replace('battleL', 'stationL');
                rock.removeAttribute('id', 'user-lose');
                rock.classList.remove('rock-image-clicked');
                paper.removeAttribute('id', 'computer-win');
                paper.classList.remove('paper-image-clicked');
                winCheck();
            }, 3000);
        } else {
            scissors.classList.add('scissors-image-clicked');
            stationR.classList.replace('stationR', 'battleR');
            rock.setAttribute('id', 'user-win');
            scissors.setAttribute('id', 'computer-lose');
            setTimeout(() => {
                scoreUp(userScore);
                stationR.classList.replace('battleR', 'stationR');
                stationL.classList.replace('battleL', 'stationL');
                rock.removeAttribute('id', 'user-win');
                rock.classList.remove('rock-image-clicked');
                scissors.removeAttribute('id', 'computer-lose');
                scissors.classList.remove('scissors-image-clicked');
                winCheck();
            }, 3000);            
        }
    }
});

paper.addEventListener('click', () => {
    if (clicked == false) {
        clicked = true;
        paper.classList.add('paper-image-clicked');
        stationC.classList.replace('stationC', 'battleL');
        decision = Math.random();
        if (decision < 0.5) {
            scissors.classList.add('scissors-image-clicked');
            stationR.classList.replace('stationR', 'battleR');
            scissors.setAttribute('id', 'computer-win');
            paper.setAttribute('id', 'user-lose');
            setTimeout(() => {
                scoreUp(computerScore);
                stationR.classList.replace('battleR', 'stationR');
                stationC.classList.replace('battleL', 'stationC');
                paper.removeAttribute('id', 'user-lose');
                paper.classList.remove('paper-image-clicked');
                scissors.removeAttribute('id', 'computer-win');
                scissors.classList.remove('scissors-image-clicked');
                winCheck();
            }, 3000);
        } else {
            rock.classList.add('rock-image-clicked');
            stationL.classList.replace('stationL', 'battleR');
            paper.setAttribute('id', 'user-win');
            rock.setAttribute('id', 'computer-lose');
            setTimeout(() => {
                scoreUp(userScore);
                stationL.classList.replace('battleR', 'stationL');
                stationC.classList.replace('battleL', 'stationC');
                paper.removeAttribute('id', 'user-win');
                paper.classList.remove('paper-image-clicked');
                rock.removeAttribute('id', 'computer-lose');
                rock.classList.remove('rock-image-clicked');
                winCheck();
            }, 3000);            
        }
    }
});

scissors.addEventListener('click', () => {
    if (clicked == false) {
        clicked = true;
        scissors.classList.add('scissors-image-clicked');
        stationR.classList.replace('stationR', 'battleL');
        decision = Math.random();
        if (decision < 0.5) {
            rock.classList.add('rock-image-clicked');
            stationL.classList.replace('stationL', 'battleR');
            rock.setAttribute('id', 'computer-win');
            scissors.setAttribute('id', 'user-lose');
            setTimeout(() => {
                scoreUp(computerScore);
                stationL.classList.replace('battleR', 'stationL');
                stationR.classList.replace('battleL', 'stationR');
                scissors.removeAttribute('id', 'user-lose');
                scissors.classList.remove('scissors-image-clicked');
                rock.removeAttribute('id', 'computer-win');
                rock.classList.remove('rock-image-clicked');
                winCheck();
            }, 3000);
        } else {
            paper.classList.add('paper-image-clicked');
            stationC.classList.replace('stationC', 'battleR');
            scissors.setAttribute('id', 'user-win');
            paper.setAttribute('id', 'computer-lose');
            setTimeout(() => {
                scoreUp(userScore);
                stationC.classList.replace('battleR', 'stationC');
                stationR.classList.replace('battleL', 'stationR');
                scissors.removeAttribute('id', 'user-win');
                scissors.classList.remove('scissors-image-clicked');
                paper.removeAttribute('id', 'computer-lose');
                paper.classList.remove('paper-image-clicked');
                winCheck();
            }, 3000);            
        }
    }
});