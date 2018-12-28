let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let h = document.documentElement.clientHeight
// 500
let w = document.documentElement.clientWidth
// 500

canvas.height = h
canvas.width = w

canvas.style.backgroundColor = '#000'


const PI = Math.PI

class Particle{

  constructor(x, y){
    this.pos = [x, y]
    this.r = 3
    this.temp = []
  }
  update(){
    this.pos[0] -= 1
    let sins = 3 * Math.sin(Math.random() * ((3 * PI / 2) + (PI / 2)))
    // console.log(sins)
    this.pos[1] += sins
    this.pos[2] = Math.sqrt(Math.pow(this.pos[0], 2) + Math.pow(this.pos[1], 2))
  }
  show(){
    ctx.fillStyle = "rgba(166,166,237, 0.5)"
    ctx.strokeStyle = "rgba(200, 200, 200, 0.5)"
    // ctx.strokeWidth = "2"
    // ctx.fillRect(this.pos[0], this.pos[1], this.r, this.r)
    ctx.moveTo(this.pos[0], this.pos[1])
    ctx.beginPath()
    ctx.ellipse(this.pos[0], this.pos[1], this.r, this.r, 0, 0, 2 * PI)
    ctx.fill()
    ctx.stroke()
    for(let i = 1; i <= 6; i++){
      this.temp = this.turnThis(i)
      // ctx.fillRect(this.temp[0], this.temp[1], this.r, this.r)
      ctx.moveTo(this.temp[0], this.temp[1])
      ctx.beginPath()
      ctx.ellipse(this.temp[0], this.temp[1], this.r, this.r, 0, 0, 2 * PI)
      ctx.fill()
      ctx.stroke()
    }
  }
  turnThis(times){
    let arr = []
    let newA = (times * PI / 3) + Math.atan(this.pos[0] / this.pos[1])
    arr[0] = this.pos[2] * Math.sin(newA)
    arr[1] = this.pos[2] * Math.cos(newA)
    return arr
  }
  done(){
    return this.pos[0] < 3
  }
  touch(arr){
    let touch = false
    for(let i = 0; i < arr.length; i++){
      if(Math.sqrt(Math.pow(this.pos[0] - arr[i].pos[0], 2) + Math.pow(this.pos[1] - arr[i].pos[1], 2)) < this.r * 2){
        touch = true
        break
      }
    }
    return touch
  }


}
let ps = []

let p = new Particle(w / 2, 0)
// let turnedCoords = []
// let turned = null
let count = 0
function draw(){
  ctx.translate(w / 2, h / 2)
  ctx.rotate(PI / 6)
  ctx.clearRect(-w / 2, -h / 2, w, h)
  // p.show()
  // if(p.done() || p.touch(ps)){
  //   p.update()
    
  //   ps.push(p)
  //   p = new Particle(w / 2, 0)
  // }
  while(!p.done() && !p.touch(ps)){
    p.update()
    count++
  }
    ps.push(p)
    p = new Particle(w / 2, 0)
  // }
  // for(let j = 0; j < 5; j++){
    // p.show()
    // ctx.rotate(PI / 3)
    // turnedCoords = turnThis(p)
    if(count == 0){
      cancelAnimationFrame(x)
    }
    for(let i = 0; i < ps.length; i++){
      ps[i].show()
    }
    ctx.scale(1, -1)
    for(let i = 0; i < ps.length; i++){
      ps[i].show()
    }
  // }

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  x = requestAnimationFrame(draw)
}

let x = requestAnimationFrame(draw)





