document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Aplicar tema guardado en localStorage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "🌙";
    } else {
      themeToggle.textContent = "🌞";
    }

    // Cambiar tema al hacer clic
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "🌙" : "🌞";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Inicializar Swiper
    const swiper = new Swiper('.swiper', {
      loop: true,  // Habilitar loop para que sea un carrusel infinito
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Scroll suave para anclas internas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
});
