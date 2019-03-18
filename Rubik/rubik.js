const COLOR_CODE = {
  R: '#CC0066',
  B: '#0066CC',
  W: '#EEEEEE',
  Y: '#F8D545',
  G: '#66CC00',
  O: '#F87C45'
}
let startState = [
  new Array(9).fill('B'),
  new Array(9).fill('R'),
  new Array(9).fill('W'),
  new Array(9).fill('Y'),
  new Array(9).fill('G'),
  new Array(9).fill('O'),
]

let cubeMapping = {
  0: {
    0: [0, 2],
    1: [1, 8],
    2: [2, 6],
    3: null,
    4: null,
    5: null
  },
  1: {
    0: [0, 1],
    1: [1, 7],
    2: null,
    3: null,
    4: null,
    5: null
  },
  2: {
    0: [0, 0],
    1: [1, 6],
    2: null,
    3: [3, 8],
    4: null,
    5: null
  },
  3: {
    0: [0, 5],
    1: null,
    2: [2, 7],
    3: null,
    4: null,
    5: null
  },
  4: {
    0: [0, 4],
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  },
  5: {
    0: [0, 3],
    1: null,
    2: null,
    3: [3, 7],
    4: null,
    5: null
  },
  6: {
    0: [0, 8],
    1: null,
    2: [2, 8],
    3: null,
    4: [4, 6],
    5: null
  },
  7: {
    0: [0, 7],
    1: null,
    2: null,
    3: null,
    4: [4, 7],
    5: null
  },
  8: {
    0: [0, 6],
    1: null,
    2: null,
    3: [3, 6],
    4: [4, 8],
    5: null
  },
  9: {
    0: null,
    1: [1, 5],
    2: [2, 3],
    3: null,
    4: null,
    5: null
  },
  10: {
    0: null,
    1: [1, 4],
    2: null,
    3: null,
    4: null,
    5: null
  },
  11: {
    0: null,
    1: [1, 3],
    2: null,
    3: [3, 5],
    4: null,
    5: null
  },
  12: {
    0: null,
    1: null,
    2: [2, 4],
    3: null,
    4: null,
    5: null
  },
  13: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  },
  14: {
    0: null,
    1: null,
    2: null,
    3: [3, 4],
    4: null,
    5: null,
  },
  15: {
    0: null,
    1: null,
    2: [2, 5],
    3: null,
    4: [4, 5],
    5: null
  },
  16: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: [4, 4],
    5: null
  },
  17: {
    0: null,
    1: null,
    2: null,
    3: [3, 3],
    4: [4, 5],
    5: null
  },
  18: {
    0: null,
    1: [1, 2],
    2: [2, 0],
    3: null,
    4: null,
    5: [5, 0]
  },
  19: {
    0: null,
    1: [1, 1],
    2: null,
    3: null,
    4: null,
    5: [5, 1]
  },
  20: {
    0: null,
    1: [1, 0],
    2: null,
    3: [3, 2],
    4: null,
    5: [5, 2]
  },
  21: {
    0: null,
    1: null,
    2: [2, 1],
    3: null,
    4: null,
    5: [5, 3]
  },
  22: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: [5, 4]
  },
  23: {
    0: null,
    1: null,
    2: null,
    3: [3, 1],
    4: null,
    5: [5, 5]
  },
  24: {
    0: null,
    1: null,
    2: [2, 2],
    3: null,
    4: [4, 0],
    5: [5, 6]
  },
  25: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: [4, 1],
    5: [5, 7]
  },
  26: {
    0: null,
    1: null,
    2: null,
    3: [3, 0],
    4: [4, 2],
    5: [5, 8]
  },
}
const CUBE = document.querySelector('.container')
let stickers = Array.from(document.querySelectorAll('.cubes')).map(cube => cube.querySelectorAll('.sticker'))
let trns = [65, 35]
// document.addEventListener('click', moveDown)
// document.addEventListener('mousemove', (ev) => {
//   // console.log(ev)
//   CUBE.style.transform = `rotateX(${ev.screenX / 5}deg) rotateY(${ev.screenY / 5}deg) rotateZ(${ev.screenX / 8}deg)`
// })

document.addEventListener('keydown', function(ev){
  console.log(ev.keyCode)
  //37 left
  //38 up
  //39 right
  //40 down
  switch(ev.keyCode){
    case 70:
      F()
      break
    case 37:
      trns[1] += 4
      break
    case 38:
      trns[0] += 4
      break
    case 39:
      trns[1] -= 4
      break
    case 40:
      trns[0] -= 4
  }
  requestAnimationFrame(rotateCube)
})

function rotateCube(){
  CUBE.style.transform = `rotateX(${trns[0]}deg) rotateZ(${trns[1]}deg)`
}

function F(){
  
}

// function moveDown(){
//   updateStickers()
// }

// let temp
function updateStickers(){
  for(let i = 0; i < 27; i++){
    for(let j = 0; j < 6; j++){
      let temp = cubeMapping[i][j]
      if(temp){
        // console.log(`%cGot this  ${COLOR_CODE[startState[temp[0]][temp[1]]]}  `, `background-color:${COLOR_CODE[startState[temp[0]][temp[1]]]}`)
        stickers[i][j].style.backgroundColor = COLOR_CODE[startState[temp[0]][temp[1]]]
      }
    }
  }
}

updateStickers()