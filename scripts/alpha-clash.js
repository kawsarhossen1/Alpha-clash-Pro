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

function continueGame(){
// step-1: generate a random alphabet
const alphabet = getARandomAlphabet();
console.log('your random alphabet', alphabet);

// set ramdom generetated alphabet to the screen (show it)
const currenAlphabetElement = document.getElementById('current-alphabet');
currenAlphabetElement.innerText = alphabet;

// set background color

setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}