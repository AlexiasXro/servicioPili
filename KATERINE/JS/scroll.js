window.addEventListener('scroll', function() {
    var nav = document.getElementById('navegacion');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      nav.classList.add('sombra');
    } else {
      nav.classList.remove('sombra');
    }
  });
  