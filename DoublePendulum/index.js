let canvas = document.getElementById('can')
let canvas2 = document.getElementById('can2')
let ctx = canvas.getContext('2d')
let ctx2 = canvas2.getContext('2d')
let height = canvas.height
let width = canvas.width
// console.log(`${height}   ${width}`)
let r1 = 150
let r2 = 150
let m1 = 20
let m2 = 20
let a1 = Math.PI / 2
let a2 = Math.PI / 4
let a1_v = 0
let a2_v = 0
let a1_a = 0.01
let a2_a = -0.002
let g = 1
// let damp = 0.999 //More close to 1  -> more damping
let tr = [width / 2, 200]

ctx.translate(tr[0], tr[1])
ctx2.translate(tr[0], tr[1])
// ctx2.beginPath()


setInterval(function(){
  requestAnimationFrame(draw)
}, 20)

function draw(){
  let nume1 = -g * (2 * m1 + m2) * Math.sin(a1)
  let nume2 = -m2 * g * Math.sin(a1 - 2 * a2)
  let nume3 = -2 * Math.sin(a1 - a2) * m2 * (Math.pow(a2_v, 2) * r2 + Math.pow(a1_v, 2) * r1 * Math.cos(a1 - a2))
  let deno = 2 * m1 + m2 - (m2 * Math.cos(2 * a1 - 2 * a2))

  a1_a = (nume1 + nume2 + nume3) / (r1 * deno)

  nume1 = 2 * Math.sin(a1 - a2)
  nume2 = Math.pow(a1_v, 2) * r1 * (m1 + m2)
  nume3 = g * (m1 + m2) * Math.cos(a1) + Math.pow(a2_v, 2) * r2 * m2 * Math.cos(a1 - a2)

  a2_a = (nume1 * (nume2 + nume3)) / (r2 * deno)

  ctx.clearRect(-tr[0], -tr[1], width, height)
  let x1 = r1 * Math.sin(a1)
  let y1 = r1 * Math.cos(a1)
  let x2 = x1 + (r2 * Math.sin(a2))
  let y2 = y1 + (r2 * Math.cos(a2))

  ctx2.beginPath()
  ctx2.moveTo(x2, y2)
  ctx2.arc(x2, y2, 1, 0, 2 * Math.PI)
  // ctx2.fillStyle = 'red'
  ctx2.fill()

  // ctx2.beginPath()
  // ctx2.moveTo(x1, y1)
  // ctx2.arc(x1, y1, 1, 0, 2 * Math.PI)
  // ctx2.fillStyle = 'blue'
  // ctx2.fill()


  

  ctx.beginPath()
  ctx.moveTo(0,0)

  ctx.lineTo(x1, y1)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x1, y1, m1, 0, 2 * Math.PI)
  ctx.fill()

  // ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x2, y2, m2, 0, 2 * Math.PI)
  ctx.fill()
  // ctx.closePath()
  a1_v += a1_a
  a2_v += a2_a
  a1 += a1_v
  a2 += a2_v
  // a1_v *= damp
  // a2_v *= damp
}