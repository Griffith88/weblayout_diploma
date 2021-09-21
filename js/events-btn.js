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
        document.querySelector('.events-swiper__slides:nth-child(3n)').style.marginBottom = '50px'
      })
    }
  })
})
