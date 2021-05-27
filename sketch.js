var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("Tokyo ghoul.jpg")
  //load image for the treasure background
  bg2 = loadImage("kh1.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  textSize(30)
  text("Score: " + score, windowWidth/2, 50);
// add code for changing the background to the treasure background
  

if(score === 3) {
  clear()
  background(bg2)
    fill("yellow")
    textSize(40);
    text("Anime name: Tokyo Ghoul",290, 100);
    text("Seasons: 4",290, 150);
    text("Season's list in order: 1) Tokyo Ghoul (2014)",290, 200);
    text("2) Tokyo Ghoul √A (2015)", 680, 250);
    text("3)Tokyo Ghoul: re (2018)",680, 300);
    text("4)Tokyo Ghoul: re 2nd Season (2018)",680, 350);
}
  drawSprites()
}