const btnMusica = document.getElementById("btnMusica");
const miMusica = document.getElementById("miMusica");

btnMusica.addEventListener("click", () => {
  if (miMusica.paused) {
    miMusica.play();
    btnMusica.textContent = "⏸ Pausar Música";
  } else {
    miMusica.pause();
    btnMusica.textContent = "▶ Reproducir Música";
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
