let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')
let height = canvas.height
let width = canvas.width
let ran = new Random()
ctx.translate(0,0)
ctx.fillStyle = 'rgb(255,255,255)'

const x = setInterval(function(){
  console.log('Here')
  requestAnimationFrame(draw)
}, 60)
let a = 0
let b = 0
let att = 0
function draw(){

  for(let i = 0; i < 200; i++){
    drawPoint()
    nextPoint()
  }
  att++
  if(att > 500){
    clearInterval(x)
  }
}

function nextPoint(){
  let prob = ran.real(0, 1)
  if(prob < 0.01){
    nextA = 0
    nextB = 0.16 * b
  }
  else if(prob < 0.86){
    nextA = (0.85 * a) + (0.04 * b)
    nextB =  (0.85 * b) - (0.04 * a) + 1.60
  }
  else if(prob < 0.93){
    nextA = (0.20 * a) - (0.26 * b)
    nextB = (0.23 * a) + (0.22 * b) + 1.60
  }
  else{
    nextA = (0.28 * b) - (0.15 * a)
    nextB = (0.26 * a) + (0.24 * b) + 0.44
  }
  a = nextA
  b = nextB
}
function drawPoint(){
  let tempA = (a + 2.1820) * ((width + 30) / 4.8378)
  let tempB = (b * ((-1 * height) / 9.9983)) + height
  let bToHue = b * (360 / 9.9983)
  let color = `hsl(${bToHue}, 100%, 50%)`
  ctx.fillStyle = color
  ctx.fillRect(tempA, tempB, 1, 1)
}