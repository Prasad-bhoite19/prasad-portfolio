document.addEventListener('DOMContentLoaded', function () {

  // 1) Contact Form Submission with Formspree
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          document.getElementById('successMessage').style.display = 'block';
          this.reset();
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      }).catch(error => {
        alert("Oops! There was a problem submitting your form.");
      });
    });
  }

  // 2) Smooth Scroll for Top-Nav Links
  const nav = document.querySelector('.top-nav');
  if (nav) {
    document.querySelectorAll('.top-nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // 3) Hide navbar on scroll down, show on scroll up (desktop only)
  if (nav) {
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    function handleScroll() {
      if (window.innerWidth <= 768) {
        nav.style.top = '';
        return;
      }
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScroll + 5) {
        nav.style.top = '-140px';
      } else if (currentScroll < lastScroll - 5) {
        nav.style.top = '0';
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Reset nav position on resize
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 768) nav.style.top = '';
      else nav.style.top = '0';
    });
  }

});
