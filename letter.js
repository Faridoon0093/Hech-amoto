// Timer logic
let timer = 5;
let interval;

const clickButton = document.getElementById('clickButton');
const timerDiv = document.getElementById('timer');
const textDiv = document.getElementById('text');

// Function to update the timer and show the text after 5 seconds
function startTimer() {
    interval = setInterval(() => {
        timerDiv.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            textDiv.style.display = 'block'; // Show the text when the timer reaches 0
            clickButton.style.display = 'none'; // Hide the "Click Me" button after the text appears
        }
        timer--;
    }, 1000);
}

// Event listener to start the timer when the button is clicked
clickButton.addEventListener('click', () => {
    startTimer();
    clickButton.style.display = 'none'; // Hide the "Click Me" button immediately after clicking
});

// Love animation logic (in love.js)
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize the GL context
var gl = canvas.getContext('webgl');
if(!gl){
  console.error("Unable to initialize WebGL.");
}

// Time tracking
var time = 0.0;

// Shader sources, utility functions, and the drawing function are from the previous example
// (Add the full code for the shaders and the drawing logic from the previous love.js script here)

function draw() {
    var thisFrame = Date.now();
    time += (thisFrame - lastFrame) / 1000;
    lastFrame = thisFrame;

    gl.uniform1f(timeHandle, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(draw);
}

draw();
