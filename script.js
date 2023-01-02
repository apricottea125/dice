const btnID = "startbutton";
const diceID = "dicefaces";
const btn = document.getElementById(btnID);
const dice = document.getElementById(diceID);

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()*6) + 1; 
    if (dice.children.length === 0) {
        const p = document.createElement("p");
        dice.append(p);
    }
    dice.children[0].innerHTML = randomNumber; 
});
