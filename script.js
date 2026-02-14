// ===== Typing Effect =====
const texts = [
  "Computer Science Student",
  "AI & Blockchain Enthusiast",
  "Full-Stack Developer",
  "Hackathon Builder"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", type);

// ===== Smooth Scroll =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== Magnetic Button =====
const button = document.querySelector(".hero button");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "translate(0, 0)";
});

// ===== Scroll Reveal =====
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fade => observer.observe(fade));