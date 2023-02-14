function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

}

function mouseDragged(){
  
noStroke();
fill(mouseX, mouseY, mouseX/mouseY);
ellipse(mouseX, mouseY, 40, 40);

}