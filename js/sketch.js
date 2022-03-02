let synth;
let delay;
let octive;
let slider;
let addButton, subtractButton;

function setup() {
  createCanvas(600, 400);

  delay = new Tone.FeedbackDelay("16n", 0).toDestination();
  synth = new Tone.PolySynth().connect(delay);

  octive = 4; 

  addButton = createButton("+");
  addButton.size(100, 50);
  addButton.position(475, 150);
  addButton.mousePressed(addOctive);

  subtractButton = createButton("-");
  subtractButton.size(100, 50);
  subtractButton.position(475, 300);
  subtractButton.mousePressed(subtractOctive);

  slider = createSlider(0, .5, 0, .05);
  slider.mouseReleased( () => {
    delay.feedback.value = slider.value();
  })
}

function draw() {
  background(220);
  fill(0);
  textSize(75);
  text("Tyler's Synth", 30, 70);


  textSize(40);
  text("Octive", 465, 145);
  text(octive, 515, 265);

  textSize(30);
  text("Feedback", 5, 395);

  fill(255);
  rect(50, 150, 50, 200);
  rect(100, 150, 50, 200);
  rect(150, 150, 50, 200);
  rect(200, 150, 50, 200);
  rect(250, 150, 50, 200);
  rect(300, 150, 50, 200);
  rect(350, 150, 50, 200);
  rect(400, 150, 50, 200);

  fill(0);
  rect(80, 150, 40, 125);
  rect(130, 150, 40, 125);
  rect(230, 150, 40, 125);
  rect(280, 150, 40, 125);
  rect(330, 150, 40, 125);

  textSize(10);
  text("A", 70, 345);
  text("S", 120, 345);
  text("D", 170, 345);
  text("F", 220, 345);
  text("G", 270, 345);
  text("H", 320, 345);
  text("J", 370, 345);
  text("K", 420, 345);

  text("W", 95, 145);
  text("E", 145, 145);
  text("T", 245, 145);
  text("Y", 295, 145);
  text("U", 345, 145);

}

function addOctive() {
  if(octive < 7)
    octive++;
}

function subtractOctive() {
  if(octive > 0)
    octive--;
}

function keyPressed() {
  if(keyCode == 65)
    synth.triggerAttackRelease("C" + octive, "8n");
  else if(keyCode == 87)
    synth.triggerAttackRelease("C#" + octive, "8n");
  else if(keyCode == 83) 
    synth.triggerAttackRelease("D" + octive, "8n");
  else if(keyCode == 69)
    synth.triggerAttackRelease("D#" + octive, "8n");
  else if(keyCode == 68)
    synth.triggerAttackRelease("E" + octive, "8n");
  else if(keyCode == 70)
    synth.triggerAttackRelease("F" + octive, "8n");
  else if(keyCode == 84)
    synth.triggerAttackRelease("F#" + octive, "8n");
  else if(keyCode == 71)
    synth.triggerAttackRelease("G" + octive, "8n");
  else if(keyCode == 89)
    synth.triggerAttackRelease("G#" + octive, "8n");
  else if(keyCode == 72)
    synth.triggerAttackRelease("A" + octive, "8n");
  else if(keyCode == 85)
    synth.triggerAttackRelease("A#" + octive, "8n");
  else if(keyCode == 74)
    synth.triggerAttackRelease("B" + octive, "8n");
  else if(keyCode == 75)
    synth.triggerAttackRelease("C" + (octive+1), "8n");
  else if(keyCode == 187)
    addOctive();
  else if(keyCode == 189)
    subtractOctive();
}

function mousePressed() {
  if((mouseX > 50) && (mouseX < 100) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("C" + octive, "8n");
  else if((mouseX > 80) && (mouseX < 120) && (mouseY > 150) && (mouseY < 275))
    synth.triggerAttackRelease("C#" + octive, "8n");
  else if((mouseX > 100) && (mouseX < 150) && (mouseY > 275) && (mouseY < 350)) 
    synth.triggerAttackRelease("D" + octive, "8n");
  else if((mouseX > 130) && (mouseX < 170) && (mouseY > 150) && (mouseY < 275))
    synth.triggerAttackRelease("D#" + octive, "8n");
  else if((mouseX > 150) && (mouseX < 200) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("E" + octive, "8n");
  else if((mouseX > 200) && (mouseX < 250) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("F" + octive, "8n");
  else if((mouseX > 230) && (mouseX < 270) && (mouseY > 150) && (mouseY < 275))
    synth.triggerAttackRelease("F#" + octive, "8n");
  else if((mouseX > 250) && (mouseX < 300) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("G" + octive, "8n");
  else if((mouseX > 280) && (mouseX < 320) && (mouseY > 150) && (mouseY < 275))
    synth.triggerAttackRelease("G#" + octive, "8n");
  else if((mouseX > 300) && (mouseX < 350) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("A" + octive, "8n");
  else if((mouseX > 330) && (mouseX < 370) && (mouseY > 150) && (mouseY < 275))
    synth.triggerAttackRelease("A#" + octive, "8n");
  else if((mouseX > 350) && (mouseX < 400) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("B" + octive, "8n");
  else if((mouseX > 400) && (mouseX < 450) && (mouseY > 275) && (mouseY < 350))
    synth.triggerAttackRelease("C" + (octive+1), "8n");
}