// ✅ Contact form submission (Show success message)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
      successMessage.style.display = 'block'; // show success message
    }
    this.reset(); // optional: clear form
  });
}

// ✅ Smooth scroll for top-nav links (Desktop Only)
document.querySelectorAll('.top-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ Hide navbar on scroll down, show on scroll up (Desktop Only)
let lastScroll = 0;
const nav = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  // Only run this effect if navbar is visible (desktop)
  if (window.innerWidth > 768 && nav) {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // Scrolling down
      nav.style.top = '-100px';
    } else {
      // Scrolling up
      nav.style.top = '0';
    }

    lastScroll = currentScroll;
  }
});
