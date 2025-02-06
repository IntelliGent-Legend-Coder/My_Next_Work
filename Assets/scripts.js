
function hidePreloader() {
    document.getElementById('preloader').classList.add('animate-fade-out');
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    }, 1000);
}

// Simulate initial loading
setTimeout(hidePreloader, 2100); // 3 seconds preloader

 // Form submission (for demonstration purposes)
 const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! In a real application, this would be sent to a server.');
    });
}
 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuToggle.classList.toggle("open");
});

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuToggle.classList.remove("open");
    });
});

// Scroll shadow effect and navbar color change
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun text-2xl text-yellow-400"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon text-2xl"></i>';
    }
});

// Fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    observer.observe(element);
});

// Horizontal scroll for services and portfolio sections
const scrollContainers = document.querySelectorAll('.overflow-x-auto');

scrollContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});

 // Active link highlighting
 const sections = document.querySelectorAll("section");
 const navLinks = document.querySelectorAll(".nav-link");

 window.addEventListener("scroll", () => {
     let current = "";

     sections.forEach((section) => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;
         if (pageYOffset >= sectionTop - sectionHeight / 3) {
             current = section.getAttribute("id");
         }
     });

     navLinks.forEach((link) => {
         link.classList.remove("active");
         if (link.getAttribute("href").slice(1) === current) {
             link.classList.add("active");
         }
     });
 });