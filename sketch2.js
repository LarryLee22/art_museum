let btnNext;
let poses = [];

let pic = [];

function preload() {
pic[1] = loadImage('begin.png'); 
}

function setup() {
createCanvas(1280,720);
btnNext = createImg('next.png','next');
imageMode(CENTER);
btnNext.size(182,110);
btnNext.position(width/2+355,height/2+230);
btnNext.mousePressed(goNext);

}

function draw() {
  
background(220);
image(pic[1],width/2,height/2,1280,720);
 
}

function goNext(){
window.open('subpage3.html','_self');
}