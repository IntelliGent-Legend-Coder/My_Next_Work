document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');
    menu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});