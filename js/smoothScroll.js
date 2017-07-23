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

function removeClassLook(item){
  item.classList.remove("look-here");
}

