$(document).ready(function(){

let sequence = 'q', user_seq = '', BASE_COLOR = ['#5D194F', '#3827AD', '#195024', '#4D4D3E'],
HOVER_COLOR = ['#992982', '#5c4ad6', '#2b8a3e', '#777760'], 
kecode = {'q': 81, 'w': 87, 'a': 65, 's': 83}, count = 0, level = 1, speed = 600, clickCount = 0, score = 0, strict = 0, 
power = 0, audios = $('audio')

// $(window).off().on('keydown keyup mouseenter mouseleave', function(ev){
//   // console.log(ev.key)
//   callForKeyEvs(ev.type, ev.keyCode)
// })

$('#power').change(function(ev){
  if(this.checked){
    power = 1
    // console.log(ev)
    begin()
  }
  else{
    power = 0
    reset()
  }
})

$('#mode').change(function(ev){
  if(this.checked){
    // console.log(ev)
    strict = 1
  }
  else{
    strict = 0
  }
})




function begin(){
  count++
  level++
  sequence += generateSequence()
  console.log(sequence)
  projectSequence()
}

function projectSequence(){
  user_seq = ''
  if(level == 9){
    speed = 500
  }
  else if(level == 13){
    speed = 300
  }
  projection(0)
}

function projection(i){
  console.log('projecion called')
  console.log(`In condition ${i} and ${sequence.length}   ${sequence[i]}`)
  if(power){
    if(i < sequence.length){
      
      let code
      switch(sequence[i]){
        case 'q':
          code = 81
          break
        case 'w':
          code = 87
          break
        case 'a':
          code = 65
          break
        case 's':
          code = 83
          break
      }
      setTimeout(function(){
        $('svg path').off().on('mouseenter mouseleave', function(ev){
          // console.log(ev.key)
          callForKeyEvs(ev.type, ev.keyCode)
        })      
        let e = $.Event('mouseenter', {keyCode: code})
        $('svg path').trigger(e)
        setTimeout(function(){
          projection(i + 1)
        }, speed)
      }, speed * 2)
    }
    else{
      clickCount = 0
      $('svg path').off().on('click', function(ev){
        console.log('Clicked')
        onClick(ev)
      })
      $(window).off().on('keydown', function(ev){
        callForKeyEvs(ev.type, ev.keyCode)
        console.log('pressed')
        onClick(ev)
      })
      // $(window).off().on('keyup', function(ev){
        // callForKeyEvs(ev.type, ev.keyCode)
        // console.log('pressed')
        // onClick(ev)
      // })
      recordSequence()
    }
  }
}

function check(){
  console.log(`${sequence} and ${user_seq}`)
  if(sequence == user_seq && power){
    score++
    displayScore()
    // begin()
  }
  else if(strict){
    reset()
    displayScore()
    // begin()
  }
  else{
    // begin()
  }
  begin()
}

function displayScore(){
  $('.inner-circle .screen span').text(score)
}

function reset(){
  //Initialise again
  count = 0
  clickCount = 0
  score = 0
  sequence = ''
  user_seq = ''
  speed = 800
  level = 1
  $('svg path').off()
  $(window).off()
}

function callForKeyEvs(type, keyCode){
  let ind
  switch(keyCode){
    case 81:
      ind = 0
      break
    case 87:
      ind = 1
      break
    case 65:
      ind = 2
      break
    case 83:
      ind = 3
      break
    default:
      return
      break
  }
  if(ind >= 0 && ind <= 3){
    $('audio')[ind].load()
    $('audio')[ind].play()
  }
  console.log($('audio'))
  changeColor($('svg path').eq(ind), type == 'keydown' || type == 'mouseenter' ? HOVER_COLOR[ind] : BASE_COLOR[ind])
  setTimeout(function(){
    changeColor($('svg path').eq(ind), type == 'keydown' || type == 'mouseenter' ? BASE_COLOR[ind] : HOVER_COLOR[ind])
  }, speed)
}

function recordSequence(){
  let cl = setTimeout(function(){
    if(clickCount == 0 && power){
      $('svg path').off()
      $(window).off()
      projectSequence()
    }
    else{

    }
  }, 5000)
}


function onClick(ev){
  clickCount++
  let ind = $('svg path').index(ev.target)  
  console.log($('audio'))
  if(ev.type == 'click'){
    $('audio')[ind].load()
    $('audio')[ind].play()
    user_seq += Object.keys(kecode)[ind]
  }
  if(ev.type == 'keydown'){
    user_seq += ev.key
  }
  if(clickCount == sequence.length){
    check()
  }
  
}


function changeColor(el, color){
  // console.log($(el))
  $(el).css({'fill': color, 'stroke': color})
}

function generateSequence(){
  let random = Math.round(Math.random() * 3)
  // console.log(random)
  switch(random){
    case 0:
      return 'q'
      break
    case 1:
      return 'w'
      break
    case 2:
      return 'a'
      break
    case 3:
      return 's'
      break
  }
}




})