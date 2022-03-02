let synth;

function setup() {
  createCanvas(400, 400);

  synth = new Tone.Synth().toDestination();


}

function draw() {
  background(220);

  
}

function keyPressed() {
  if(keyCode == 65)
    synth.triggerAttackRelease("C4", "8n");
  else if(keyCode == 83) 
    synth.triggerAttackRelease("D4", "8n");
  else if(keyCode == 68)
    synth.triggerAttackRelease("E4", "8n");
  else if(keyCode == 70)
    synth.triggerAttackRelease("F4", "8n");
  else if(keyCode == 71)
    synth.triggerAttackRelease("G4", "8n");
  else if(keyCode == 72)
    synth.triggerAttackRelease("A4", "8n");
  else if(keyCode == 74)
    synth.triggerAttackRelease("B4", "8n");
  else if(keyCode == 75)
    synth.triggerAttackRelease("C5", "8n");
}

function mousePressed() {
  synth.triggerAttackRelease("C4", "8n");
}