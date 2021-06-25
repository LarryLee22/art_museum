//video
//let MIRROR_VIDEO_FEED = true;
let video;

//pose
let poseNet;
let poses = [];
let leftHand,rightHand,nose;

//other
let pic = [];
let r1,g1,r2,g2,r3,g3;

function preload() {
pic[1] = loadImage('frame2.png'); //載入圖片
pic[2] = loadImage('bg.png'); 
  
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

}

function modelReady() {

print('Model Loaded');
  
  
r1 = 200;
g1 = 0;
r2 = 200;
g2 = 0;
r3 = 200;
g3 = 0;
  
  
}


function draw() {

//反轉
//if (MIRROR_VIDEO_FEED == true) {
//translate(width, 0); 
//scale(-1.0, 1.0); 
 
image(pic[2],0,0,1280,720);
image(video,344,286,592,333);
image(pic[1],328,275,624,355);

drawKeypoints();

//圓圈

//head
noFill();
stroke(r1,g1,0);
strokeWeight(5);
ellipseMode(CENTER);
ellipse(635,360,100,110);

//lhand
noFill();
stroke(r2,g2,0);
strokeWeight(5);
ellipseMode(CENTER);
ellipse(436,459,70,70);

//rhand
noFill();
stroke(r3,g3,0);
strokeWeight(5);
ellipseMode(CENTER);
ellipse(844,459,70,70);


//-----------------------------------------------------------------------------------------------

//矯正

if(nose.x < 311 && nose.x > 281 && nose.y < 89 && nose.y > 59){
r1 = 0;
g1 = 200;
}

if( leftHand.x < 530 && leftHand.x > 470 && leftHand.y < 233 && leftHand.y > 173 ){
r2 = 0;
g2 = 200;
}

if( rightHand.x < 122 && rightHand.x > 62 && rightHand.y > 173 && rightHand.y < 233){
r3 = 0;
g3 = 200;
}

if ( nose.x < 311 && nose.x > 281 && nose.y < 89 && nose.y > 59 && leftHand.x < 530 && leftHand.x > 470 && leftHand.y < 233 && leftHand.y > 173 && rightHand.x < 122 && rightHand.x > 62 && rightHand.y > 173 && rightHand.y < 233){

window.open('subpage5.html','_self');

}
}

//-----------------------------------------------------------------------------------------------

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


  
}