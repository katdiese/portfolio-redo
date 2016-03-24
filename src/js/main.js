// add scripts

$(document).on('ready', function() {
  $('.toolkit').typed({
    strings: ["Javascript", "Sass", "jQuery", "Node", "Html5", "Express", "Git and Github version control", "Wireframing", "CSS3", "Passport", "Knex", "SQL", "Swift", "Angular", "PostgreSQL", "Pair Programming", "Love."],
    typeSpeed: 10
  });

});

var mainNav = $('.main-nav');

$(window).scroll(function() {
  if( $(this).scrollTop() > 500 ) {
    mainNav.addClass("main-nav-scrolled");
  } else {
    mainNav.removeClass("main-nav-scrolled");
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});