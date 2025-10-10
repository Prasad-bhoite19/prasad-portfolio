// ===== Typing Effect for Tagline =====
const text = "Cloud & DevOps Engineer | AWS | Linux | Docker | Python";
let index = 0;
const speed = 100; // typing speed in ms

function typeWriter() {
  if (index < text.length) {
    document.getElementById("tagline").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
};
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // scrolling down
    navbar.style.top = "-80px"; // hide
  } else {
    // scrolling up
    navbar.style.top = "0"; // show
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});


