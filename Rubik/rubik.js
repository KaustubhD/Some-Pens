const COLOR_CODE = {
  R: '#CC0066',
  B: '#0066CC',
  W: '#FFFFFF',
  Y: '#F8D545',
  G: '#66CC00',
  O: '#F87C45'
}
let startState = [
  new Array(6).fill('B'),
  new Array(6).fill('R'),
  new Array(6).fill('W'),
  new Array(6).fill('Y'),
  new Array(6).fill('G'),
  new Array(6).fill('O'),
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
    0: null,
    1: [1, 5],
    2: [2, 3],
    3: null,
    4: null,
    5: null
  },
  8: {
    0: null,
    1: [1, 4],
    2: null,
    3: null,
    4: null,
    5: null
  },
  9: {
    0: null,
    1: [1, 3],
    2: null,
    3: [3, 5],
    4: null,
    5: null
  },
  10: {
    0: 
  }
}

document.addEventListener('click', moveDown)


function moveDown(){

}

updateStickers(){

}