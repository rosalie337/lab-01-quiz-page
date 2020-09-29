import { countAsAYes, countAsNo } from './count-as-yes.js'

// import functions and grab DOM elements
const button = document.getElementById('quiz-button');
const results = document.getElementById('results')
// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    
    //Ask user their name. Their name should be used in subsequent prompts
    const userName = prompt('Please enter your name');

    const userConfirmation = confirm('Are you prepared to take this quiz?');

    if (!userConfirmation) {
        alert('Next time perhaps?');
        return;
    }
    let correctAnswers = 0;

const mostDays = prompt(`Aight ${userName}! Do I spend most of my days at the mall?`);
if (countAsNo(mostDays)) {
    correctAnswers++;
}

const yellCabbie = prompt(`Did I yell to the cabbie, - "Yo homes smell ya later!"`);
if (countAsAYes(yellCabbie)) {
    correctAnswers++;
}

const bornNRaised = prompt(`Most important question. Was I born and raised in West Philadelphia?`);
if (countAsAYes(bornNRaised)) {
    correctAnswers++;
}
alert('See how you did by checking the page for your results');

results.textContent = `Hey ${userName}, you got ${correctAnswers} correct out of 3.`;

});