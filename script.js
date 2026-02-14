const texts = [
  "AI & Blockchain Enthusiast",
  "Full-Stack Developer",
  "Cloud & IoT Engineer"
];

let index = 0;
let char = 0;
const typingElement = document.querySelector('.typing');

function type() {
  if (char < texts[index].length) {
    typingElement.textContent += texts[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (char > 0) {
    typingElement.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));