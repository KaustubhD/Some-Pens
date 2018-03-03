$('document').ready(function(){
  $('.container').addClass('is-visible')

  let Oboard = [0,1,2,3,4,5,6,7,8], you, me

  $('.symbols-wrap button').on('click', function(event){
    $('.wrapper').addClass('ready')
    you = event.target.value;
    me = you == 'X' ? 'O' : 'X'
    YourTurn()
  })
  function YourTurn(){
    console.log('in YourTurn')
    $('.play-area div.empty').off().one('click', function(event){
      console.log(event.target)
      event.target.innerHTML = you
      Oboard[$('.play-area div').index($(event.target))] = you
      $(event.target).removeClass('empty')
      $('.play-area div.empty').off('click')
      MyTurn()
    })
  }
  function MyTurn(){
    $('.play-area div.empty').off('click')
    console.log('in MyTurn')
    $('.dividers-wrap, .play-area').addClass('blur-this')
    $('.message-wrap>h3').text('Wait for your turn')
    $('.message-wrap').addClass('display-message')
    setTimeout(function(){
      let bestSpot = minimax(Oboard, me)
      if(bestSpot.index != undefined){
        console.log(bestSpot)
        Oboard[bestSpot.index] = me
        $('.play-area div').eq(bestSpot.index).html(me).removeClass('empty')
        console.log(Oboard)
        $('.dividers-wrap, .play-area').removeClass('blur-this')
        $('.message-wrap>h3').text(' ')
        $('.message-wrap').removeClass('display-message')
        YourTurn()
      }
      if(bestSpot.score == 0 && bestSpot.index == undefined){
        draw()
      }
      else if(bestSpot.score == 10 || bestSpot.score == -10){
        if(bestSpot.score == 10){
          win('me')
        }
        else{
          win('you')
        }
      }

    }, 2000)
  }

  function minimax(newBoard, player){
    let availableBlocks = emptyIndices(newBoard);

    if(isWinning(newBoard, you)){
      return {score: -10};
    }
    else if(isWinning(newBoard, me)){
      return {score: 10};
    }
    else if(availableBlocks.length == 0){
      return {score: 0};
    }

    let moves = [];

    for (let i = 0; i < availableBlocks.length; i++){
      let move = {};
      move.index = newBoard[availableBlocks[i]];

      // set the empty block to the current player
      newBoard[availableBlocks[i]] = player;

      // Start the recursive calls, starting from the opponent
      if (player == me){
        let result = minimax(newBoard, you);
        move.score = result.score;
      }
      else{
        let result = minimax(newBoard, me);
        move.score = result.score;
      }

      //reset the spot to its index number
      newBoard[availableBlocks[i]] = move.index;

      // push the move to its array
      moves.push(move);
    }

    // In case of computer's turn, choose the highest score
    let bestMove;
    if(player === me){
      let bestScore = -10000;
      for(let i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{

      // In case of player's turn, choose the lowest score
      let bestScore = 10000;
      for(let i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  // return the best move from the current function to its caller (the recursive caller or the original caller)
    return moves[bestMove];
  }

  // For the available blocks
  function emptyIndices(board){
    return  board.filter(s => s != "O" && s != "X");
  }

  // All winning combinations
  function winning(board, player){
  if (
          (board[0] == player && board[1] == player && board[2] == player) ||
          (board[3] == player && board[4] == player && board[5] == player) ||
          (board[6] == player && board[7] == player && board[8] == player) ||
          (board[0] == player && board[3] == player && board[6] == player) ||
          (board[1] == player && board[4] == player && board[7] == player) ||
          (board[2] == player && board[5] == player && board[8] == player) ||
          (board[0] == player && board[4] == player && board[8] == player) ||
          (board[2] == player && board[4] == player && board[6] == player)
          ) {
          return true;
      } else {
          return false;
      }
  }
  function draw(){
    let text = 'Nobody won this time'
    $('.dividers-wrap, .play-area').addClass('blur-this')
    $('.message-wrap>h3').text(text)
    $('.message-wrap').addClass('display-message')
    $('.message-wrap').append('<button class="restart-but">Restart ?</button>')
    $('button.restart-but').on('click', restart)
  }

  function win(who){
    let text = ''
    if(who == 'me'){
      text = 'I just won'
    }
    else{
      text = 'Well, you won'
    }
    $('.dividers-wrap, .play-area').addClass('blur-this')
    $('.message-wrap>h3').text(text)
    $('.message-wrap').addClass('display-message')
    addRestart()
  }
  function addRestart(){
    $('.message-wrap').append('<button class="restart-but">Restart ?</button>')
    $('button.restart-but').on('click', restart)
  }
  function restart(){
    Oboard = [0,1,2,3,4,5,6,7,8]
    player = ''
    me = ''
    $('.play-area div').addClass('empty').text('')
    $('.message-wrap').removeClass('display-message')
    $('.restart-but').remove()
    $('.dividers-wrap, .play-area').removeClass('blur-this')
    $('.wrapper').removeClass('ready')
  }

})
