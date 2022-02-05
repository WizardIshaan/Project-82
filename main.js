var mouseEvent = "empty";

var lastPositionX,lastPositionY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "cyan";

width_line = 2;

radius = 4;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
  color = document.getElementById("color").value;
  width_line = document.getElementById("width_line").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
  CurrentPosition_mouse_x = e.clientX - canvas.offsetLeft;
  CurrentPosition_mouse_y = e.clientY - canvas.offsetTop;

  console.log("X = " + CurrentPosition_mouse_x + " ,Y = " + CurrentPosition_mouse_y);

  if (mouseEvent == "mouseDown")
  {

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    ctx.moveTo(lastPositionX,lastPositionY);
    ctx.arc(CurrentPosition_mouse_x,CurrentPosition_mouse_y, radius, 0, 2* Math.PI);
    ctx.stroke();
  }
  lastPositionX = CurrentPosition_mouse_x;
  lastPositionY = CurrentPosition_mouse_y;
  
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup()
{

  mouseEvent = "mouseUp";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave()
{

  mouseEvent = "mouseLeave";

}

function clear_area()
{
  ctx.clearRect(0,0,canvas.width, canvas.height);
}