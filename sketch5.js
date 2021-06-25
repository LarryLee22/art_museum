let video;

//pose
let poseNet;
let poses = [];
let leftHand,rightHand,nose;

//other
let pic = [];
let fc = 0;
let gsfc = 0;
let txt = '';
let  a = false;
let clcrx,clcry;
let nclcrx,nclcry,lclcrx,lclcry,rclcrx,rclcry;
let score = 0;
let pic2x , pic2y,pic3x , pic3y,pic4x , pic4y,pic5x , pic5y,pic6x , pic6y;
let picx = [];
let picy = [];
let picsx = [];
let picsy = [];
let nosev = [];
let leftHandv = [];
let rightHandv = [];
let btnNext;

//countdown
let timer1 = 3;
let timer2 = 60;

function preload() {

pic[1] = loadImage('frame2.png'); 
pic[2] = loadImage('David.png');
pic[3] = loadImage('Monalisa.png');
pic[4] = loadImage('Pizza.png');
pic[5] = loadImage('Shrik.png');
pic[6] = loadImage('Venus.png');


pic[7] = loadImage('ori_David.JPG');
pic[8] = loadImage('ori_Monalisa.png');
pic[9] = loadImage('ori_Pizza.JPG');
pic[10] = loadImage('ori_Shrik.png');
pic[11] = loadImage('ori_Venus.png');

pic[12] = loadImage('bg4.png');
pic[13] = loadImage('next.png');

}

function setup() {

//canvas
createCanvas(1280,720);
video = createCapture(VIDEO);
video.size(592,333);

//pose
poseNet = ml5.poseNet(video,'single',modelReady);
poseNet.on('pose', function(results) {
poses = results;
});

video.hide();

//vector
leftHand = createVector(0,0);
rightHand = createVector(0,0);
nose = createVector(0,0);


clcrx = width/2;
clcry = height/2+70;

nclcrx = 0;
nclcry = 0;
lclcrx = 0;
lclcry = 0;
rclcrx = 0;
rclcry = 0;

//pic  
picx[2] = 1000;
picy[2] = 270;
picx[3] = 1000;
picy[3] = 270;
picx[4] = 1000;
picy[4] = 270;
picx[5] = 1000;
picy[5] = 270;
picx[6] = 970;
picy[6] = 360;

//picscale
picsx[2] = 240;
picsy[2] = 360;
picsx[3] = 240;
picsy[3] = 360;
picsx[4] = 240;
picsy[4] = 360;
picsx[5] = 240;
picsy[5] = 360;
picsx[6] = 270;
picsy[6] = 180;

//pose
nosev[1] = 311;
nosev[2] = 281;
nosev[3] = 89;
nosev[4] = 59;
leftHandv[1] = 380;
leftHandv[2] = 320;
leftHandv[3] = 263;
leftHandv[4] = 203;
rightHandv[1] = 320;
rightHandv[2] = 260;
rightHandv[3] = 223;
rightHandv[4] = 283;

}


function modelReady() {
print('Model Loaded');

}

