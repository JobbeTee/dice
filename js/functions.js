'use strict'

function rollDice() {
    // Arvotaan luku väliltä 1-6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Päivitetään nopan kuva tuloksen perusteella
    const diceImage = document.querySelector("#dice img");
    diceImage.src = `./img/dice${diceRoll}.png`;
}

document.getElementById("container").addEventListener('click', rollDice)
