var wordOptions = ["SPOOKY", "SPIDERS", "GHOSTS", "WITCHES", "GHOULS", "MONSTERS", "VAMPIRES", "WEREWOLVES", "PUMPKIN", "JACKOLANTERN", "TRICK", "TREAT", "COSTUME", "HALLOWEEN", "BOO", "HAUNTED", "FRIGHT", "BLOOD", "GRAVEYARD", "HEADSTONES", "NIGHTMARES","CANDYCORN", "BATS", "BROOMSTICKS", "CAULDRON", "POTION", "OCTOBER", "SCARECROW", "MUMMY","SCARY", "TERROR", "FRANKENSTEIN", "OOGIEBOOGIE"]; 
var wordChoice = "";
var letters = [];
var blanks = 0;
var lettersBlanks = [];
var wrongLetters = [];
var bigWord = [];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

function startGame () {

	wordChoice = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	letters = wordChoice.split("");
	blanks = letters.length;

	guessesLeft = 10;
	wrongLetters = [];
	lettersBlanks = [];

	for (var i = 0; i < blanks; i++){
		lettersBlanks.push("_");
	}

	document.getElementById("wordSpace").innerHTML = lettersBlanks.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("userGuess").innerHTML = ("  ");

	console.log(wordChoice);
}

function letterCheck(letter) {

	var wordLetter = false;

	for (var i = 0; i < blanks; i++){
		if(wordChoice[i] == letter) {
			wordLetter = true;
		}
	}
	if (wordLetter) {
		for (var i = 0; i < blanks; i++){
			if(wordChoice[i] == letter) {
				lettersBlanks[i] = letter;
			}
		}
	}
	else {
		wrongLetters.push(letter);
			guessesLeft--
	}
}

function complete(){

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordSpace").innerHTML = lettersBlanks.join("  ");
	document.getElementById("userGuess").innerHTML = wrongLetters.join(" ");
	
	if(letters.toString() == lettersBlanks.toString()){
		wins++;

		document.getElementById("bigWord").innerHTML = wordChoice.toUpperCase();
		document.getElementById("wins").innerHTML = wins;

			startGame();
}

	else if (guessesLeft == 0) {
		losses++;
		document.getElementById("bigWord").innerHTML = wordChoice.toUpperCase();
		document.getElementById("losses").innerHTML = losses;
			startGame();
	}
}

startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	letterCheck(letterGuessed);
	complete();
}
	
