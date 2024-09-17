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

    // get the expected to press
    const currenAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currenAlphabetElement.innerText;
    const expectedalphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedalphabet);

    //  check right  or wrong key pressed
    if (playerPressed === expectedalphabet) {
        console.log('you get a point');
        // update score:

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        //  increase the new score
        const newScore = currentScore + 1;

        //  update score element
        currentScoreElement.innerText = newScore;

        // Start a new round
        removeBackgroundColorById(expectedalphabet);
        continueGame();
    }
    else {
        console.log('you missed. lost a life');

        // // step-1: get the current number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);


        // // sstep-2: reduce the life count
        const newLife = currentLife - 1;

        // // step-3: display the updated life count
        currentLifeElement.innerText = newLife;

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}