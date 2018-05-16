var rot1 = 0;
var x1 = 0;
var xOff1 = 0;
var rot2 = 0;
var x2 = 0;
var xOff2 = 0;
var dist1 = 0;
var rot3 = 300;
var rot4 = 0;
var x4 = 0;
var xOff4 = 0;
var dist2 = 0;
var rot5 = 0;
var x5 = 0;
var dist5 = 0;

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    // put drawing code here
    background(40, 39, 40);

    //These are the blue and purple circles on the outside. I calculate the distance between the circles and the mouse to change color. 
    push();
    dist5 = dist(width / 2, height / 2, mouseX, mouseY);
    console.log(dist5);
    if (dist5 >= 470 && dist5 <= 999) {
        fill(182, 136, 255, 20);
        stroke(182, 136, 255);
    } else {
        fill(166, 255, 239, 20);
        stroke(166, 255, 239);
    }
    translate(width / 2, height / 2);
    rotate(rot5 * 2);
    for (var i = 0; i < 5; i++) {
        rotate(3 * rot5 / 33);
        //the size is changed with the noise.
        ellipse(0, -515, 190 * noise(x5));
        ellipse(0, 515, 190 * noise(x5));
        ellipse(515, 0, 190 * noise(x5));
        ellipse(-515, 0, 190 * noise(x5));
    }
    x5 -= .009;
    rot5 -= .05;
    pop();
    
    //This is the inner pink circle. 
    push();
    stroke(255, 0, 188);
    translate(width / 2, height / 2);
    rotate(rot1);
    for (var i = 0; i < 40; i++) {
        rotate(10);
	//some points and colors are changing with noise.
        xOff1 = 100 * noise(x1);
        fill(255 * noise(xOff1), 0, 150, 20);
        bezier(xOff1, 0, 10, -40, 30, -100, 100, -xOff1);
    }
    rot1 += .5;
    x1 += .01;
    pop();

    //This is the blue circle 
    push();
    stroke(0, 205, 255);
    translate(width / 2, height / 2);
    rotate(rot2);
    for (var i = 0; i < 100; i++) {
        rotate(10);
	//The color and points change with noise
        xOff2 = 90 * noise(x2);
        fill(0, 190 * noise(xOff2), 255, 20);
        bezier(100, -xOff2, 105, -xOff2, xOff2, -160, 100, -200);
    }
    //I calculate the distance of the mouse and radius of the circle so when the mouse hovers over it, you can control the rotation of the circle
    dist1 = dist(width / 2, height / 2, mouseX, mouseY);
    if (dist1 <= 225) {
        rot2 = mouseX / 20;
    } else {
        rot2 -= .09;
    }
    x2 -= .01;
    pop();

    //These are the little white dots that form a star. 
    push();
    translate(width / 2, height / 2);
    rotate(rot3 * 2);
    for (var i = 0; i < 133; i++) {
        rotate(-3 * rot3 / 33);
        stroke(255);
	//noise changes the size of the dots. 
        ellipse(i, i * 2, 5 * noise(rot3));
    }
    rot3 += 0.09;
    pop();

    //These are the outermost petals. There are two curves that form the petal
    push();
    stroke(185, 103, 255);
    translate(width / 2, height / 2);
    rotate(rot4);
    for (var i = 0; i < 40; i++) {
        rotate(10);
	//width and color of the petal change with noise
        xOff4 = 100 * noise(x4);
        fill(185 * noise(rot4), 103 * noise(rot4), 255, 80);
        bezier(-30, -460, 5, -370, -xOff4, -290, 0, -225);
        bezier(-30, -460, 5, -370, xOff4, -290, 0, -225);
    }
    //If you click on the circle of petals, you can stop the animation. 
    dist2 = dist(width / 2, height / 2, mouseX, mouseY);
    if ((dist2 <= 460 && dist2 >= 230) && mouseIsPressed) {
        rot4;
    } else {
        rot4 += .05;
    }
    x4 += .009;
    pop();
}