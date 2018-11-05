let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')
let width = 500
let height = 500
canvas.width = width
canvas.height = height




const MIN = -1.5
const MAX = 1.5

// let c = [-0.70176, -0.3842]
// let c = [0.45, 0.1428]
// let c = [-0.4, 0.6]
// let c = [0.285, 0]
// let c = [0.285, 0.01]
// let c = [-0.835, -0.2321]
// let c = [-0.8, 0.156]
// let c = [-0.7269, 0.1889]
let c = [0, -0.8]
let col, quot


let imageData = ctx.getImageData(0, 0, width, height)
let data = imageData.data

const MAX_ITER = 50
// canvas.style.backgroundColor = '#018786'
for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let a = changeRange(x, 0, width, MIN, MAX)
      let b = changeRange(y, 0, height, MIN, MAX)

      let n = 0
      while(n < MAX_ITER){
        a2 = a * a
        b2 = b * b

        if((a2 * a2) + (b2 * b2) > 4) break

        ab = 2 * a * b
        a = (a2 - b2) + c[0]
        b = ab + c[1]
        n++

      }
      let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
      // let bright = changeRange(n, 0, MAX_ITER, 0, 255)
      let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)
      // let quot = n == MAX_ITER ? 0 : Math.sqrt(n / MAX_ITER)
      // let quot = n / MAX_ITER

      let pixelIndex = ( x + (y * width) ) * 4
      
      // data = blackGreen(data, pixelIndex, bright, n)
      data = hslColor(data, pixelIndex, n)

    }
  }
  ctx.putImageData(imageData, 0, 0)











// let angle = 0
// function draw(){
// c[0] = Math.sin(angle * 2)
// c[1] = Math.sin(angle)
// for(let x = 0; x < width; x++){
//     for(let y = 0; y < height; y++){
//       let a = changeRange(x, 0, width, MIN, MAX)
//       let b = changeRange(y, 0, height, MIN, MAX)

//       let n = 0
//       while(n < MAX_ITER){
//         a2 = a * a
//         b2 = b * b

//         if((a2 * a2) + (b2 * b2) > 4) break

//         ab = 2 * a * b
//         a = (a2 - b2) + c[0]
//         b = ab + c[1]
//         n++

//       }
//       let bright = n == MAX_ITER ? 0 : changeRange(n, 0, MAX_ITER, 0, 255)
//       // let bright = changeRange(n, 0, MAX_ITER, 0, 255)
//       let normalise = changeRange(bright, 0, MAX_ITER, 0, 1)
//       // let quot = n == MAX_ITER ? 0 : Math.sqrt(n / MAX_ITER)
//       // let quot = n / MAX_ITER

//       let pixelIndex = ( x + (y * width) ) * 4
//       // let col = hslToRgb(quot, 255, 255)
      
//       data = blackGreen(data, pixelIndex, bright, n)
//       // data = hslColor(data, pixelIndex, n)

//     }
//   }
//   ctx.putImageData(imageData, 0, 0)
// angle += 0.035
// }
// let w = setInterval(function(){
//   requestAnimationFrame(draw)
// }, 80)





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
//         a2 = a * a
//         b2 = b * b
//         ab = 2 * a * b
//         a = (a2 - b2) + c[0]
//         b = ab + c[1]
//         if((a2 * a2) + (b2 * b2) > 16) break
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



function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hslColor(data, pixelIndex, n){
  quot = Math.sqrt(n / MAX_ITER)
  col = hslToRgb(quot, 100, 100)
  data[pixelIndex] = col[0]
  data[pixelIndex + 1] = col[1]
  data[pixelIndex + 2] = col[2]
  data[pixelIndex + 3] = 255
  return data
}

function blackGreen(data, pixelIndex, bright, n){
  quot = n / MAX_ITER
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
  return data
}


function changeRange(val, inputLow, inputHigh, outputLow, outputHigh){
  return ((val - inputLow) / (inputHigh - inputLow)) * (outputHigh - outputLow) + outputLow
}