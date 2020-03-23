function setup() {
  createCanvas(600, 600);
  background(100,80,160);
  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);
    //array.push([mouseX,mouseY]);
  }


function keyTyped(){
  if (key == 's'){
    //save this images
    saveCanvas('filename','png');
  }
    //line(array[i][0],array[i][1],array[i+1][0],array[i+1],[1]);
  }
  return false;
}
