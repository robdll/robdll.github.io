function smoothScroll(id) {
  $('html body').animate({
    scrollTop: $(id).offset().top
  }, 1000);
}

var nextSection = '#me';
function navigatorSwitcher() {
  nextSection = nextSection === '#me' ? '#portfolioanchor'  :
                nextSection === '#portfolioanchor' ? '#footer' : '#me';
  smoothScroll(nextSection);
}

function removeClassLook(item){
  item.classList.remove("look-here");
}

