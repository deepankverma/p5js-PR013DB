var keys = [20];
var data = [50];
var j= 0;
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(800, 800);
  smooth(8);
/* firstrow();
  secondrow();
  thirdrow();
  fourthrow(); */ // Doesn't work from inside of setup.
//  print(data)    //prints only one time, that too 50.
}

function draw() {
  
background(50);


outline(0);             // to create just the outline.
outline(100);
outline(200);
outline(300);
splbar();               // to create special buttons
//if (keyTyped=='1'||keyTyped=='2'||keyTyped=='3'||keyTyped=='4'){
firstrow();
//}
//if (keyTyped=='q'||keyTyped=='w'||keyTyped=='e'||keyTyped=='r'){
secondrow();
//}
thirdrow();

fourthrow();

//print(data);

  
}

/*  Useless piece of shit
if (keys[0] == 1) rect(0,0,200,200);
if (keys[1] == 2) rect(200,0,200,200);
if (keys[2] == 3) rect(400,0,200,200);
if (keys[3] == 4) rect(600,0,200,200);
if (keys[4] == 5) rect(0,200,200,200);
if (keys[5] == 6) rect(200,200,200,200);
if (keys[6] == 7) rect(400,200,200,200);
if (keys[7] == 8) rect(600,200,200,200);
if (keys[8] == 9) rect(0,400,200,200);
if (keys[9] == 10) rect(200,400,200,200);
if (keys[10] == 11) rect(400,400,200,200);
if (keys[11] == 12) rect(600,400,200,200);
if (keys[12] == 13) rect(0,600,200,200);
if (keys[13] == 14) rect(200,600,200,200);
if (keys[14] == 15) rect(400,600,200,200);
if (keys[15] == 16) rect(600,600,200,200);
*/
//}

function keyTyped() {                    // Use keyTyped instead of keyPressed
  if (key == '1') keys[0] = 1;
  if (key == '2') keys[1] = 2;
  if (key == '3') keys[2] = 3;
  if (key == '4') keys[3] = 4;
  if (key == 'q') keys[4] = 5;
  if (key == 'w') keys[5] = 6;
  if (key == 'e') keys[6] = 7;
  if (key == 'r') keys[7] = 8;
  if (key == 'a') keys[8] = 9;
  if (key == 's') keys[9] = 10;
  if (key == 'd') keys[10] = 11;
  if (key == 'f') keys[11] = 12;
  if (key == 'z') keys[12] = 13;
  if (key == 'x') keys[13] = 14;
  if (key == 'c') keys[14] = 15;
  if (key == 'v') keys[15] = 16;
  if (key == '7') keys[16] = 17;
  if (key == '8') keys[17] = 18;
  if (key == '9') keys[18] = 19;
  if (key == '6') keys[19] = 20;
  
}

function firstrow() {
  fill (70,137,102);
  strokeWeight(2);
  var i = 0;
  while((keys[i] == i+1) && (keys[i] < 5)){
  data[j]=keys[i];
  rect(i*100,0,100,100);
  print(data[j]);
  i++;
  j++;
  
  
}
}

function secondrow() {
  fill (0,163,136);
  strokeWeight(2);
  var i = 4;
  while((keys[i] == i+1) && (keys[i] < 9)){
  data[j]=keys[i];
  rect((i-4)*100,100,100,100);
  i++;
  j++;
  }
}

function thirdrow() {
  fill (121,189,143);
  strokeWeight(2);
  var i = 8;
  while((keys[i] == i+1) && (keys[i] < 13)){
  data[j]=keys[i];
  rect((i-8)*100,200,100,100);
  i++;
  j++;
  }
}

function fourthrow() {
  fill (190,235,159);
  strokeWeight(2);
  var i = 12;
  while((keys[i] == i+1) && (keys[i] < 17)){
  data[j]=keys[i];
  rect((i-12)*100,300,100,100);
  i++;
  j++;
  }
}

function outline(y){
  strokeWeight(2);
  noFill();
  var x =0;
  while(x<5){
  rect(x*100,y,100,100);
  x+=1;
  
  }
}
function splbar(){
  fill (225,59,32);
  strokeWeight(2);
  var i=0;
  while(i<4){
  rect(400,i*100,100,100);
  i++;
  }
}