function draw() {


background(220);
image(pic[12],0,0,1280,720);
image(video,344,286,592,333);
image(pic[1],328,275,624,355);

drawKeypoints();

//倒數
if (leftHand.x < 326 && leftHand.x > 266 && leftHand.y < 244 && leftHand.y > 184 || rightHand.x < 326 && rightHand.x > 266 && rightHand.y < 244 && rightHand.y > 184){
a = true;
clcrx = -100;
clcry = -100;

}

if( a == true){
if (frameCount % 50 == 0 && timer1 > 0) {
timer1 --;

}
}

//-----------------------------------------------------------------------------------------------

//start game
if(timer1 == 0 ){

//timer
timer1 = ''
textSize(60);
fill(193,171,129);
text('time:' +timer2, 150, height-70);//later
if (frameCount % 30 == 0 && timer2 > 0) {
timer2 --;
}

//pic
if(score == 0){
image(pic[8],picx[3],picy[3],picsx[3],picsy[3]);

if ( nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && leftHand.x < leftHandv[1] && leftHand.x > leftHandv[2] && leftHand.y < leftHandv[3] && leftHand.y > leftHandv[4] ||nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && rightHand.x < rightHandv[1] && rightHand.x > rightHandv[2] && rightHand.y > rightHandv[3] && rightHand.y < rightHandv[4]){
score = 1;

}
}

if (score == 1){

image(pic[3],picx[3],picy[3],picsx[3],picsy[3]);
picx[3] = 0;
picy[3] = 0;
picsx[3] = 1280;
picsy[3] = 720;

image(pic[7],picx[2],picy[2],picsx[2],picsy[2]);

nosev[1] = 291;
nosev[2] = 261;
nosev[3] = 89;
nosev[4] = 59;
leftHandv[1] = 460;
leftHandv[2] = 400;
leftHandv[3] = 158;
leftHandv[4] = 98;

if ( nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && leftHand.x < leftHandv[1] && leftHand.x > leftHandv[2] && leftHand.y < leftHandv[3] && leftHand.y > leftHandv[4]){
score = 2;
}
}


if (score == 2){

image(pic[3],picx[3],picy[3],picsx[3],picsy[3]);
picx[3] = 0;
picy[3] = 0;
picsx[3] = 1280;
picsy[3] = 720;

image(pic[2],picx[2],picy[2],picsx[2],picsy[2]);
picx[2] = 0;
picy[2] = 0;
picsx[2] = 1280;
picsy[2] = 720;

image(pic[11],picx[6],picy[6],picsx[6],picsy[6]); 

nosev[1] = 231;
nosev[2] = 201;
nosev[3] = 59;
nosev[4] = 29;
leftHandv[1] = 470;
leftHandv[2] = 350;
leftHandv[3] = 293;
leftHandv[4] = 233;
rightHandv[1] = 235;
rightHandv[2] = 175;
rightHandv[3] = 193;
rightHandv[4] = 253;

if ( nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && leftHand.x < leftHandv[1] && leftHand.x > leftHandv[2] && leftHand.y < leftHandv[3] && leftHand.y > leftHandv[4] || rightHand.x < rightHandv[1] && rightHand.x > rightHandv[2] && rightHand.y > rightHandv[3] && rightHand.y < rightHandv[4]){
score = 3;
}
}

if (score == 3){

image(pic[3],picx[3],picy[3],picsx[3],picsy[3]);
picx[3] = 0;
picy[3] = 0;
picsx[3] = 1280;
picsy[3] = 720;

image(pic[2],picx[2],picy[2],picsx[2],picsy[2]);
picx[2] = 0;
picy[2] = 0;
picsx[2] = 1280;
picsy[2] = 720;

image(pic[6],picx[6],picy[6],picsx[6],picsy[6]); 
picx[6] = 0;
picy[6] = 0;
picsx[6] = 1280;
picsy[6] = 720;

image(pic[9],picx[4],picy[4],picsx[4],picsy[4]); 

nosev[1] = 491;
nosev[2] = 461;
nosev[3] = 139;
nosev[4] = 109;
rightHandv[1] = 120;
rightHandv[2] = 60;
rightHandv[3] = 38;
rightHandv[4] = 98;

if ( nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && rightHand.x < rightHandv[1] && rightHand.x > rightHandv[2] && rightHand.y > rightHandv[3] && rightHand.y < rightHandv[4]){
score = 4;

}
}

if (score == 4){

image(pic[3],picx[3],picy[3],picsx[3],picsy[3]);
picx[3] = 0;
picy[3] = 0;
picsx[3] = 1280;
picsy[3] = 720;

image(pic[2],picx[2],picy[2],picsx[2],picsy[2]);
picx[2] = 0;
picy[2] = 0;
picsx[2] = 1280;
picsy[2] = 720;

image(pic[6],picx[6],picy[6],picsx[6],picsy[6]); 
picx[6] = 0;
picy[6] = 0;
picsx[6] = 1280;
picsy[6] = 720;

image(pic[4],picx[4],picy[4],picsx[4],picsy[4]); 
  picx[4] = 0;
picy[4] = 0;
picsx[4] = 1280;
picsy[4] = 720;


image(pic[10],picx[5],picy[5],picsx[5],picsy[5]);

nosev[1] = 311;
nosev[2] = 281;
nosev[3] = 89;
nosev[4] = 59;
leftHandv[1] = 410;
leftHandv[2] = 350;
leftHandv[3] = 193;
leftHandv[4] = 133;
rightHandv[1] = 290;
rightHandv[2] = 230;
rightHandv[3] = 153;
rightHandv[4] = 213;

if ( nose.x < nosev[1] && nose.x > nosev[2] && nose.y < nosev[3] && nose.y > nosev[4] && leftHand.x < leftHandv[1] && leftHand.x > leftHandv[2] && leftHand.y < leftHandv[3] && leftHand.y > leftHandv[4] && rightHand.x < rightHandv[1] && rightHand.x > rightHandv[2] && rightHand.y > rightHandv[3] && rightHand.y < rightHandv[4]){
score = 5;
}
}

if(score == 5){
image(pic[3],picx[3],picy[3],picsx[3],picsy[3]);
picx[3] = 0;
picy[3] = 0;
picsx[3] = 1280;
picsy[3] = 720;

image(pic[2],picx[2],picy[2],picsx[2],picsy[2]);
picx[2] = 0;
picy[2] = 0;
picsx[2] = 1280;
picsy[2] = 720;

image(pic[5],picx[5],picy[5],picsx[5],picsy[5]); 
picx[5] = 0;
picy[5] = 0;
picsx[5] = 1280;
picsy[5] = 720;


image(pic[4],picx[4],picy[4],picsx[4],picsy[4]); 
picx[4] = 0;
picy[4] = 0;
picsx[4] = 1280;
picsy[4] = 720;

image(pic[6],picx[6],picy[6],picsx[6],picsy[6]); 
picx[6] = 0;
picy[6] = 0;
picsx[6] = 1280;
picsy[6] = 720;


btnNext = createImg('next.png','next');

btnNext.position(width-100,height-80);
btnNext.size(182,110);
btnNext.mousePressed(goNext);

}

//---------------------------------
  
//fin
  


if (timer2 == 0 ) {
if(score >= 4){
window.open('subpage6.html','_self');
}}

//lose
if (timer2 == 0 ) {
if(score <=  3){
window.open('subpage7.html','_self');
}
}
}
}


//-----------------------------------------------------------------------------------------------

//骨架

function drawKeypoints()  {
for (let i = 0; i < poses.length; i++) {

let pose = poses[i].pose;
for (let j = 0; j < pose.keypoints.length; j++) {

let keypoint = pose.keypoints[j];
if (keypoint.score > 0.2) {

//點的計算

if(j==9){

leftHand.x = keypoint.position.x;
leftHand.y = keypoint.position.y; 

}

else if(j==10){

rightHand.x = keypoint.position.x;
rightHand.y = keypoint.position.y;

}

else if(j==0){

nose.x = keypoint.position.x;
nose.y = keypoint.position.y;

}
}
}
}

  //timer
textAlign(CENTER,CENTER);
fill(248,239,222);
textSize (50);
text( timer1,width/2,height/2 + 50);

}

function goNext(){
window.open('subpage6.html','_self');
}

