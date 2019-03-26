const vsSource = `
  attribute vec4 aVertexPosition;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
`
const fsSource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`


let loadShader = (ctx, type, code) => {
  const SHADER = ctx.createShader(type)

  ctx.shaderSouce(SHADER, code)

  ctx.compileShader(SHADER)

  if(!ctx.getShaderParameter(SHADER, ctx.COMPILE_STATUS)){
    console.error('Error occured with registering shader')
    console.log(ctx.getShaderInfoLog(SHADER))
    ctx.deleteShader(SHADER)
    return
  }
  return SHADER
}


let initShaderProgram = (ctx, vertexSrc, fragSrc) => {
  const V_SHADER = loadShader(ctx, ctx.VERTEX_SHADER, vertexSrc)
  const F_SHADER = loadShader(ctx, ctx.FRAGMENT_SHADER, fragSrc)

  const SHADER_PROGRAM = ctx.createProgram()
  ctx.attachShader(SHADER_PROGRAM, V_SHADER)
  ctx.attachShader(SHADER_PROGRAM, F_SHADER)
  ctx.linkProgram(SHADER_PROGRAM)

  if(!ctx.getProgramParameter(SHADER_PROGRAM, ctx.LINK_STATUS)){
    console.error('Error occured with linking shader')
    console.log(ctx.getProgramInfoLog(SHADER_PROGRAM))
    return
  }
  return SHADER
}

const PROGRAM_INFO = {
  program: SHADER_PROGRAM,
  attribLocation: {
    vertexPosition: gl.getAttribLocation(SHADER_PROGRAM, 'aVertexPosition')
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(SHADER_PROGRAM, 'uProjectionMatrix'),
    modelViewMatrix : gl.getUniformLocation(SHADER_PROGRAM, 'uModelViewMatrix')
  },
}


const CANVAS = document.getElementById('canvas')
let ctx = CANVAS.getContext('webgl')
if(!ctx){
  console.log('webgl not supported')
}

ctx.clearColor(0.0, 0.0, 0.0, 1.0)

ctx.clear(ctx.COLOR_BUFFER_BIT)
