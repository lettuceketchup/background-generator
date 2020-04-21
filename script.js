var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var gradient = document.getElementById("gradientValue");

function generateRandomColor() {
    r = Math.random() * 256;
    g = Math.random() * 256;
    b = Math.random() * 256;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + generateRandomColor()
    + ", " 
    + generateRandomColor() 
    + ")"; 
    css.innerText = body.style.background;
}

function changeBackground() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 
    css.innerText = body.style.background;
}

randomGradient();

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

function randomButtonClick(randomButton, randomGradient) {
    randomButton.addEventListener("click", randomGradient);
}

function randomSpace(randomGradient) {
    document.addEventListener("keypress", function (event) {
        if (event.which === 32) {
            randomGradient();
        }
    })
}

randomButtonClick(randomButton, randomGradient);
randomSpace(randomGradient);

var copyToClipboard = function(secretInfo) {
    
    var $body = document.getElementsByTagName('body')[0];
    var $tempInput = document.createElement('INPUT');
    $body.appendChild($tempInput);
    $tempInput.setAttribute('value', secretInfo)
    $tempInput.select();
    document.execCommand('copy');
    $body.removeChild($tempInput);
  }

function copyGradient() {  
    gradient.addEventListener("click", function() {
        /* Select the text field */
    copyToClipboard(gradient.innerText);
    console.log(gradient.innerText);
    })
  }
  copyGradient();