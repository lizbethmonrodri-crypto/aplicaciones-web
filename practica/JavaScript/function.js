const btnModo = document.getElementById("btnModo");
const body = document.body;
const limon = document.getElementById("limon");
const agua = document.getElementById("agua");
const azucar = document.getElementById("azucar");
const imagenReferencia = document.getElementById("imagenReferencia");

btnModo.addEventListener("click", function () {
  body.classList.toggle("modoOscuro");
  if (body.classList.contains("modoOscuro")) {
    btnModo.textContent = "Modo Claro";
  } else {
    btnModo.textContent = "Modo Oscuro";
  }
});

limon.addEventListener("mouseenter", function () {
  imagenReferencia.src = "../img/limones.png";
  imagenReferencia.style.display = "block";
});

limon.addEventListener("mouseleave", function () {
  imagenReferencia.style.display = "none";
});

agua.addEventListener("mouseenter", function () {
  imagenReferencia.src = "../img/agua.png";
  imagenReferencia.style.display = "block";
});

agua.addEventListener("mouseleave", function () {
  imagenReferencia.style.display = "none";
});

azucar.addEventListener("mouseenter", function () {
  imagenReferencia.src = "../img/azucar.png";
  imagenReferencia.style.display = "block";
});

azucar.addEventListener("mouseleave", function () {
  imagenReferencia.style.display = "none";
});