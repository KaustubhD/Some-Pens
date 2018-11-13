class Curve{

  constructor(){
    this.path = []
    this.temp = []
  }

  addX(x){
    this.temp[0] = x
  }

  addY(y){
    this.temp[1] = y
  }

  addPoint(){
    this.path.push(this.temp)
  }

  show(){
    ctx.strokeStyle = '#fff'
    ctx.fillStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(this.path[0][0], this.path[0][1])
    for(let x of this.path){
      ctx.lineTo(x[0], x[1])
    }
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(this.temp[0], this.temp[1])
    ctx.ellipse(this.temp[0], this.temp[1], 3, 3, 0, 0, TWICE)
    ctx.fill()
    this.temp = []
    // console.log(this.path)
  }

  reset(){
    this.path = []
    this.temp = []
  }

}


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

// Change the canvas dimensions here
let width = 1200
let height = 600

const HALF = Math.PI / 2
const TWICE = Math.PI * 2
canvas.width = width
canvas.height = height


canvas.style.backgroundColor = '#000'

// Change the square columns size here
let wCol = 80

let cols = Math.floor(width / wCol) - 1
let rows = Math.floor(height / wCol) - 1
// console.log(`Rows ${rows} and Columns ${cols}`)

let angle = 0

let curves = new Array(rows)

for(let i = 0; i < rows; i++){
    curves[i] = new Array(cols)
}
// console.log(curves)
for(let i = 0; i < rows; i++){
  for(let j = 0; j < cols; j++){
    // console.log(`${i} and  ${j}`)
    curves[i][j] = new Curve()
    // curves[i][j] = 22
  }
}
// console.log(curves)





let awesome = 0 //Useless
const MAX_ITER = 50 //Useless
function draw(){

  ctx.clearRect(0, 0, width, height)
  // if(awesome >= MAX_ITER) clearInterval(x)

  for(let j = 0; j < cols; j++){
    let r = (wCol / 2) - (0.1 * wCol)
    let cx = wCol + (wCol * j) + (wCol / 2)
    let cy = wCol / 2
    ctx.fillStyle = 'none'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 0.5
    ctx.moveTo(cx + r, cy)
    ctx.beginPath()
    ctx.ellipse(cx, cy, r, r, 0, 0, TWICE)
    ctx.stroke()
    let px = r * Math.cos(angle * (j + 1) - HALF)
    let py = r * Math.sin(angle * (j + 1) - HALF)
    ctx.moveTo(cx + px, cy + py)
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.ellipse(cx + px, cy + py, 2, 2, 0, 0, TWICE)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'none'
    ctx.moveTo(cx + px, 0)
    ctx.lineTo(cx + px, height)
    ctx.stroke()
    
    for(let i = 0; i < rows; i++){
      // console.log(`${i} and ${j}` + curves[i][j])
      curves[i][j].addX(cx + px)
    }
  }
  for(let i = 0; i < rows; i++){
    let r = (wCol / 2) - (0.1 * wCol)
    let cy = wCol + (wCol * i) + (wCol / 2)
    let cx = wCol / 2
    ctx.fillStyle = 'none'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 0.5
    ctx.moveTo(cx + r, cy)
    ctx.beginPath()
    ctx.ellipse(cx, cy, r, r, 0, 0, TWICE)
    ctx.stroke()
    let px = r * Math.cos(angle * (i + 1) - HALF)
    let py = r * Math.sin(angle * (i + 1) - HALF)
    ctx.moveTo(cx + px, cy + py)
    ctx.beginPath()
    ctx.fillStyle = '#fff'
    ctx.ellipse(cx + px, cy + py, 2, 2, 0, 0, TWICE)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'none'
    ctx.moveTo(0, cy + py)
    ctx.lineTo(width, cy + py)
    ctx.stroke()

    for(let j = 0; j < cols; j++){
      curves[i][j].addY(cy + py)
    }
  }
  angle += 0.02


  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      curves[i][j].addPoint()
      curves[i][j].show()
    }
  }
  
  awesome++
  console.log('Running')
  if(angle > TWICE){
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        curves[i][j].reset()
        // curves[i][j] = 22
      }
    }
    angle = 0
  }
}






let x = setInterval(function(){
  requestAnimationFrame(draw)
}, 60)




