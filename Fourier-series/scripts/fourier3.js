let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let HEIGHT = 400
let WIDTH = 600
const PI = Math.PI
const TWOPI = 2 * Math.PI

canvas.width = WIDTH
canvas.height = HEIGHT

canvas.style.backgroundColor = '#000'
ctx.strokeStyle = '#fff'
ctx.translate(WIDTH / 2, HEIGHT / 2)
let t = 0
const N = 100
let r = 0
let x = 0
let y = 0
let prevX = 0
let prevY = 0
let n = 0

let wave = []



function draw(){
  ctx.clearRect(-WIDTH / 2, -HEIGHT / 2, WIDTH, HEIGHT)

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
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineTo(x, y)
    ctx.stroke()

    ctx.beginPath()
    ctx.fillStyle = 'rgba(0,0,0,0)'
    ctx.strokeStyle = 'rgba(255,255,255, 0.2)'
    ctx.strokeStyle = ''
    ctx.ellipse(prevX, prevY, r, r, 0, 0, TWOPI)
    ctx.stroke()
    

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.ellipse(x, y, 4, 4, 0, 0, TWOPI)
    ctx.fill()

  }
  wave.unshift([x, y])

  ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
  ctx.beginPath()
  for(let i = 0; i < wave.length; i++){    
    ctx.lineTo(wave[i][0], wave[i][1])
  }
  ctx.stroke()
  ctx.beginPath()

  t += 0.02
  if(wave.length > 500)
    wave.pop()
  z = requestAnimationFrame(draw)
  return
}
let z = requestAnimationFrame(draw)
