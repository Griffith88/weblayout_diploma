window.addEventListener('DOMContentLoaded', function () {
  const btnList = document.querySelectorAll('.accordion-bottom-btn')
  const dominicoContent = document.querySelector('.dominico-content')
  const emptyContent = document.querySelector('.empty')
  btnList.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      if (btn.contains(event.target)) {
        for (alterBtn of btnList) {
          if (alterBtn == btn) {
            alterBtn.dataset.focused = 'true'
          }
          else {
            alterBtn.dataset.focused = 'false'
          }
        }
        if (btn.classList.contains('dominico-btn')) {
          dominicoContent.style.display = 'flex'
          emptyContent.style.display = 'none'
        }
        else {
          dominicoContent.style.display = 'none'
          emptyContent.style.display = 'flex'
        }
      }
    })
  })
})
