$(document).ready(function(){

  let decBut = $('.decrease-but'), incBut = $('.increase-but'), 
      closeBut = $('.close-but'), sessionCircle = $('.session-wrap circle'), 
      breakCircle = $('.break-wrap circle'), 
      sessionDisplay = $('.session-set-display'), breakDisplay = $('.break-set-display'), 
      realDisplay = $('.real-timer-display'), realCircle = $('.real-timer circle'), 
      sessTime = [25, 0], breakTime = [5, 0], smallDivision = 252 / 60

  adjust(sessionCircle, sessTime)
  updateDisplay(sessionDisplay, sessTime)
  adjust(breakCircle, breakTime)
  updateDisplay(breakDisplay, breakTime)

  $(decBut[0]).on('click', function(event){
    if(sessTime[0] > 0){
      sessTime[0]--
    }
    updateDisplay(sessionDisplay, sessTime)
    adjust(sessionCircle, sessTime)
  })
  $(decBut[1]).on('click', function(event){
    if(breakTime[0] > 0){
      breakTime[0]--
    }
    updateDisplay(breakDisplay, breakTime)
    adjust(breakCircle, breakTime)
  })
  $(incBut[0]).on('click', function(event){
    if(sessTime[0] < 60){
      sessTime[0]++
    }
    updateDisplay(sessionDisplay, sessTime)
    adjust(sessionCircle, sessTime)
  })
  $(incBut[1]).on('click', function(event){
    if(breakTime[0] < 60){
      breakTime[0]++
    }
    updateDisplay(breakDisplay, breakTime)
    adjust(breakCircle, breakTime)
  })

  
  $('.begin-timer').on('click', function(){
    console.log(sessTime)
    $('.timers-wrap').addClass('inactive')
    $('.overlay-wrap').addClass('active')
    console.log(realCircle)
    updateDisplay2(realDisplay, sessTime, 'Session')
    adjust2(realCircle, sessTime)
    callSession(sessTime.slice(0))
  })
  $(closeBut).on('click', function(){
    $('.timers-wrap').removeClass('inactive')
    $('.overlay-wrap').removeClass('active')
    clearInterval(inter)
  })

  let inter
  function callSession(sessTime){
    let time = changeTime(sessTime, -1)
    let which = 'Session'
    let i = 0
    inter = setInterval(function(){
      if(time[0] == 0 && time[1] == 0){
        $('audio')[0].play()
        time = i % 2 == 0 ? breakTime : sessTime
        which = i % 2 == 0 ? 'Break' : 'Session'
        i += 1
      }
      else{
        Session(time, which)
        time = changeTime(time, -1)
      }
    }, 1000)
  }

  function Session(time, which){
    updateDisplay2(realDisplay, time, which)
    adjust2(realCircle, time)
  }

  function updateDisplay2(el, time, which){
    $(el).html('')
    $(el).html(`<font color="#fff">${which}</font><br />${time[0]} : ${time[1]}`)
  }
  function adjust2(el, time){
    console.log($(el)[1])
    $(el[0]).attr('stroke-dashoffset', `${283 - (283 / sessTime[0]) * time[0]}`)
    $(el[1]).attr('stroke-dashoffset', `${252 - (252 / 60) * time[1]}`)
  }
  
  function changeTime(timeArray, change){
    if(timeArray[1] > 0){
      timeArray[1] -= 1
    }
    else if(timeArray[1] == 0){
      if(timeArray[0] > 0){
        timeArray[1] = 59
        timeArray[0] -= 1  
      }
      else{
        timeArray = [0, 0]
      }
    }
    return timeArray
  }
  
  function updateDisplay(el, time){
    $(el).html(time[0])
  }
  function adjust(el, time, bool){
    $(el).attr('stroke-dashoffset', `${252 - smallDivision * time[0]}`)
    
  }

})