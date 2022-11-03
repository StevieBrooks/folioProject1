const greeting = ['Hey there!', 'What\'s up!', 'How\'s it going?', 'Hello there', 'Well hello!', 'HELLOOOOOO!', 'Greetings and salutations,'];
let greetChoice = '';
function greetSelect() {
    let greetIndex = Math.floor(Math.random() * greeting.length);
    return greetChoice = greeting[greetIndex];
}

const appComp = ['You are looking terrific today.', 'Damn, you look incredible.', 'You\'re such a sharp dresser.', 'You look so dope.',
                'If Da Vinci was still alive, he would have a field day with you.', 'Your style is hard to rival.', 'Today, you look a million dollars.',
                'Wow, when God was assiging beauty to the masses, you were clearly at the front of the queue.', 'You look impeccable.', 
                'Wow, you look great.', 'Man, is there ever a day when you don\'t look top-notch?', 'You look good enough to eat.', 
                'Fair play, you look amazing.', 'Once again, you look a cut above the rest.'];
const demComp = ['There is something about you that inspires.', 'You emit a truly robust vibe.', 'There is a classy air about you.', 
                'You have a commanding presence today.', 'You come across as someone who will be successful.', 'You have a unique demeanour.',
                'The word "unique" seems fitting for you.'];

let appCompResult = '';
    function appCompSelect() {
        let appCompIndex = Math.floor(Math.random() * appComp.length);
        return appCompResult = appComp[appCompIndex];
    }

let demCompResult = '';
function demCompSelect() {
    let demCompIndex = Math.floor(Math.random() * demComp.length);
    return demCompResult = demComp[demCompIndex];
}

let compChoice = '';
function compChoiceSelect() {
    let compChoiceIndex = Math.ceil(Math.random() * 2);
    if(compChoiceIndex === 1) {
        return compChoice = appCompResult;
    } else {
        return compChoice = demCompResult;
    }
}

const appAdvice = ['You don\'t need to look good today, take it easy.', 'You\'re making others look bad, chill out', 'Why not hit the streets.',
                'You should go outside and challenge the sun to a shine-off!', 'Calm down, you\'re making everyone else look bad.', 
                'Take yourself shopping and get something nice.', 'Now the only question is: Do you feel good?', 'Keep up the great work!'];
const demAdvice = ['Keep doing what you\'re best at.', 'Don\'t give up chasing your dreams.', 'You\'ll always be a winner.', 
                'You know what they say, legends never die.', 'Keep inspiring.'];
let apAdChoice = '';
function apAdSelect() {
    let apAdIndex = Math.floor(Math.random() * appAdvice.length);
    return apAdChoice = appAdvice[apAdIndex];
}

let demAdChoice = '';
function demAdSelect() {
    let demAdIndex = Math.floor(Math.random() * demAdvice.length);
    return demAdChoice = demAdvice[demAdIndex];
}

let finalAdvice = '';
function adviceSelect() {
    if (compChoice === appCompResult) {
        return finalAdvice = apAdChoice;
    } else {
        return finalAdvice = demAdChoice;
    }
}

greetSelect();
appCompSelect();
demCompSelect();
compChoiceSelect();
apAdSelect();
demAdSelect();
adviceSelect();
console.log(`${greetChoice}, ${compChoice}, ${finalAdvice}`)