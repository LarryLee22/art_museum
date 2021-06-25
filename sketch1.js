let btnNext;
let btnCred;
let poses = [];
let page1 = false;
let pic = [];


function preload() {
pic[1] = loadImage('logo.png'); 
  pic[2] = loadImage('credit.png'); 
}

function setup() {
createCanvas(1280,720);
btnNext = createImg('start.png','start');
imageMode(CENTER);
btnNext.position(width/2+355,height/2+230);
btnNext.size(182,110);
//9.1*5.5
  
btnNext.mousePressed(goNext);
  
    btnCred = createImg('creditbtn.png','credit');
  imageMode(CENTER);
  btnCred.position(120,height/2+230);
  btnCred.size(182,110);
  btnCred.mousePressed(goCredit);

}

function draw() {
  
background(220);
image(pic[1],width/2,height/2);
  
   if(page1 == true){
    image(pic[2],width/2,height/2);
  }
  
}

function goNext(){
window.open('subpage2.html','_self');
}

function goCredit(){
  page1 = !page1;
}