console.log("Working")

// <!-- PSEUDOCODE STARTS HERE FRIEND -->
//     <!-- STEPS:  -->
//     <!-- 1. CREATE CLASSES FOR ALL OBJECTS I WANT TO BE DISPLAYED ON EACH PAGE -->
//     <!-- 2. CREATE FUNCTIONS FOR GETTING INPUT FROM PLAYER KEYBOARD -->
//     <!-- 3. FIGURE OUT HOW TO TIME EACH GREEN CIRCLE POP-UP (I'M THINKING ABOUT DOING IT WITH TIMESTAMPS BASED ON WHICH SONG IS PLAYING) -->
//     <!-- 4. CREATE COUNTERS FOR ACCURACY AND POINTS FOR BOTH PLAYER AND COMPUTER -->
//     <!-- 5. FIND/CREATE ALL ASSETS INC. SONG MP3S AND ICONS -->
//     <!-- 6. DEFINE CORRECT NOTES FOR ALL SONGS  -->
//     <!-- 7. TEST ALLLLL OF THE ABOVE -->
//     <!-- 8. START WORKING ON VISUALS/GRAPHICS -->



//---------------------------------------------------SONG SELECT FUNCTIONS/OBJECTS-----------------------------------------------------

// The changeSongChoice function is unnecessary now because the play screen can't get information from the song selection screen. I'm leaving it in because I want to show my original thought process. 

let songNumber = 0;
// let songChoice = document.getElementById('previewTrack').src;
// console.log(songChoice);
let url = ''
changeSongChoice = (num) => {
if (num === 1) {
    songNumber = 1;
    console.log(`Song number is ${songNumber}.`);
    // return songNumber;
    // document.getElementById("playingSong").src = './assets/Earth, Wind & Fire - Let\'s Groove (Audio).mp3';
} else if (num === 2) {
    songNumber = 2;
    console.log(`Song number is ${songNumber}.`);
    // return songNumber;
    // document.getElementById("playingSong").src = './assets/Muse - Knights of Cydonia [HD].mp3';
} else if (num === 3) {
    songNumber = 3;
    console.log(`Song number is ${songNumber}.`);
    // return songNumber;
    // document.getElementById("playingSong").src = './assets/Bat Country.mp3';
} else if (num === 4) {
    songNumber = 4;
    console.log(`Song number is ${songNumber}.`);
    // return songNumber;
    // document.getElementById("playingSong").src = './assets/Paramore Decode [OFFICIAL VIDEO].mp3';
} else if (num === 5) {
    songNumber = 5;
    console.log(`Song number is ${songNumber}.`);
    // return songNumber;
    // document.getElementById("playingSong").src = './assets/Tame Impala - Eventually (Official Audio).mp3';
} else {
    console.log("This is not working.")
}
// console.log(url);
// console.log(songNumber);
}

// This is an object to hold the songs players can choose from. I don't think I need it anymore but you never know.
let songs = {
    options : [
    {title: "Let's Groove",
    artist: "Earth, Wind & Fire",
    difficulty: 3,
    cover: "",
    source: "./assets/Earth, Wind & Fire - Let's Groove (Audio).mp3"},
    {title: "Knights of Cydonia",
    artist: "Muse",
    difficulty: 5,
    cover: "",
    source: "./assets/Muse - Knights of Cydonia [HD].mp3"},
    {title: "Bat Country",
    artist: "Avenged Sevenfold",
    difficulty: 4,
    cover: "",
    source: "./assets/Bat Country.mp3"},
    {title: "Decode",
    artist: "Paramore",
    difficulty: 2,
    cover: "",
    source: "./assets/Paramore Decode [OFFICIAL VIDEO].mp3"},
    {title: "Eventually",
    artist: "Tame Impala",
    difficulty: 2,
    cover: "",
    source: "./assets/Tame Impala - Eventually (Official Audio).mp3"}
    ]
}




// -----------------------------------------------------------PLAY SCREEN FUNCTIONS/OBJECTS---------------------------------------------------

// Counters for player and computer accuracy and points as well as the player's combo.
let playerAccuracy = 100;
let playerPoints = 0;
let playerCombo = 0;
let points = 0;
let accuracy = 100;

// This function randomly generates the computer's score that the player has to beat. The accuracy is no longer important but, again, you never know.
computerPlay = () => {
    accuracy = (Math.random().toFixed(2))*100
    console.log(`Computer accuracy is ${accuracy}%.`);
    points = Math.ceil(accuracy * 20);
    console.log(`Computer points is ${points}.`)
    document.getElementById('beatThis').innerHTML = (`SCORE TO BEAT: ${points}`)
}
computerPlay();

// Desginating which note corresponds to which key. This is also unnecessary now.
let redNoteKey = "h";
let redNoteKey2 = "a";
let blueNoteKey = "j";
let blueNoteKey2 = "s";
let greenNoteKey = "k";
let greenNoteKey2 = "d";
let yellowNoteKey = "l";
let yellowNoteKey2 = "f";
let starPowerKey = " ";


