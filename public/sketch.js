let flock = [];

let words = ["There will always be a solution", "Everything always get better", "I am so proud of you"];

let index = 0;

let bgmusic;

function preload() {
  bgmusic = loadSound('bassjam1.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  flock = new Flock();

  for (let i = 0; i < 200; i++) {
    let b = new Boid(width / 2, height / 2);
    flock.addBoid(b);
  }
  
  let button = createButton("A");
  button.mousePressed(allowAudio);
  button.position(5, 4);

  
  bgmusic.play();
  bgmusic.loop();
  
  
  textSize(32);
}

function allowAudio () {
    getAudioContext().resume();

    audio_enabled = true;
  }

function draw() {
  background(0);
  blendMode(DIFFERENCE);
  noStroke();
  fill(255, 255, 25);
  textAlign(CENTER);  
  text(words[index], width/2, height/2);
  flock.run();
  

}

function mousePressed() {
  flock.addBoid(new Boid(mouseX, mouseY));
  index++;
  
  // if the index is greater than the length of the array
  // set it back to 0
  if(index > words.length-1){
   index = 0; 
  }
  
}