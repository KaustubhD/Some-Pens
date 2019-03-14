let XMIN = XMAX = YMIN = 0


class SnowFlake{
  constructor(){
    this.setup()
  }

  setup = () => {
    this.x = this.getMeARandom(XMIN, XMAX)
    this.y = this.getMeARandom(0, YMIN)
    this.vx = this.getMeARandom(-1, 1)
    this.vy = this.getMeARandom(1, 4)
    this.radius = this.getMeARandom(2, 5)
    this.alpha = this.getMeARandom(0.1, 0.8)
  }

  getMeARandom = (min, max) => {
    return min + Math.random() * (max - min)
  }

  updateFlake = () => {
    this.x += this.vx
    this.y += this.vy

    if(this.y + this.radius > window.innerHeight){
      this.setup()
    }
  }
}

class Snow{
  constructor(){
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')

    document.body.appendChild(this.canvas)

    this.resize()
    window.addEventListener('resize', this.resize)
    this.createSnowflakes()
    requestAnimationFrame(this.update)
  }

  createSnowflakes(){
    const NUM_FLAKES = this.width / 3
    this.snowFlakes = []
    for(let i = 0; i < NUM_FLAKES; i++){
      this.snowFlakes.push(new SnowFlake())
    }
  }

  resize = () => {
    this.height = window.innerHeight
    this.width = window.innerWidth

    this.canvas.height = this.height
    this.canvas.width = this.width

    XMIN = -this.width / 4
    XMAX = this.width + this.width / 4
    YMIN = -this.height
  }

  update = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    for(const flake of this.snowFlakes){
      flake.updateFlake()

      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.fillStyle = '#fff'
      this.ctx.globalAlpha = flake.alpha
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI)
      this.ctx.closePath()
      this.ctx.fill()
      this.ctx.restore()
    }
    requestAnimationFrame(this.update)
  }

}
new Snow()