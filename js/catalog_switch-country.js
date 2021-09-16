window.addEventListener('DOMContentLoaded', function () {
  const btnList = document.querySelectorAll('.catalog__tab-btn');
  const contentBottomItaly = document.querySelector('.botom-content__italy');
  const contentBottomEmpty = document.querySelector('.botom-content__empty');
  // const accordion = document.getElementById('accordion')
  // const accordionEmpty = document.getElementById('accordion-empty')
  btnList.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      if (btn.contains(event.target)) {
        for (alterBtn of btnList) {
          if (alterBtn == btn) {
            alterBtn.dataset.checked = 'true'
          }
          else {
            alterBtn.dataset.checked = 'false'
          }
        }
        if (btn.classList.contains('italy')) {
          contentBottomEmpty.style.display = 'none'
          contentBottomItaly.style.display = 'flex'
        }
        else {
          contentBottomEmpty.style.display = 'flex'
          contentBottomItaly.style.display = 'none'
          emptyLeft = document.querySelector('.botom-content__empty .empty')
          emptyLeft.style.display = 'flex'
        }
      }
    });
  });
});
