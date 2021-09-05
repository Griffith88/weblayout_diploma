window.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const btn = this.querySelector('.galery-right__btn')
    const popup = this.querySelector('.popup-card')
    if (btn.contains(event.target)) {
      popup.classList.add('is-opened-popup')
    }
    else {
      popup.classList.remove('is-opened-popup')
    }
  });
});
