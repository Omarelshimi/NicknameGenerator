// Global Variable
let names = ["Tyrannosaurus", "Stegosaurus", "Triceratops", "Velociraptor",
    "Spinosaurus", "Allosaurus", "Archaeopteryx"]
let nickIndex = 0;

// Functions
document.getElementById("random").addEventListener('click', randomN)
document.getElementById("all").addEventListener('click', allN)

function randomN() {

    let firstname = document.getElementById('first').value;
    let lastname = document.getElementById('last').value;

    let nickIndex = Math.randomInt(0, 7)

    document.getElementById('result').innerHTML = firstname + " " + '"' + names[nickIndex] + '"' + " " + lastname + '<br>';

}

function allN() {
    document.getElementById('result').innerHTML = ''

    let firstname = document.getElementById('first').value;
    let lastname = document.getElementById('last').value;

    for (let i = 0; i < names.length; i++) {
        document.getElementById('result').innerHTML += firstname + " " + '"' + names[i] + '"' + " " + lastname + '<br>';

    }

}
