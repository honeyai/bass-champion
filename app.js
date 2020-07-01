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

// This is an object to hold the songs players can choose from.
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

let compAccuracy = 100;
let compPoints = 0;


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



