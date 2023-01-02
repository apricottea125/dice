const btnID = "startbutton";
const diceID = "dicefaces";
const btn = document.getElementById(btnID);
const dice = document.getElementById(diceID);

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()*6) + 1; 
    const allDiceIDs = ["one","two","three","four","five","six"];
    for (let i=0; i<allDiceIDs.length; i++) {
        document.getElementById(allDiceIDs[i]).style.opacity = "0";
    }
    document.getElementById(allDiceIDs[randomNumber - 1]).style.opacity = "1";
});

const randomNumber = Math.floor(Math.random()*6) + 1; 
const allDiceIDs = ["one","two","three","four","five","six"];
for (let i=0; i<allDiceIDs.length; i++) {
    document.getElementById(allDiceIDs[i]).style.opacity = "0";
}
document.getElementById(allDiceIDs[randomNumber - 1]).style.opacity = "1";