// ref for event listeners: https://www.w3schools.com/jsref/event_animationend.asp


// These are the variables I'll use to test if the player pressed the note at the right time.
let pressRed = false;
let pressBlue = false;
let pressGreen = false;
let pressYellow = false;
let musicPlaying = true;


// These change the variables above based on the animation state of the timing circles.
redCircle = () => {
    console.log('The red circle is moving.')
    pressRed = true;
}
redCircle2 = () => {
    console.log('The second red circle is moving.')
    pressRed = true;
}
redCircle3 = () => {
    console.log('The second red circle is moving.')
    pressRed = true;
}
redCircleEnded = () => {
    console.log('There is no red circle.')
    pressRed = false;
}
redCircle2Ended = () => {
    console.log('There is no red circle.')
    pressRed = false;
}
redCircle3Ended = () => {
    console.log('There is no red circle.')
    pressRed = false;
}
blueCircle = () => {
    console.log('The blue circle is moving.')
    pressBlue = true;
}
blueCircle2 = () => {
    console.log('The second blue circle is moving.')
    pressBlue = true;
}
blueCircle3 = () => {
    console.log('The second blue circle is moving.')
    pressBlue = true;
}
blueCircleEnded = () => {
    console.log('There is no blue circle.')
    pressBlue = false;
}
blueCircle2Ended = () => {
    console.log('There is no blue circle.')
    pressBlue = false;
}
blueCircle3Ended = () => {
    console.log('There is no blue circle.')
    pressBlue = false;
}
greenCircle = () => {
    console.log('The green circle is moving.')
    pressGreen = true;
}
greenCircle2 = () => {
    console.log('The second green circle is moving.')
    pressGreen = true;
}
greenCircle3 = () => {
    console.log('The second green circle is moving.')
    pressGreen = true;
}
greenCircleEnded = () => {
    console.log('There is no green circle.')
    pressGreen = false;
}
greenCircle2Ended = () => {
    console.log('There is no green circle.')
    pressGreen = false;
}
greenCircle3Ended = () => {
    console.log('There is no green circle.')
    pressGreen = false;
}
yellowCircle = () => {
    console.log('The yellow circle is moving.')
    pressYellow = true;
}
yellowCircle2 = () => {
    console.log('The second yellow circle is moving.')
    pressYellow = true;
}
yellowCircle3 = () => {
    console.log('The second yellow circle is moving.')
    pressYellow = true;
}
yellowCircleEnded = () => {
    console.log('There is no yellow circle.')
    pressYellow = false;
}
yellowCircle2Ended = () => {
    console.log('There is no yellow circle.')
    pressYellow = false;
}
yellowCircle3Ended = () => {
    console.log('There is no yellow circle.')
    pressYellow = false;
}
// musicEnded = () => {
//     console.log("Song is over.");
//     musicPlaying = false;
// }


// These event listeners tell whether or not the timing circle is being shown at a given time or not.
let red = document.getElementById('playCircleRed');
red.addEventListener('animationstart', redCircle);
red.addEventListener('animationiteration', redCircle);
red.addEventListener('animationend', redCircleEnded);

let red2 = document.getElementById('playCircleRed2');
red2.addEventListener('animationstart', redCircle2);
red2.addEventListener('animationiteration', redCircle2);
red2.addEventListener('animationend', redCircle2Ended);

let red3 = document.getElementById('playCircleRed3');
red3.addEventListener('animationstart', redCircle3);
red3.addEventListener('animationiteration', redCircle3);
red3.addEventListener('animationend', redCircle3Ended);

let blue = document.getElementById('playCircleBlue');
blue.addEventListener('animationstart', blueCircle);
blue.addEventListener('animationiteration', blueCircle);
blue.addEventListener('animationend', blueCircleEnded);

let blue2 = document.getElementById('playCircleBlue2');
blue2.addEventListener('animationstart', blueCircle2);
blue2.addEventListener('animationiteration', blueCircle2);
blue2.addEventListener('animationend', blueCircle2Ended);

let blue3 = document.getElementById('playCircleBlue3');
blue3.addEventListener('animationstart', blueCircle3);
blue3.addEventListener('animationiteration', blueCircle3);
blue3.addEventListener('animationend', blueCircle3Ended);

let green = document.getElementById('playCircleGreen');
green.addEventListener('animationstart', greenCircle);
green.addEventListener('animationiteration', greenCircle);
green.addEventListener('animationend', greenCircleEnded);

let green2 = document.getElementById('playCircleGreen2');
green2.addEventListener('animationstart', greenCircle2);
green2.addEventListener('animationiteration', greenCircle2);
green2.addEventListener('animationend', greenCircle2Ended);

