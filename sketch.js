var keys = new Array(20);
var data = new Array(20);

function setup() {

  createCanvas(800, 800);
  smooth(8);



}

function draw() {
  
background(50);



outline(0);             // to create just the outline.
outline(100);
outline(200);
outline(300);
splbar();               // to create special buttons

firstrow();

secondrow();

thirdrow();

fourthrow();


printresult();


noLoop();
}



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
  loop();
  if (key == '6') {
  save(keys, 'my.txt')
  }
  
}

function firstrow() {
  fill (70,137,102);
  strokeWeight(2);
  var i = 0;
  var j = 0;
  while((keys[i] == i+1) && (keys[i] < 5)){
  collect =keys[i];
  collector(collect);
  rect(i*100,0,100,100);
 // print(data[j]);
  i++;
  j++;
  
}

}

function secondrow() {
  fill (0,163,136);
  strokeWeight(2);
  var i = 4;
  var j = 0;
  while((keys[i] == i+1) && (keys[i] < 9)){
  collect =keys[i];
  collector(collect);
  rect((i-4)*100,100,100,100);
  i++;
  j++;
  
  }
}

function thirdrow() {
  fill (121,189,143);
  strokeWeight(2);
  var i = 8;
  var j = 0;
  while((keys[i] == i+1) && (keys[i] < 13)){
  collect =keys[i];
  collector(collect);
  rect((i-8)*100,200,100,100);
  i++;
  j++;
  
  }
}

function fourthrow() {
  fill (190,235,159);
  strokeWeight(2);
  var i = 12;
  var j = 0;
  while((keys[i] == i+1) && (keys[i] < 17)){
  collect =keys[i];
  collector(collect);
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

function collector(x) {
  var j;
  data[j]=x;
  j++;
}


function printresult(){
  console.log(data);
}
