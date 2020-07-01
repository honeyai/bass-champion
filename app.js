console.log("Working")






// This is an object to hold the songs players can choose from.
let songs = {
    options : [
    {title: "Let's Groove",
    artist: "Earth, Wind, and Fire",
    difficulty: 3,
    cover: ""},
    {title: "Knights of Cydonia",
    artist: "Muse",
    difficulty: 5,
    cover: ""},
    {title: "Bat Country",
    artist: "Avenged Sevenfold",
    difficulty: 4,
    cover: ""},
    {title: "Decode",
    artist: "Paramore",
    difficulty: 2,
    cover: ""},
    {title: "Feels Like We Only Go Backwards",
    artist: "Tame Impala",
    difficulty: 1,
    cover: ""}
    ]
}


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



