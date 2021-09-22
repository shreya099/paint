 //  PROJECT1-bg color 
// const b=document.querySelector('.btn');
// const bodybg=document.querySelector('body');
// const color=['green','yellow','pink','#09efef']

// b.addEventListener('click',chng);
// function chng(min,max) {
// 	// body...

//     let r= Math.floor(Math.random() * color.length);
// 	bodybg.style.backgroundColor=color[r];
// }


 //  PROJECT2-hex color 
// const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//  const b=document.querySelector('.btn');
//  const bodybg=document.querySelector('body');
//   const h=document.querySelector('.hex');
//   b.addEventListener('click',gethex);
//   function gethex() {
//   	// body...
  
//   	let hexval='#';
//   	for(let i=0;i<6;i++)
//   	{
//   			let r=Math.floor(Math.random()* hex.length);
//    hexval+=hex[r];
//   	}
//   	bodybg.style.backgroundColor=hexval;
//   	h.innerHTML=hexval;
//   }



 //  PROJECT3-quote  

// const quote=[
// {
// 	name:'shreya',
// 	quote:'hyy'
// },
// {
// 	name:'shreya0',
// 	quote:'hyy'
// },
// {
// 	name:'shreya',
// 	quote:'hy'
// },
// ]

// const b=document.querySelector('.btn');
// const q=document.querySelector('#quote');
// const a=document.querySelector('#author');
//   b.addEventListener('click',display);

//   function display() {
//   	// body...
//   	let r=Math.floor(Math.random()* quote.length);
//   	q.innerHTML=quote[r].quote;
//   	a.innerHTML=quote[r].name;
//   }

























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


canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

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
function getX(event) {
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
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
