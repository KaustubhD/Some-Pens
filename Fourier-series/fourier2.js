let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let HEIGHT = 600
let WIDTH = 1000
const PI = Math.PI
const TWOPI = 2 * Math.PI

canvas.width = WIDTH
canvas.height = HEIGHT

canvas.style.backgroundColor = '#000'
ctx.strokeStyle = '#fff'
let t = 0
const N = 15
let r = 0
let x = 0
let y = 0
let prevX = 0
let prevY = 0
let n = 0


let t2 = 20
const N2 = 5
let r2 = 0
let x2 = 0
let y2 = 0
let prevX2 = 0
let prevY2 = 0
let n2 = 0

const TR_X1 = 150
const TR_Y1 = (2 * HEIGHT) / 3
const TR_X2 = (2 * WIDTH) / 3
const TR_Y2 = 150




let wave = []
let wave2 = []

/****************
*
* What you're about to read might be the filthiest you've seen. But calm down, its just laziness.
*
****************/

function draw(){
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  ctx.translate(TR_X1, TR_Y1)
  x = 0
  y = 0
  for(let i = 0; i < N; i++){
    prevX = x
    prevY = y
    n = (i * 2) + 1
    r = 60 * (4 / (n * PI))
    x += r * Math.cos(n * t)
    y += r * Math.sin(n * t)

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.strokeStyle = 'rgba(255,255,255,1)'
    ctx.lineTo(x, y)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,0)'
    ctx.strokeStyle = 'rgba(255,255,255, 0.3)'
    ctx.strokeStyle = ''
    ctx.ellipse(prevX, prevY, r, r, 0, 0, TWOPI)
    ctx.stroke()
    

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.ellipse(x, y, 4, 4, 0, 0, TWOPI)
    ctx.fill()

  }
  wave.unshift(y)
  ctx.beginPath()
  ctx.moveTo(-(2 * TR_X1), y)
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
  ctx.lineTo(WIDTH, y)
  ctx.stroke()

  ctx.stroke()
  ctx.beginPath()



  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.translate(TR_X2, TR_Y2)
  x2 = 0
  y2 = 0
  for(let i2 = 0; i2 < N2; i2++){
    prevX2 = x2
    prevY2 = y2
    n2 = (i2 * 2) + 1
    r2 = 60 * (4 / (n2 * PI))
    x2 += r2 * Math.cos(n2 * t2)
    y2 += r2 * Math.sin(n2 * t2)

    ctx.beginPath()
    ctx.moveTo(prevX2, prevY2)
    ctx.strokeStyle = 'rgba(255,255,255,1)'
    ctx.lineTo(x2, y2)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,0)'
    ctx.strokeStyle = 'rgba(255,255,255, 0.3)'
    ctx.strokeStyle = ''
    ctx.ellipse(prevX2, prevY2, r2, r2, 0, 0, TWOPI)
    ctx.stroke()
    

    ctx.beginPath()
    ctx.moveTo(x2, y2)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.ellipse(x2, y2, 4, 4, 0, 0, TWOPI)
    ctx.fill()

  }
  wave2.unshift(x2)
  ctx.beginPath()
  ctx.moveTo(x2, -(TR_Y2 * 2))
  ctx.strokeStyle = 'rgba(255,255,255,0.3)'
  ctx.lineTo(x2, HEIGHT)
  ctx.stroke()

  ctx.beginPath()
  ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
  ctx.moveTo(wave2[0], wave[0] - TR_Y2 + TR_Y1)
  for(let j = 0; j < wave.length; j++){
    ctx.lineTo(wave2[j], wave[j] - TR_Y2 + TR_Y1)
  }
  ctx.stroke()


  t += 0.02
  t2 += 0.09
  if(wave.length > 700) // Maximum elements in the path.
  // If you're concerned about memory, remember there are two arrays with these many elements in each of them
    wave.pop()
  z = requestAnimationFrame(draw)
  return
}
let z = requestAnimationFrame(draw)

// let t = 0
// const N = 15
// let r = 0
// let x = 0
// let y = 0
// let prevX = 0
// let prevY = 0
// let n = 0


// let t2 = 20
// const N2 = 5
// let r2 = 0
// let x2 = 0
// let y2 = 0
// let prevX2 = 0
// let prevY2 = 0
// let n2 = 0

// const TR_X1 = 150
// const TR_Y1 = (2 * HEIGHT) / 3
// const TR_X2 = (2 * WIDTH) / 3
// const TR_Y2 = 150

// t += 0.02
// t2 += 0.09
// Looks something weird
