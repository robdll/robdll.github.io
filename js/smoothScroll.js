function smoothScroll(id) {
  $('html body').animate({
    scrollTop: $(id).offset().top
  }, 1000);
}

var nextSection = '';
function navigatorSwitcher() {
  nextSection = nextSection === '#portfolioanchor' ? '#me' : '#portfolioanchor';
  smoothScroll(nextSection);
}

