window.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.events-btn')
  const swiper = document.querySelector('.events-swiper')
  const card_list = document.querySelectorAll('.events-swiper__slides')
  btn.addEventListener('click', function (event) {
    if (btn.contains(event.target)) {
      card_list.forEach(function (card) {
        card.classList.add('slides-active')
        btn.style.display = 'none'
        swiper.style.marginBottom = 0
        if (window.screen.width >= 1024) {
          document.querySelectorAll('.events-swiper__slides:nth-child(-n+3)').forEach(function(elem) {
          elem.style.marginBottom = '50px'
        })}
        else {
          document.querySelectorAll('.events-swiper__slides:nth-child(-n+2)').forEach(function(elem) {
          elem.style.marginBottom = '34px'
          document.querySelector('.events-swiper__slides:last-child').style.marginTop = '34px'
        })}
      })
    }
  })
})
