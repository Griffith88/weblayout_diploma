window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.galery-right__btn').forEach(function(btn) {
    btn.addEventListener('click', function (event) {
      if (btn.contains(event.target)) {
        document.querySelector('.popup-card').classList.add('is-opened-popup')
      }
    })
  })
  const btn_close = document.querySelector('.popup-card__close-btn')
  btn_close.addEventListener('click', function(event) {
    if (btn_close.contains(event.target)) {
      document.querySelector('.popup-card').classList.remove('is-opened-popup')
    }
  })
})
