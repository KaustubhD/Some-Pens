$(window).on('load', function(){
  $('.waiting').removeClass('waiting').addClass('is-done');
  // console.log('Hey');
});

$(document).ready(function(){

  var container = $('.container');
  var lis = container.children('ul').children('li');
  var nav_lis = makeNav(container);
  // console.log(nav_lis);

  nav_lis.on('click', function(event){
    event.preventDefault();
    // console.log($(this).index());
    if($(this).hasClass('nav-selected') != true){
      updateSlides($(this).index(), nav_lis, lis);
    }
  });





});

function updateSlides(index, nav_slides, slides){
  console.log(index);
  nav_slides.removeClass('nav-selected').eq(index).addClass('nav-selected');
  slides.eq(index).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');
}


function makeNav(container){
  var navContain = $('<ul class="nav-container"></ol>');
  var lis = container.children('ul').find('li');
  var nav_single;
  lis.each(function(index){
    nav_single = (index == 0) ? $('<li class="nav-selected"></li>') : $('<li></li>');
    var a = $('<a href="#"></a>').appendTo(nav_single);
    var a_text = (index < 10) ? '0' + (index + 1) : (index + 1);
    a.text(a_text);
    nav_single.appendTo(navContain);
  });
  // console.log(navContain);
  navContain.appendTo(container);

  return navContain.children('li');
}
