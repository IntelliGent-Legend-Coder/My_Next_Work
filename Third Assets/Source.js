  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;
const icon = darkModeToggle.querySelector('i');

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'true' || 
    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'true');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'false');
    }
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple authorization check
    const authCode = document.getElementById('authCode').value;
    if (authCode !== 'DENTAL2023') {
        alert('Invalid authorization code. Please try again.');
        return;
    }

    // Gather form data
    const formData = new FormData(this);
    const appointmentDetails = Object.fromEntries(formData.entries());

    // Simulate sending email by displaying the details in a modal
    const emailContent = `
        <p><strong>Patient Name:</strong> ${appointmentDetails.name}</p>
        <p><strong>Email:</strong> ${appointmentDetails.email}</p>
        <p><strong>Appointment Date:</strong> ${appointmentDetails.date}</p>
        <p><strong>Appointment Time:</strong> ${appointmentDetails.time}</p>
        <p><strong>Location:</strong> ${appointmentDetails.location}</p>
        <p><strong>Reason for Appointment:</strong> ${appointmentDetails.reason}</p>
    `;

    document.getElementById('emailContent').innerHTML = emailContent;
    document.getElementById('emailModal').classList.remove('hidden');
    document.getElementById('emailModal').classList.add('flex');
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('emailModal').classList.add('hidden');
    document.getElementById('emailModal').classList.remove('flex');
    document.getElementById('appointmentForm').reset();
});