// add scripts

$(document).on('ready', function() {
  $('.toolkit').typed({
    strings: ["Javascript", "Sass", "jQuery", "Node", "Html5", "Express", "Git and Github version control", "Wireframing", "CSS3", "Passport", "Knex", "SQL", "Swift", "Angular", "PostgreSQL", "Pair Programming", "Love."],
    typeSpeed: 10
  })
});

var mainNav = $('.main-nav');

$(window).scroll(function() {
  if( $(this).scrollTop() > 550 ) {
    mainNav.addClass("main-nav-scrolled");
  } else {
    mainNav.removeClass("main-nav-scrolled");
  }
})
