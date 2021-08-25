window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.header-top__search-icon')
    var search = document.querySelector('.header-top__search-input')
    var logo = document.querySelector('.header-top__logo-lnk')
    var burger = document.querySelector('.header-top__burger')
    var search_form = document.querySelector('.header-top__search')
    var search_cancel = document.querySelector('.header-top__search-cancel')
    var header_top = document.querySelector('.header-top')
    console.log(search)
    if (btn.contains(event.target) || search.contains(event.target))  {
      search.classList.add('search-input-active')
      logo.classList.add('header-top__logo-hidden')
      burger.classList.add('header-top__burger-hidden')
      search_form.classList.add('header-top__search-full')
      search_cancel.classList.add('header-top__search-canceled')
      header_top.classList.add('header-top__searching')
    }
    else if (search_cancel.contains(event.target)) {
      search.value = ""
    }
    else {
      search.classList.remove('search-input-active')
      logo.classList.remove('header-top__logo-hidden')
      burger.classList.remove('header-top__burger-hidden')
      search_form.classList.remove('header-top__search-full')
      search_cancel.classList.remove('header-top__search-canceled')
      header_top.classList.remove('header-top__searching')
    }
  });
})
