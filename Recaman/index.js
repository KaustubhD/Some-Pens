class Arc{
  constructor(start, end, isUp){
    this.start = start
    this.end = end
    this.isUp = isUp
  }
  show(){
    // console.log('in show')
    let rad = Math.abs(this.start - this.end) / 2
    let x = (this.start + this.end) / 2
    ctx.beginPath()
    if(this.isUp == 0){
      ctx.arc(x, 0, rad, 0, Math.PI)
    }
    else{
      ctx.arc(x, 0, rad, Math.PI, 0)
    }
    ctx.stroke()

  }
}


let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')
canvas.height = document.body.clientHeight
canvas.width = document.body.clientWidth
let height = canvas.height
let width = canvas.width
ctx.strokeStyle = '#fff'
ctx.lineWidth = 0.5

let count = 1
let nums = []
let index = 0
let seq = []
let arcs = []
let largest = 0



nums[index] = true
seq.push(index)
ctx.translate(0, height / 2)

let x = setInterval(function(){
  requestAnimationFrame(draw)
}, 70)


function step(){
  let next = index - count
  if(next < 0 || nums[next]){
    next = index + count
  }
  nums[next] = true
  seq.push(next)

  let a = new Arc(index, next, count % 2)
  arcs.push(a)
  index = next
  if(index > largest){
    largest = index
  }
  count++
}


function draw(){
  step()
  let scal = width / (largest)
  ctx.clearRect(0, 0, width, height)
  ctx.translate(0, height / 2)
  ctx.scale(scal, scal)
  for(a in arcs){
    arcs[a].show()
  }
  ctx.setTransform(1,0,0,1,0,0)
}