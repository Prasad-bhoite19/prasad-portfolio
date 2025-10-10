// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission
  document.getElementById('successMessage').style.display = 'block'; // show success message
});

// Smooth scroll for navbar links (optional, if not already in HTML)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
