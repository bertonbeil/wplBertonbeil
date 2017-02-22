var canvas;
var cW = $('#svg-container').innerWidth();
var cH = $('#svg-container').innerHeight();
console.log(cW);
console.log(cH);
function setup() {
  canvas = createCanvas(cW, cH);
  canvas.parent('svg-container');

}

var y = 0;
function draw() {
  background('rgba(0,0,0, .0)');
  fill(255);
  frameRate(30);
  y = y + 31;
  // console.log(cH);
  if (y > cH) {
    // console.log(y);
    y = height;
  }

    var start = 0;
    var step = 0;
    var gutter = 30;
    var step1 = 270;
    var step2 = step1 + step1 + 15;
    var step3 = step2 + step1 + 15;
    var step4 = step3 + step1;
    var step5 = step4 + step1;
    var step6 = step5 + step1;
    var height = cH;
    stroke(210, 216, 221);
    line(step, start, step, y);
    line(step1, start, step1, height);
    line(step2, start, step2, height);
    line(step3, start, step3, height);
    line(step4, start, step4, height);
    line(step5, start, step5, height);
    line(step6, start, step6, height);
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
