const abrirBtn = document.getElementById("abrirBtn");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");

abrirBtn.addEventListener("click", () => {

  inicio.style.opacity = "0";
  inicio.style.transform = "translateY(-30px)";

  setTimeout(() => {
    inicio.style.display = "none";
    regalo.classList.remove("oculto");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 900);
});
