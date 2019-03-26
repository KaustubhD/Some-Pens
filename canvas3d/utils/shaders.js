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