let colors;

function setup() {
  let canvas = createCanvas(500, 500);
  background(255);
  colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'];
}

function draw() {
  if (mouseIsPressed) {
    let randomColor = random(colors); 
    fill(randomColor);
    noStroke(); 
    ellipse(mouseX, mouseY, random(5, 20), random(5, 20)); 
  }
}
