let btnRestart;
let poses = [];
let page1 = false;
let pic = [];

function preload() {
pic[1] = loadImage('lose.png'); 
}

function setup() {
createCanvas(1280,720);
btnNext = createImg('restart.png','restart');
imageMode(CENTER);
btnNext.position(width/2+355,height/2+155);
btnNext.size(182,110);
//9.1*5.5
  
btnNext.mousePressed(goRestart);

}

function draw() {
  
background(220);
image(pic[1],width/2,height/2,1280,740);
  
}

function goRestart(){
window.open('index.html','_self');
}
