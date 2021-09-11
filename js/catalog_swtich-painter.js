window.addEventListener('DOMContentLoaded', function () {
  const btnList = document.querySelectorAll('.accordion-bottom-btn')
  const cardList = document.querySelectorAll('.catolog__left-content')
  const dominicoContent = document.querySelector('.dominico-content')
  const emptyContent = document.querySelector('.empty')
  btnList.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      if (btn.contains(event.target)) {
        if (btn.classList.contains('dominico-btn')) {
          console.log('Кнопку нажали с доминико')
          dominicoContent.style.display = 'flex'
          emptyContent.style.display = 'none'
        }
        else {
          console.log('Нажали другую кнопку')
          dominicoContent.style.display = 'none'
          emptyContent.style.display = 'flex'
        }
      }
    })
  })
})
