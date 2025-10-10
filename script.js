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

