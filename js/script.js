$(document).ready(function() {
  // burger start

  $('.nav__toggler').click(function() {
    $('.nav__toggler, .nav__list').toggleClass('active');
    $('body').toggleClass('locked');
  });

//burger end

//accordion start

$('.accordion__item').click(function() {
  if($(this).hasClass('active')){
    $(this).removeClass('active')
  } else {
    $('.accordion__item').removeClass('active');
    $(this).toggleClass('active');
  }  
})

//accordion end 


// bg-parallax start

$('body').on('mousemove', event => {
  
  const x = event.pageX / $(window).width();
  const y = event.pageY / $(window).height();

  $('.intro__bg').css(
    'transform',
    'translate(-' +x * 50 + 'px, -' +y * 50 + 'px)'
  );
})


// bg-parallax end
  
})