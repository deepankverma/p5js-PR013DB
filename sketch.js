var count = new Array(50);
var x;
var y;
var send = 0;

//var send2;
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
collect(send);
noLoop();
hover(x,y,100,100);
}

function mousePressed() {
console.log(mouseX);
console.log(mouseY);
  if((mouseX <100) && (mouseY <100)){
  x = 0;
  y = 0;
  send = "A";
  loop();
}

  if((mouseX <200) && (mouseX >100) && (mouseY < 100)){
  x = 100;
  y = 0;
  send = "B";
  loop();
}
  
  if ((mouseX <300) && (mouseX >200) && (mouseY <100)){
    x = 200;
    y = 0;
    send = "C";
    loop();
  }
  
  if ((mouseX <400) && (mouseX >300) && (mouseY <100)){
    x = 300;
    y = 0;
    send = "D";
    loop();
  }
  
  if ((mouseX <100) && (mouseY <200) && (mouseY >100)){
    x = 0;
    y = 100;
    send = "E";
    loop();
  }
  
  if ((mouseX <200) && (mouseX >100) && (mouseY <200) && (mouseY >100)){
    x = 100;
    y = 100;
    send = "F";
    loop();
  }
  
  if ((mouseX <300) && (mouseX >200) && (mouseY <200) && (mouseY >100)){
    x = 200;
    y = 100;
    send = "G";
    loop();
  }
  
  if ((mouseX <400) && (mouseX >300) && (mouseY <200) && (mouseY >100)){
    x = 300;
    y = 100;
    send = "H";
    loop();
  }
  
  if ((mouseX <100) && (mouseY >200) && (mouseY <300)){
    x = 0;
    y = 200;
    send = "I";
    loop();
  }
  
  if ((mouseX <200) && (mouseX >100) && (mouseY >200) && (mouseY <300)){
    x = 100;
    y = 200;
    send = "J";
    loop();
  }
  
  if ((mouseX <300) && (mouseX >200) && (mouseY >200) && (mouseY <300)){
    x = 200;
    y = 200;
    send = "K";
    loop();
  }
  
  if ((mouseX <400) && (mouseX >300) && (mouseY >200) && (mouseY <300)){
    x = 300;
    y = 200;
    send = "L";
    loop();
  }
  
  if ((mouseX <100) && (mouseY >300) && (mouseY <400)){
    x = 0;
    y = 300;
    send = "M";
    loop();
  }
  if ((mouseX <200) && (mouseX >100) && (mouseY >200) && (mouseY <300)){
    x = 100;
    y = 300;
    send = "N";
    loop();
  }
  if ((mouseX <200) && (mouseX >100) && (mouseY >200) && (mouseY <300)){
    x = 200;
    y = 300;
    send = "0";
    loop();
  }
  if ((mouseX <200) && (mouseX >100) && (mouseY >200) && (mouseY <300)){
    x = 300;
    y = 300;
    send = "P";
    loop();
  }
  
  if ((mouseX < 500) && (mouseX > 400) && (mouseY < 100)){
  save(count,"count.txt");
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
  fill (1,52,64);
  rect(x,y,100,100);
}

function collect(send){
  var i = 0;
  count[i]=send;
  //count[1]=send;
 count.push(send);
  //console.log(count[i]);
  i++;
  //var list = split(count,' ');
  console.log(count);
}

