$(document).ready(function(){

  // console.log('Start here');
  var hfills = $('.h-bin-fills span'),
    mfills = $('.m-bin-fills span'),
    sfills = $('.s-bin-fills span');
  var dech = $('span.h-dec'), decm = $('span.m-dec'), decs = $('span.s-dec');
    

  // console.log(hfills[0]);

  var x = setInterval(function(e){
    var d = new Date(), s = makeFull('s', d.getSeconds().toString(2)).split(''),
    m = makeFull('m', d.getMinutes().toString(2)).split(''), h = makeFull('h', d.getHours().toString(2)).split('');
    h.map((e, ind) =>{
      if(e == 1){
        check('h', ind, true);
      }
      if(e == 0){
        check('h', ind, false);
      }
    });
    m.map((e, ind) =>{
      if(e == 1){
        check('m', ind, true);
      }
      if(e == 0){
        check('m', ind, false);
      }
    });
    s.map((e, ind) =>{
      if(e == 1){
        check('s', ind, true);
      }
      if(e == 0){
        check('s', ind, false);
      }
    });
    console.log()
    dech.text(d.getHours());
    decm.text(d.getMinutes());
    decs.text(d.getSeconds());
    date.text(d.getDate());
    m_y.text(checkMonth(d.getMonth()) + " " + d.getFullYear());
    day.text(checkDay(d.getDay()));
    // console.log(d.getHours().toString(2) + '\t' + d.getMinutes().toString(2) + '\t' + d.getSeconds().toString(2));
  }, 1000);

  function check(letter, ind, bool){
    if(bool){
      $('.' + letter + '-bin-fills span:nth-child(' + (ind + 1) + ')').addClass('show');
    }
    else{
      $('.' + letter + '-bin-fills span:nth-child(' + (ind + 1) + ')').removeClass('show');
    }
  }
  function checkDay(day){
    switch(day){
      case 0:
        return 'sunday';
        break;
      case 1:
        return 'monday';
        break;
      case 2:
        return 'tuesday';
        break;
      case 3:
        return 'wednesday';
        break;
      case 4:
        return 'thursday';
        break;
      case 5:
        return 'friday';
        break;
      case 6:
        return 'saturday';
        break;
    }
  }
  function checkMonth(mon){
    switch(mon){
      case 0:
        return 'january';
        break;
      case 1:
        return 'february';
        break;
      case 2:
        return 'march';
        break;
      case 3:
        return 'april';
        break;
      case 4:
        return 'may';
        break;
      case 5:
        return 'june';
        break;
      case 6:
        return 'july';
        break;
      case 7:
        return 'august';
        break;
      case 8:
        return 'september';
        break;
      case 9:
        return 'october';
        break;
      case 10:
        return 'november';
        break;
      case 11:
        return 'december';
        break;
        
    }
  }

  // function makeit(x){
  //   if(x == 0){
  //     console.log(x);
  //     return makeit(x + 1);
  //   }
  //   else{
  //     console.log(x);
  //     return x;
  //   }
  // }
  function makeFull(letter, str){
    if(letter == 'h'){
      if(str.length < 5){
        // console.log('Caught here');
        str = '0' + str;
        return makeFull(letter, str);
      }
      else{
        return str;
      }
    }
    else if(letter == 'm' || letter == 's'){
      if(str.length < 6){
        // console.log(str);
        str = '0' + str;
        return makeFull(letter, str);
      }
      else{
        // console.log('Here is ' + str);
        return str;
      }
    }
  }

  // var x = makeFull('s', '10');
  // console.log(x);
  // var count = 1;
  // var x = window.setInterval(function(e){
  //   // var count = 1;
  //   console.log(count++);
  //   if(count == 11){
  //     clearInterval(x);
  //   }
  // }, 1000);
  // console.log(ps);

  var dech = $('span.h-dec'), decm = $('span.m-dec'), decs = $('span.s-dec'), date = $('span.date'), m_y = $('span.month-year'), day = $('span.day');


});