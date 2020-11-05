$(document).ready(function() {
  $('.nav__toggler').click(function() {
    $('.nav__toggler, .nav__list').toggleClass('active');
    $('body').toggleClass('locked');
  }) 
})