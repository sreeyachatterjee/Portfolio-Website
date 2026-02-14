const text = ["CS Student", "AI Enthusiast", "Full-Stack Developer"];
let index = 0;
let char = 0;

function typeEffect() {
  if (char < text[index].length) {
    document.querySelector(".typing").innerHTML += text[index][char];
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (char > 0) {
    document.querySelector(".typing").innerHTML =
      text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}