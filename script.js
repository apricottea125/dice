const btnID = "startbutton";
const btn = document.getElementById(btnID);

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()*6) + 1; 
    const allDiceIDs = ["one","two","three","four","five","six"];
    for (let i=0; i<allDiceIDs.length; i++) {
        document.getElementById(allDiceIDs[i]).style.opacity = "0";
        document.getElementById(allDiceIDs[i]).style.transform = "rotate(0deg)";
    }
    document.getElementById(allDiceIDs[randomNumber - 1]).style.opacity = "1";
    document.getElementById(allDiceIDs[randomNumber - 1]).style.transform = "rotate(360deg)";
});

const randomNumber = Math.floor(Math.random()*6) + 1; 
const allDiceIDs = ["one","two","three","four","five","six"];
for (let i=0; i<allDiceIDs.length; i++) {
    document.getElementById(allDiceIDs[i]).style.opacity = "0";
}
document.getElementById(allDiceIDs[randomNumber - 1]).style.opacity = "1";
