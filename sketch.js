let cor;
let posiçãoHorizontal// x
let posiçãoVetical// y

function setup() {

  createCanvas(400, 400);
background(color(random(0,255), random(0,255), random(0,255)));
cor = color(random(0,255), random(0,255), random(0,255));
  posiçãoHorizontal = 200
posiçãoVertical = 200
}

function draw() {
  
  fill (cor);
circle (posiçãoHorizontal, posiçãoVertical,50);

  if(mouseX < posiçãoHorizontal) {
posiçãoHorizontal = posiçãoHorizontal -1;
  }
      if(mouseX > posiçãoHorizontal) {
posiçãoHorizontal = posiçãoHorizontal +1;
}
    

  if(mouseY < posiçãoVertical) {
posiçãoVertical--;
  }
      if(mouseY > posiçãoVertical) {
posiçãoVertical++;
      }
        
if(mouseIsPressed) 
  cor = color(random(0,255), random(0,255), random(0,255));
  random (0,100)
} 