// ✅ Contact form submission (Show success message)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent default form submission
  document.getElementById('successMessage').style.display = 'block'; // show success message
});

// ✅ Smooth scroll for top-nav links
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

// ✅ Hide navbar on scroll down, show on scroll up
let lastScroll = 0;
const nav = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scrolling down
    nav.style.top = '-100px';
  } else {
    // Scrolling up
    nav.style.top = '0';
  }

  lastScroll = currentScroll;
});
