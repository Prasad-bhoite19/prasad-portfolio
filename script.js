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

// ===== Skill Bar Animation on Scroll =====
const skillBars = document.querySelectorAll(".skill-bar span");

window.addEventListener("scroll", () => {
  let triggerHeight = window.innerHeight / 1.2;

  skillBars.forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerHeight) {
      bar.style.width = bar.getAttribute("data-skill") + "%";
    }
  });
});

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // scrolling up
    navbar.style.top = "0";
  } else {
    // scrolling down
    navbar.style.top = "-60px";
  }
  prevScrollPos = currentScrollPos;
});

