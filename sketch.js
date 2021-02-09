// MADE BY NITISH
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}

function draw() {
  background(60);

  var hr = hour();
  var mn = minute();
  var sc = second();

  translate(width / 2, innerHeight / 2);
  rotate(-90);
  fill("seashell");
  ellipse(0, 0, 300, 300);

  strokeWeight(7);
  noFill();
  stroke(rgb(229, 28, 63));

  //arcs
  var arc1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, arc1);

  stroke(rgb(154, 249, 7));
  var arc2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, arc2);

  stroke(rgb(0, 213, 220));
  var arc3 = map(hr % 12, 0, 12, -0, 360);
  arc(0, 0, 260, 260, 0, arc3);

  //   hands
  push();
  rotate(arc1);
  stroke(rgb(229, 28, 63));
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(arc2);
  stroke(rgb(154, 249, 7));
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(arc3);
  stroke(rgb(0, 213, 220));
  line(0, 0, 50, 0);
  pop();
}
