// СКРИПТ ДЛЯ ХЕДЕРА
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');
const overlay = document.getElementById('overlay');
const callbackButton = document.querySelector('.header__mobile-contacts-button');
const callModal = document.getElementById('callModal');

navbarToggler.addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
});

navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
});

callbackButton.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
});

callModal.addEventListener('hidden.bs.modal', function () {
    document.body.style.overflow = 'visible';
    overlay.style.display = 'none';
});