let green3 = document.getElementById('playCircleGreen3');
green3.addEventListener('animationstart', greenCircle3);
green3.addEventListener('animationiteration', greenCircle3);
green3.addEventListener('animationend', greenCircle3Ended);

let yellow = document.getElementById('playCircleYellow');
yellow.addEventListener('animationstart', yellowCircle);
yellow.addEventListener('animationiteration', yellowCircle);
yellow.addEventListener('animationend', yellowCircleEnded);

let yellow2 = document.getElementById('playCircleYellow2');
yellow2.addEventListener('animationstart', yellowCircle2);
yellow2.addEventListener('animationiteration', yellowCircle2);
yellow2.addEventListener('animationend', yellowCircle2Ended);

let yellow3 = document.getElementById('playCircleYellow3');
yellow3.addEventListener('animationstart', yellowCircle3);
yellow3.addEventListener('animationiteration', yellowCircle3);
yellow3.addEventListener('animationend', yellowCircle3Ended);

// This checks if the song is still playing or not. I moved the onended to the playscreen to simplify and ensure that the win and lose modals would show.

// let music = document.getElementById('playingSong');
// music.addEventListener('ended', musicEnded);



// This function returns any key that the player presses; I have an invisible input box that is autofocused on when the player chooses which song they want to play. This function reads the input in that text box.
giveKeyCode = (event) => {
    let x = event.key;
    return x;
}

let isKeyDown = false;
yesKeyDown = () => {
    isKeyDown = true;
}
noKeyDown = () => {
    isKeyDown = false;
}

document.addEventListener('keydown', yesKeyDown);
document.addEventListener('keyup', noKeyDown);


// This function takes the giveKeyCode function's return value (any key the player presses) and tests if it is equal to the correct key for whichever note is supposed to be pressed at that given time. It also uses the variables changed by the event listeners to tell if a certain note is supposed to be pressed at that time. In addition, it adds to the player points value and the player combo value.
playerPlay = () => {
    let pressedKey = giveKeyCode(event);
    console.log(pressedKey)
    if ((pressRed && (pressedKey === 'a' || pressedKey === 'h')) || (pressRed && pressBlue && (pressedKey === 'a' || pressedKey === 'h')) || (pressRed && pressGreen && (pressedKey === 'a' || pressedKey === 'h')) || (pressRed && pressYellow && (pressedKey === 'a' || pressedKey === 'h'))) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
        console.log(playerPoints);
    } else if (pressRed && ((pressedKey !== 'a' && pressedKey !== 'h') || (pressRed && isKeyDown === false))) {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed .97s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
    }
    if (pressBlue && (pressedKey === 's' || pressedKey === 'j') || (pressBlue && pressGreen && (pressedKey === 's' || pressedKey === 'j')) || (pressBlue && pressYellow && (pressedKey === 's' || pressedKey === 'j'))) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
        console.log(playerPoints);
    } else if (pressBlue && ((pressedKey !== 's' && pressedKey !== 'j') || (pressBlue && isKeyDown === false))) {
        console.log('Missed!');
        document.getElementById('miss').style.animation = "missed .98s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
    } 
    if (pressGreen && (pressedKey === 'd' || pressedKey === 'k') || (pressGreen && pressYellow &&(pressedKey === 'd' || pressedKey === 'k'))) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
        console.log(playerPoints);
    } else if ((pressGreen && pressedKey !== 'd' && pressedKey !== 'k') || (pressGreen && isKeyDown === false)) {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed .99s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
    } 
    if (pressYellow && (pressedKey === 'f' || pressedKey === 'l')) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
        console.log(playerPoints);
    } else if ((pressYellow && pressedKey !== 'f' && pressedKey !== 'l') || (pressYellow && isKeyDown === false)) {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed 1s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`${playerCombo}x`);
    } 
}

// This function takes the computer's randomly generated score and the player's score and determines who won for that song and shows either the win or lose modal based on that.
checkWinner = () => {
    if (points > playerPoints) {
        document.getElementById('loseModal').style.visibility = 'visible';
        document.getElementById('loseText').innerHTML = `You Lost! <br/> <br/> Your score: ${playerPoints} <br/> Computer score: ${points}`;
    } else if (playerPoints >= points) {
        document.getElementById('winModal').style.visibility = 'visible';
        document.getElementById('winText').innerHTML = `You Won! <br/> <br/> Your score:    ${playerPoints} <br/> Computer score:    ${points}`;
    }
}



// i dont think i need this anymore but you never know.
changeAnimation = () => {
    document.getElementById('playCircleRed').style.animation = 'timingCircleShrink .73s ease-in 40';
    document.getElementById('playCircleBlue').style.animation = 'timingCircleShrink 2s ease-in 40';
    document.getElementById('playCircleGreen').style.animation = 'timingCircleShrink 1s ease-in 40';
    document.getElementById('playCircleYellow').style.animation = 'timingCircleShrink .25s ease-in 10';
}