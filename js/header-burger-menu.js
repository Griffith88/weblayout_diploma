window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        var burger = document.querySelector('.header-top__burger')
        var menu = document.querySelector('.header-top__nav')
        if (burger.contains(event.target)) {
            menu.classList.add('header-top__nav-active')
        } else {
            menu.classList.remove('header-top__nav-active')
        }
    });
})