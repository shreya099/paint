let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth - 60;
canvas.height = 400;
let context = canvas.getContext("2d");
let start_bg="white";
context.fillStyle = start_bg;
context.fillRect(0, 0, canvas.width, canvas.height);
let restore_array = [];
let start_index = -1;
let d_array=[];
let index=0;


let draw_color = 'black';
let draw_width = "2";
let is_drawing = false;




function change_color(element) {
  draw_color = element.style.background;

}
function change_shape(s)
{
context.beginPath();
context.arc(Math.floor(Math.random()* canvas.width),Math.floor(Math.random()* canvas.height),30,0,2*Math.PI);
context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    
context.stroke();
}

function change_shape1(s)
{
context.beginPath();
context.moveTo(Math.floor(Math.random()* canvas.width),Math.floor(Math.random()* canvas.height));
context.lineTo(Math.floor(Math.random()* canvas.width),Math.floor(Math.random()* canvas.height));

context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
context.stroke();
}


function myFunction(element) {

   draw_color = 'white';

 
  
}
 function change_b(t) {
 context.fillStyle = t.value;
context.fillRect(0, 0, canvas.width, canvas.height);
 }

function start(event) {
  is_drawing = true;
  context.beginPath();
 context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

 
function draw(event) {
  if (is_drawing) {
 context.lineTo(getX(event), getY(event));
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();

  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
    restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  start_index += 1;

 
}
function getX(event) {
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
}


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);


function Restore() {
 if (start_index <= 0) {
    Clear()
  } else {
    start_index += -1;

    restore_array.pop();
    if ( event.type != 'mouseout' ) {
      context.putImageData(restore_array[start_index], 0, 0);
     
    }
   
  }
}

 function Clear() {
    context.fillStyle = start_bg;
     context.clearRect(0, 0, canvas.width, canvas.height);
     context.fillRect(0, 0, canvas.width, canvas.height);
     restore_array=[];
     start_index=-1;
      d_array=[];
     index=0;

 }
 const download = document.getElementById('download');
  download.addEventListener('click', function(e) {
  console.log(canvas.toDataURL());
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
