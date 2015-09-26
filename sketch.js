var count = new Array(50);
var x;
var y;
var send;
var newcount;
function setup() {
  createCanvas(800, 800);
  smooth(8);
}

function draw()  {
background(50);
outline(0);             // to create just the outline.
outline(100);
outline(200);
outline(300);
splbar();
//noLoop();
fill (1,52,64);
hover(x,y,100,100);
collect(send);
}

function mousePressed() {
console.log(mouseX);
console.log(mouseY);
noLoop();
  if((mouseX <100) && (mouseY <100)){
  x = 0;
  y = 0;
  send = 1;
  loop();
}

  if((mouseX <200) && (mouseX >100) && (mouseY < 100)){
  x = 100;
  y = 0;
  send = 2;
}
  
  if((mouseX < 500) && (mouseX > 400) && (mouseY < 100)){
  
  save (count,"count.txt");
  
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
function hover(x,y){
  fill (225,59,32);
  rect(x,y,100,100);
}

function collect(x){
  var i = 0;
  count[i]=x;
 // count.push(x);
  //console.log(count[i]);
  i++;
  console.log(count);
}
