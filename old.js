// // A HTML range slider
// var slider;

// function setup() {
//   createCanvas(720, 400);
//   // hue, saturation, and brightness
//   colorMode(HSB, 255);
//   // slider has a range between 0 and 255 with a starting value of 127
//   slider = createSlider(0, 255, 127);
// }

// function draw() {

//   // Set the hue according to the slider
//   stroke(slider.value(), 255, 255);
//   fill(slider.value(), 255, 255, 127);
//   ellipse(360, 200, 200, 200);
// }

// MY PROJECT BELOW

// var palette = [
//   [3, 169, 244],  // blue
//   [199,244,100],  // lime
//   [255,107,107],  // coral
//   [226,0,255],    // magenta
//   [255,255,255]   // white
// ];


// Define and set default rect colours
// (btw, once you have more than two rects, 
// might be worth storing this in an array of 
// colours instead of individual vars
// var rect1Colour = palette[4];   
// var rect2Colour = palette[4];


// Runs once
function setup() {
  // Create canvas
  createCanvas(900, 600);
  r = random(255);
  g = random(255);
  b = random(255);
}


// Runs forever
function draw() {
  // Select rect 1's colour
  // fill(rect1Colour);
  fill(r, g, b);
  noStroke();
  rect1();
  rect2();
}

function rect1() {
	var shape1 = rect(10, 10, 250, 250);
}
function rect2() {
	var shape2 = rect(10, 270, 250, 250);
}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 10, 10);
  if (d < 255) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

// function keyPressed() {
// 	if (keyCode === LEFT_ARROW) {
// 		rect1Colour = palette[1];
// 	}
// 	if (keyCode === RIGHT_ARROW) {
// 		rect2Colour = palette[1];
// 	}
// }

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     rect1Colour = palette[1];
//   } else if (keyCode === RIGHT_ARROW) {
//   	rect1Colour = palette[2];
//   } else {
//     rect1Colour = palette[3];
//   }
// }


// // Runs when key is pressed
// // function mousePressed() {
// // 	// for(i = 0; i <= palette.length; i++)
// // 	// 	rect1Colour = palette[i];
// // 	  if (palette[0]) {
// // 	    rect1Colour = palette[1];
// // 	    // rect2Colour = palette[1];
// // 	  } else if(palette[1]) {
// // 	  	rect1Colour = palette[2];
// // 	  	// rect2Colour = palette[2];
// // 	  } else {
// // 	    rect1Colour = palette[0];
// // 	    // rect2Colour = palette[0];
// // 	  }
// // }