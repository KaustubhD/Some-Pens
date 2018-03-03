$(document).ready(function(){
  var buttonstart = $('section center>button:contains(\'Animate\')');
  var buttonstop = $('section center>button:contains(\'Stop\')');
  var navs = $('.links a');
  var sec = $('section');
  console.log(navs);
  console.log(sec);
  var toAnimate = $('section>.wrapper');

  // navs.on('click', function(r){
  //   r.preventDefault();
  //   console.log('Hey');
  // });
  buttonstart.on('click', function(q){
    var ind = buttonstart.index(q.target);
    console.log(ind);
    toAnimate.eq(ind).children().addClass('animate');
    toAnimate.eq(ind).children().on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            toAnimate.eq(ind).children().removeClass('animate');
        });
  });


  buttonstop.on('click', function(q){
    q.preventDefault();
    var ind = buttonstop.index(q.target);
    console.log(ind);
    toAnimate.eq(ind).children().removeClass('animate');
  });

  // navs.on('click', function(r){
  //   r.preventDefault();
  //   console.log('Hey');
  // });
  var body = $('body');

  navs.on('click', function(e){
    if(navs.index(e.target) > 0){
      var btop = $('body').scrollTop();
      var ind = navs.index(e.target);
      var stop = sec.eq(ind-1).offset().top;
      console.log(btop + ' ' + stop);
      e.preventDefault();
      if(Math.abs(btop - stop) > 5){
        body.animate({
            scrollTop: sec.eq(ind-1).offset().top
        }, 500);
      }
      else{
        console.log('Already Here');
      }
    }
    else{
      body.animate({
          scrollTop: 0
      }, 500);
    }
  });



});
