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




const CANVAS = document.getElementById('canvas')
let ctx = CANVAS.getContext('webgl')
if(!ctx){
  console.log('webgl not supported')
}

ctx.clearColor(0.0, 0.0, 0.0, 1.0)
ctx.clear(ctx.COLOR_BUFFER_BIT)
let mat4 = glMatrix.mat4


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
    return null
  }
  return SHADER_PROGRAM
}




let loadShader = (ctx, type, code) => {
  const SHADER = ctx.createShader(type)

  ctx.shaderSource(SHADER, code)

  ctx.compileShader(SHADER)

  if(!ctx.getShaderParameter(SHADER, ctx.COMPILE_STATUS)){
    console.error('Error occured with registering shader')
    console.log(ctx.getShaderInfoLog(SHADER))
    ctx.deleteShader(SHADER)
    return
  }
  return SHADER
}




const SHADER_PROGRAM = initShaderProgram(ctx, vsSource, fsSource);


const PROGRAM_INFO = {
  program: SHADER_PROGRAM,
  attribLocation: {
    vertexPosition: ctx.getAttribLocation(SHADER_PROGRAM, 'aVertexPosition')
  },
  uniformLocations: {
    projectionMatrix: ctx.getUniformLocation(SHADER_PROGRAM, 'uProjectionMatrix'),
    modelViewMatrix : ctx.getUniformLocation(SHADER_PROGRAM, 'uModelViewMatrix')
  },
}


function initBuffer(ctx){
  const PositionBuffer = ctx.createBuffer()
  ctx.bindBuffer(ctx.ARRAY_BUFFER, PositionBuffer)
  const points = [
    -1.0,  1.0,
     1.0,  1.0,
    -1.0, -1.0,
     1.0, -1.0,
  ]
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array(points), ctx.STATIC_DRAW)
  return {position: PositionBuffer}
}







function drawScene(){
  ctx.clearColor(0.0, 0.0, 0.0, 0.0)
  ctx.clearDepth(1.0)
  ctx.enable(ctx.DEPTH_TEST)
  ctx.depthFunc(ctx.LEQUAL)

  ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT)

  const FIELD_OF_VIEW = 45 * (Math.PI / 180) //45deg to rad
  const ASPECT_RATIO = CANVAS.width / CANVAS.HEIGHT
  const NEAR_Z = 0.1
  const FAR_Z = 100.0
  const PROJ_MATRIX = mat4.create()

  mat4.perspective(PROJ_MATRIX, FIELD_OF_VIEW, ASPECT_RATIO, NEAR_Z, FAR_Z)

  const modelViewMatrix = mat4.create()

  mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -6.0])


  {
    const numComponents = 2;  // pull out 2 values per iteration
    const type = ctx.FLOAT;    // the data in the buffer is 32bit floats
    const normalize = false;  // don't normalize
    const stride = 0;         // how many bytes to get from one set of values to the next
                              // 0 = use type and numComponents above
    const offset = 0;         // how many bytes inside the buffer to start from
    ctx.bindBuffer(ctx.ARRAY_BUFFER, buffers.position);
    ctx.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    ctx.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  // Tell Webctx to use our program when drawing

  ctx.useProgram(programInfo.program);

  // Set the shader uniforms

  ctx.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  ctx.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    ctx.drawArrays(ctx.TRIANGLE_STRIP, offset, vertexCount);
  }




}