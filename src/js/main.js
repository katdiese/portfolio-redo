// add scripts

$(document).on('ready', function() {
  $('.toolkit').typed({
    strings: ["Javascript", "Sass", "jQuery", "Node", "Html5", "Express", "Git and Github version control", "Wireframing", "CSS3", "Passport", "Knex", "SQL", "Swift", "Angular", "PostgreSQL", "Pair Programming", "Love."],
    typeSpeed: 10
  });
  checkSize();
});

var mainNav = $('.main-nav');

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

function checkSize() {
  if($('header').css("height") === "1200px") {
    $(window).scroll(function() {
      if( $(this).scrollTop() > 1200 ) {
        mainNav.addClass("main-nav-scrolled");
      } else {
        mainNav.removeClass("main-nav-scrolled");
      }
    });
  } else {
    $(window).scroll(function() {
      if( $(this).scrollTop() > 500 ) {
        mainNav.addClass("main-nav-scrolled");
      } else {
        mainNav.removeClass("main-nav-scrolled");
      }
    });
  }
}