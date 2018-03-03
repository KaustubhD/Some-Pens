var mouseX, mouseY;
var tochange = document.querySelector('.wrapper .title');
document.addEventListener('mousemove', function(e){
  // var tochange = document.querySelector('.wrappper .title');
  mouseX = e.pageX;
  mouseY = e.pageY;
  tochange.style.backgroundPosition = ((mouseX / 50) + "% " + (mouseY / 50) + "%");
});
