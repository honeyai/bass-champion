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

// Counters for player and computer accuracy and points
let playerAccuracy = 100;
let playerPoints = 0;
let playerCombo = 0;

computerPlay = () => {
    let accuracy = (Math.random().toFixed(2))*100
    console.log(`Computer accuracy is ${accuracy}%.`);
    let points = Math.ceil(accuracy * 20);
    console.log(`Computer points is ${points}.`)
    document.getElementById('beatThis').innerHTML = (`SCORE TO BEAT: ${points}`)
}
computerPlay();

// Desginating which note corresponds to which key
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

// These are the variables we'll use to test if the player pressed the note at the right time.
let pressRed = false;
let pressBlue = false;
let pressGreen = false;
let pressYellow = false;


// These change the variables above based on the animation state of the timing circles.
redCircle = () => {
    console.log('The red circle is moving.')
    pressRed = true;
}
redCircle2 = () => {
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
blueCircle = () => {
    console.log('The blue circle is moving.')
    pressBlue = true;
}
blueCircle2 = () => {
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
greenCircle = () => {
    console.log('The green circle is moving.')
    pressGreen = true;
}
greenCircle2 = () => {
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
yellowCircle = () => {
    console.log('The yellow circle is moving.')
    pressYellow = true;
}
yellowCircle2 = () => {
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

// These event listeners tell whether or not the timing circle is being shown at a given time or not.
let red = document.getElementById('playCircleRed');
red.addEventListener('animationstart', redCircle);
red.addEventListener('animationiteration', redCircle);
red.addEventListener('animationend', redCircleEnded);

let red2 = document.getElementById('playCircleRed2');
red2.addEventListener('animationstart', redCircle2);
red2.addEventListener('animationiteration', redCircle2);
red2.addEventListener('animationend', redCircle2Ended);

let blue = document.getElementById('playCircleBlue');
blue.addEventListener('animationstart', blueCircle);
blue.addEventListener('animationiteration', blueCircle);
blue.addEventListener('animationend', blueCircleEnded);

let blue2 = document.getElementById('playCircleBlue2');
blue2.addEventListener('animationstart', blueCircle2);
blue2.addEventListener('animationiteration', blueCircle2);
blue2.addEventListener('animationend', blueCircle2Ended);

let green = document.getElementById('playCircleGreen');
green.addEventListener('animationstart', greenCircle);
green.addEventListener('animationiteration', greenCircle);
green.addEventListener('animationend', greenCircleEnded);

let green2 = document.getElementById('playCircleGreen2');
green2.addEventListener('animationstart', greenCircle2);
green2.addEventListener('animationiteration', greenCircle2);
green2.addEventListener('animationend', greenCircle2Ended);

let yellow = document.getElementById('playCircleYellow');
yellow.addEventListener('animationstart', yellowCircle);
yellow.addEventListener('animationiteration', yellowCircle);
yellow.addEventListener('animationend', yellowCircleEnded);

let yellow2 = document.getElementById('playCircleYellow2');
yellow2.addEventListener('animationstart', yellowCircle2);
yellow2.addEventListener('animationiteration', yellowCircle2);
yellow2.addEventListener('animationend', yellowCircle2Ended);



giveKeyCode = (event) => {
    let x = event.key;
    return x;
}


playerPlay = () => {
    let pressedKey = giveKeyCode(event);
    console.log(pressedKey)
    if (pressRed && (pressedKey === 'a' || pressedKey === 'h')) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
        console.log(playerPoints);
    } else if (pressRed && pressedKey !== 'a' && pressedKey !== 'h') {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed .97s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
    }
    if (pressBlue && (pressedKey === 's' || pressedKey === 'j')) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
        console.log(playerPoints);
    } else if (pressBlue && pressedKey !== 's' && pressedKey !== 'j') {
        console.log('Missed!');
        document.getElementById('miss').style.animation = "missed .98s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
    } 
    if (pressGreen && (pressedKey === 'd' || pressedKey === 'k')) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
        console.log(playerPoints);
    } else if (pressGreen && pressedKey !== 'd' && pressedKey !== 'k') {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed .99s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
    } 
    if (pressYellow && (pressedKey === 'f' || pressedKey === 'l')) {
        playerPoints += 20;
        document.getElementById('playerPts').innerHTML = playerPoints;
        playerCombo++;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
        console.log(playerPoints);
    } else if (pressYellow && pressedKey !== 'f' && pressedKey !== 'l') {
        console.log('Missed!')
        document.getElementById('miss').style.animation = "missed 1s ease-out 1"
        playerCombo = 0;
        document.getElementById('playerAcc').innerHTML = (`COM: ${playerCombo}`);
    } 
}



computerPlay = () => {
    let accuracy = Math.random()
    console.log(accuracy);
}


// i dont think i need this anymore but you never know
changeAnimation = () => {
    document.getElementById('playCircleRed').style.animation = 'timingCircleShrink .73s ease-in 40';
    document.getElementById('playCircleBlue').style.animation = 'timingCircleShrink 2s ease-in 40';
    document.getElementById('playCircleGreen').style.animation = 'timingCircleShrink 1s ease-in 40';
    document.getElementById('playCircleYellow').style.animation = 'timingCircleShrink .25s ease-in 10';
}