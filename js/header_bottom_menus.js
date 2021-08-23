window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.realism')
    var btn_icon = document.querySelector('.realism-icon')
    var menu = document.querySelector('.realism-list')
    if (btn.contains(event.target)) {
      menu.classList.toggle('menus-item__list-active')
      btn_icon.classList.toggle('menus-item-icon-active')
    }
    else {
      menu.classList.remove('menus-item__list-active')
      btn_icon.classList.remove('menus-item-icon-active')
    }
  });
})

window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.impressionism')
    var btn_icon = document.querySelector('.impressionism-icon')
    var menu = document.querySelector('.impressionism-list')
    if (btn.contains(event.target)) {
      menu.classList.toggle('menus-item__list-active')
      btn_icon.classList.toggle('menus-item-icon-active')
    }
    else {
      menu.classList.remove('menus-item__list-active')
      btn_icon.classList.remove('menus-item-icon-active')
    }
  });
})

window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.postimmpressioinism')
    var btn_icon = document.querySelector('.postimmpressioinism-icon')
    var menu = document.querySelector('.postimmpressioinism-list')
    if (btn.contains(event.target)) {
      menu.classList.toggle('menus-item__list-active')
      btn_icon.classList.toggle('menus-item-icon-active')
    }
    else {
      menu.classList.remove('menus-item__list-active')
      btn_icon.classList.remove('menus-item-icon-active')
    }
  });
})

window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.avangard')
    var btn_icon = document.querySelector('.avangard-icon')
    var menu = document.querySelector('.avangard-list')
    if (btn.contains(event.target)) {
      menu.classList.toggle('menus-item__list-active')
      btn_icon.classList.toggle('menus-item-icon-active')
    }
    else {
      menu.classList.remove('menus-item__list-active')
      btn_icon.classList.remove('menus-item-icon-active')
    }
  });
})

window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    var btn = document.querySelector('.futurism')
    var btn_icon = document.querySelector('.futurism-icon')
    var menu = document.querySelector('.futurism-list')
    if (btn.contains(event.target)) {
      menu.classList.toggle('menus-item__list-active')
      btn_icon.classList.toggle('menus-item-icon-active')
    }
    else {
      menu.classList.remove('menus-item__list-active')
      btn_icon.classList.remove('menus-item-icon-active')
    }
  });
})
