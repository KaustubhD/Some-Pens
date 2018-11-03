let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')
let width = 600
let height = 600
canvas.width = width
canvas.height = height




const MIN = -1.5
const MAX = 1.5


let imageData = ctx.getImageData(0, 0, width, height)
let data = imageData.data

const MAX_ITER = 50
canvas.style.backgroundColor = '#018786'
for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let a = changeRange(x, 0, width, MIN, MAX)
      let b = changeRange(y, 0, height, MIN, MAX)

      let c = [a, b]

      let n = 0
      while(n < MAX_ITER){
        a2 = a * a
        b2 = b * b
        ab = 2 * a * b
        a = (a2 - b2) + c[0]
        b = ab + c[1]
        if((a2 * a2) + (b2 * b2) > 16) break
        n++

      }
      let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
      // let bright = changeRange(n, 0, MAX_ITER, 0, 255)
      let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)
      let quot = n / MAX_ITER

      let pixelIndex = ( x + (y * width) ) * 4
      if(n == MAX_ITER){
        data[pixelIndex] = 0
        data[pixelIndex + 1] = 0
        data[pixelIndex + 2] = 0
      }
      else if(quot > 0.5){
        data[pixelIndex] = bright
        data[pixelIndex + 1] = 255
        data[pixelIndex + 2] = bright
      }
      else{
        data[pixelIndex] = 0
        data[pixelIndex + 1] = bright
        data[pixelIndex + 2] = 0
      }
      data[pixelIndex + 3] = 255
    }
  }
  ctx.putImageData(imageData, 0, 0)


// const MIN = -1.5
// const MAX = 1.5


// let imageData = ctx.getImageData(0, 0, width, height)
// let data = imageData.data

// const MAX_ITER = 50
// canvas.style.backgroundColor = '#018786'
// for(let x = 0; x < width; x++){
//     for(let y = 0; y < height; y++){
//       let a = changeRange(x, 0, width, MIN, MAX)
//       let b = changeRange(y, 0, height, MIN, MAX)

//       let c = [a, b]

//       let n = 0
//       while(n < MAX_ITER){
//         a2 = (a * a) - (b * b)
//         b2 = 2 * a * b
//         a = a2 + c[0]
//         b = b2 + c[1]
//         if(a + b > 2) break
//         n++
//       }
//       let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
//       // let bright = changeRange(n, 0, MAX_ITER, 0, 255)
//       let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)
//       let quot = n / MAX_ITER

//       let pixelIndex = ( x + (y * width) ) * 4
//       if(n == MAX_ITER){
//         data[pixelIndex] = 0
//         data[pixelIndex + 1] = 0
//         data[pixelIndex + 2] = 0
//       }
//       else if(quot > 0.5){
//         data[pixelIndex] = bright
//         data[pixelIndex + 1] = 255
//         data[pixelIndex + 2] = bright
//       }
//       else{
//         data[pixelIndex] = 0
//         data[pixelIndex + 1] = bright
//         data[pixelIndex + 2] = 0
//       }
//       data[pixelIndex + 3] = 255
//     }
//   }
//   ctx.putImageData(imageData, 0, 0)






// const MIN = 0.37
// const MAX = 0.4

// // canvas.style.backgroundColor = '#505'

// let imageData = ctx.getImageData(0, 0, width, height)
// let data = imageData.data

// const MAX_ITER = 50

// for(let x = 0; x < width; x++){
//     for(let y = 0; y < height; y++){
//       let a = changeRange(x, 0, width, MIN, MAX)
//       let b = changeRange(y, 0, height, MIN, MAX)

//       let c = [a, b]

//       let n = 0
//       while(n < MAX_ITER){
//         a2 = (a * a) - (b * b)
//         b2 = 2 * a * b
//         a = a2 + c[0]
//         b = b2 + c[1]
//         if(a + b > 2) break
//         n++
//       }
//       let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
//       // let bright = changeRange(n, 0, MAX_ITER, 0, 255)
//       let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)
//       let quot = n / MAX_ITER

