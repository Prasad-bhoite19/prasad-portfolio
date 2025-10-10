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

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
