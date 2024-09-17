// function play() {
//     // hide the home screen. to hide the screen add the class hidden the home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection);

//     // show the playground

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currenAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currenAlphabetElement.innerText;
    const expectedalphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedalphabet);

    //  check right  or wrong key pressed
    if (playerPressed === expectedalphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);





        // ----------------------------------------------------------
        // update score:
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);


        // //  increase the new score
        // const newScore = currentScore + 1;

        // //  update score element
        // currentScoreElement.innerText = newScore;

        // Start a new round
        removeBackgroundColorById(expectedalphabet);
        continueGame();
    }
    else {
        console.log('you missed. lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // -----------------------------------------------------------
        // // step-1: get the current number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);


        // // // sstep-2: reduce the life count
        // const newLife = currentLife - 1;

        // // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;

    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set ramdom generetated alphabet to the screen (show it)
    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;

    // set background color

    setBackgroundColorById(alphabet);


}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    //  1. get final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last slected alphabet highloght
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}