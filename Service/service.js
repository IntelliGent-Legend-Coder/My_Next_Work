 // Mobile menu toggle
 const menuToggle = document.getElementById("menu-toggle");
 const mobileMenu = document.getElementById("mobile-menu");

 menuToggle.addEventListener("click", () => {
     mobileMenu.classList.toggle("hidden");
     menuToggle.classList.toggle("open");
 });

 // Dark mode toggle
 const darkModeToggle = document.getElementById('dark-mode-toggle');
 const body = document.body;

 darkModeToggle.addEventListener('click', () => {
     body.classList.toggle('dark');
     if (body.classList.contains('dark')) {
         darkModeToggle.innerHTML = '<i class="fas fa-sun text-2xl text-yellow-400"></i>';
     } else {
         darkModeToggle.innerHTML = '<i class="fas fa-moon text-2xl text-blue-600"></i>';
     }
 });

 // Scroll event for header shadow
 window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (window.scrollY > 0) {
         header.classList.add('shadow-md');
     } else {
         header.classList.remove('shadow-md');
     }
 });

 // Service card hover effect
 const serviceCards = document.querySelectorAll('.service-card');
 serviceCards.forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.querySelector('.service-content').style.transform = 'translateY(-10px)';
     });
     card.addEventListener('mouseleave', () => {
         card.querySelector('.service-content').style.transform = 'translateY(0)';
     });
 });