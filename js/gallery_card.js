window.addEventListener('DOMContentLoaded', function () {
  const btnList = document.querySelectorAll('.gallery-right__btn')
  const card_window = document.querySelector('.popup-window')
  const body = document.querySelector('body')
  const btn_close = document.querySelector('.popup-card__close-btn')
  btnList.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      if (btn.contains(event.target)) {
        body.style.overflow = 'hidden'
        card_window.classList.add('is-opened-popup')
      }
    })
  })
  btn_close.addEventListener('click', function (event) {
    if (btn_close.contains(event.target)) {
      body.style.overflow = 'auto'
      card_window.classList.remove('is-opened-popup')
    }
  })
  card_window.addEventListener('click', function (event) {
    if (card_window.contains(event.target)) {
      body.style.overflow = 'auto'
      card_window.classList.remove('is-opened-popup')
    }
  })
})
