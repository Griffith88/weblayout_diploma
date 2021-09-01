window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        btn_form = document.querySelector('.header-top__search-form')
        btn_submit = document.querySelector('.header-top__search-submit')
        icon = document.querySelector('.header-top__search-btn')
        submit_block = document.querySelector('.submit-block')
        search = document.querySelector('.header-top__search-input')
        search_cancel = document.querySelector('.header-top__search-cancel')
        logo = document.querySelector('.header-top__logo-lnk')
        burger = document.querySelector('.header-top__burger')
        if (search_cancel.contains(event.target)) {
            search.value = ""
        } else if (icon.contains(event.target) || search.contains(event.target)) {
            icon.classList.add('is-hidden')
            search.classList.add('is-visible')
            btn_submit.classList.add('is-visible')
            submit_block.classList.add('.is-visible-flex')
            search_cancel.classList.add('is-visible__mobile')
            logo.classList.add('is-hidden__mobile')
            burger.classList.add('is-hidden__mobile')
            btn_form.classList.add('is-active__mobile-vertical')
            btn_form.classList.add('is-active__mobile')
            btn_form.classList.add('is-visilbe-flex')
        } else {
            icon.classList.remove('is-hidden')
            search.classList.remove('is-visible')
            btn_submit.classList.remove('is-visible')
            search_cancel.classList.remove('is-visible__mobile')
            logo.classList.remove('is-hidden__mobile')
            burger.classList.remove('is-hidden__mobile')
            btn_form.classList.remove('is-active__mobile-vertical')
            btn_form.classList.remove('is-active__mobile')
            btn_form.classList.remove('is-visilbe-flex')
            submit_block.classList.remove('.is-visible-flex')
        }
    });
})