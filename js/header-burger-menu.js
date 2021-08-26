window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var burger = document.querySelector('.header-top__burger')
    var menu = document.querySelector('.header-top__menu')
    if (burger.contains(event.target)) {
      menu.classList.add('header-top__menu-active')
    }
    else {
      menu.classList.remove('header-top__menu-active')
    }
  });
})