//       let pixelIndex = ( x + (y * width) ) * 4
//       if(n == MAX_ITER){
//         data[pixelIndex] = 0
//         data[pixelIndex + 1] = 0
//         data[pixelIndex + 2] = 0
//         data[pixelIndex + 3] = 255
//       }
//       else if(quot > 0.5){
//         data[pixelIndex] = bright
//         data[pixelIndex + 1] = 255
//         data[pixelIndex + 2] = bright
//         data[pixelIndex + 3] = 255
//       }
//       else{
//         data[pixelIndex] = 0
//         data[pixelIndex + 1] = bright
//         data[pixelIndex + 2] = 0
//         data[pixelIndex + 3] = 255
//       }
//     }
//   }
//   ctx.putImageData(imageData, 0, 0)







  // for(let x = 0; x < width; x++){
  //   for(let y = 0; y < height; y++){
  //     let a = changeRange(x, 0, width, -1.5, 1.5)
  //     let b = changeRange(y, 0, height, -1.5, 1.5)

  //     let c = [a, b]

  //     let n = 0
  //     while(n < MAX_ITER){
  //       a2 = (a * a) - (b * b)
  //       b2 = 2 * a * b
  //       a = a2 + c[0]
  //       b = b2 + c[1]
  //       if(a + b > 2) break
  //       n++
  //     }
  //     // let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
  //     let bright = changeRange(n, 0, MAX_ITER, 0, 255)
  //     let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)

  //     let pixelIndex = ( x + (y * width) ) * 4
  //     data[pixelIndex] = changeRange(normalise, 0, 1, 0, 255)
  //     data[pixelIndex + 1] = bright
  //     data[pixelIndex + 2] = changeRange(bright / 2, 0, MAX_ITER / 2, 0, 255)
  //     data[pixelIndex + 3] = 255
  //   }
  // }
  // ctx.putImageData(imageData, 0, 0)















// let sl1 = document.createElement('input')
// sl1.id = 'minSlider'
// sl1.type = 'range'
// sl1.min = '-2.5'
// sl1.max = '0'
// sl1.step = '0.01'

// let sl2 = document.createElement('input')
// sl2.id = 'maxSlider'
// sl2.type = 'range'
// sl2.min = '0'
// sl2.max = '2.5'
// sl2.step = '0.01'
// document.body.appendChild(sl1)
// document.body.appendChild(sl2)

// function draw(){
//   console.log('DOing')
//   let slides = [document.getElementById('minSlider'), document.getElementById('maxSlider')]
//   for(let x = 0; x < width; x++){
//     for(let y = 0; y < height; y++){
//       let a = changeRange(x, 0, width, parseInt(slides[0].value), parseInt(slides[1].value))
//       let b = changeRange(y, 0, height, parseInt(slides[0].value), parseInt(slides[1].value))

//       let c = [a, b]

//       let n = 0
//       while(n < MAX_ITER){
//         a2 = (a * a) - (b * b)
//         b2 = 2 * a * b
//         a = a2 + c[0]
//         b = b2 + c[1]
//         if(a + b > 16) break
//         n++
//       }
//       let bright = changeRange(n, 0, MAX_ITER, 0, 1)
//       bright = changeRange(Math.sqrt(bright), 0, 1, 0, 255)
//       if(n == MAX_ITER) bright = 0

//       let pixelIndex = ( x + (y * width) ) * 4
//       data[pixelIndex] = bright
//       data[pixelIndex + 1] = bright
//       data[pixelIndex + 2] = bright
//       data[pixelIndex + 3] = 255
//     }
//   }
//   ctx.putImageData(imageData, 0, 0)












  // for(let x = 0; x < width; x++){
  //   for(let y = 0; y < height; y++){
  //     let a = changeRange(x, 0, width, -2, 2)
  //     let b = changeRange(y, 0, height, -2, 2)

  //     let c = [a, b]

  //     let n = 0
  //     while(n < MAX_ITER){
  //       a2 = (a * a) - (b * b)
  //       b2 = 2 * a * b
  //       a = a2 + c[0]
  //       b = b2 + c[1]
  //       if(a + b > 2) break
  //       n++
  //     }
  //     let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)

  //     let pixelIndex = ( x + (y * width) ) * 4
  //     data[pixelIndex] = bright
  //     data[pixelIndex + 1] = bright
  //     data[pixelIndex + 2] = bright
  //     data[pixelIndex + 3] = 255
  //   }
  // }
  // ctx.putImageData(imageData, 0, 0)










  // for(let x = 0; x < width; x++){
  //   for(let y = 0; y < height; y++){
  //     // console.log('Here')
  //     let a = changeRange(x, 0, width, -2, 2)
  //     let b = changeRange(y, 0, height, -2, 2)

  //     let c = [a, b]
  //     // console.log(a + "  " + b)

  //     let n = 0
  //     while(n < MAX_ITER){
  //       a2 = (a * a) - (b * b)
  //       b2 = 2 * a * b
  //       a = a2 + c[0]
  //       b = b2 + c[1]
  //       if(a + b > 2) break
  //       n++
  //     }
  //     let bright = changeRange(n, 0, MAX_ITER, 0, 255)

  //     let pixelIndex = ( x + (y * width) ) * 4
  //     data[pixelIndex] = bright
  //     data[pixelIndex + 1] = bright
  //     data[pixelIndex + 2] = bright
  //     data[pixelIndex + 3] = 255
  //   }
  // }
  // ctx.putImageData(imageData, 0, 0)
// }

// let w = setInterval(function(){
//   requestAnimationFrame(draw)
// }, 100)


function changeRange(val, inputLow, inputHigh, outputLow, outputHigh){
  return ((val - inputLow) / (inputHigh - inputLow)) * (outputHigh - outputLow) + outputLow
}