$(document).ready(() => {

  let result = $('.result'), expression = $('.expression'), buttons = $('.button'), LAST_VALID_KEY = true

  result.text(0)
  expression.text('')

  buttons.on('mousedown', function(){
    $(this).css({'box-shadow': '0 2px 3px -1px rgba(0,0,0,0.7)'})
  })

  buttons.on('mouseup', function(){
    $(this).css({'box-shadow': '0 5px 5px -1px rgba(0,0,0,0.3)'})
  })

  $(buttons[0]).on('click', () => { //AC
    result.html(0)
    expression.html('')
  })
  $(buttons[1]).on('click', () => { //DEL
    let cur = expression.html()
    result.html(0)
    expression.html(cur.substring(0, cur.length - 1))
  })
  $(buttons[2]).on('click', () => { //div
    if(LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('/')
      // expression.text(expression.text() + '/')
    }
    LAST_VALID_KEY = false
  })
  $(buttons[3]).on('click', () => { //mul
    if(LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('*')
      // expression.text(expression.text() + '*')
    }
    LAST_VALID_KEY = false
  })
  $(buttons[4]).on('click', () => { //7
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(7)
    }
    else{
      result.html(result.html() + '7')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[5]).on('click', () => { //8
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(8)
    }
    else{
      result.html(result.html() + '8')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[6]).on('click', () => { //9
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(9)
    }
    else{
      result.html(result.html() + '9')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[7]).on('click', () => { //sub
    if(LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('&sub;')
    }
    LAST_VALID_KEY = false
  })
  $(buttons[8]).on('click', () => { //4
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(4)
    }
    else{
      result.html(result.html() + '4')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[9]).on('click', () => { //5
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(5)
    }
    else{
      result.html(result.html() + '5')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[10]).on('click', () => { //6
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(6)
    }
    else{
      result.html(result.html() + '6')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[11]).on('click', () => { //add
    if(LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('&plus;')
    }
    LAST_VALID_KEY = false
  })
  $(buttons[12]).on('click', () => { //1
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(1)
    }
    else{
      result.html(result.html() + '1')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[13]).on('click', () => { //2
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(2)
    }
    else{
      result.html(result.html() + '2')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[14]).on('click', () => { //3
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html(3)
    }
    else{
      result.html(result.html() + '3')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[15]).on('click', () => { //0
    if(LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('0')
    }
    LAST_VALID_KEY = false
  })
  $(buttons[16]).on('click', () => { //.
    if(!LAST_VALID_KEY){
      expression.html(expression.text() + result.html())
      result.html('.')
    }
    else{
      result.html(result.html() + '.')
    }
    LAST_VALID_KEY = true
  })
  $(buttons[17]).on('click', () => {
    if(LAST_VALID_KEY){
      compute()
    }
    LAST_VALID_KEY = false
  })

  function compute(){
    expression.html(expression.html() + result.html())
    result.html(eval(expression.html()))
  }

})