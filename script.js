let estado = "posterior";

const img = document.getElementById("imagen");
const btnAdelante = document.getElementById("btnAdelante");
const btnAtras = document.getElementById("btnAtras");
const musica = document.getElementById("musica");
const musica2 = document.getElementById("musica2");
const black = document.getElementById("black");


// IR AL FRENTE
btnAdelante.onclick = () => {
  estado = "frontal";
  img.src = "imagenes/Sobre_Frontal1.jpg";

  btnAdelante.classList.add("hidden");
  btnAtras.classList.remove("hidden");

  img.classList.add("clickable");
};


// VOLVER ATRÁS (SOBRE)
btnAtras.onclick = () => {
  estado = "posterior";
  img.src = "imagenes/Sobre_Posterior1.jpg";

  btnAtras.classList.add("hidden");
  btnAdelante.classList.remove("hidden");

  img.classList.remove("clickable");
};


// CLICK GENERAL
img.onclick = async () => {

  // ===== SOBRE =====
  if (estado === "frontal") {

    btnAtras.classList.add("hidden");
    btnAdelante.classList.add("hidden");

    img.classList.remove("clickable");

    musica.play();

    img.style.transform = "scale(1.05)";
    img.src = "imagenes/Sobre_Frontal2.jpg";

    await esperar(2500);

    img.style.transform = "scale(1.1)";
    img.src = "imagenes/Sobre_Frontal3.png";

    await esperar(2500);

    black.style.transition = "none";
    black.classList.add("active");

    await esperar(800);

    iniciarCarta();

    black.style.transition = "opacity 2s ease";
    black.classList.remove("active");
  }


  // ===== CARTA3 → CARTA4 =====
  if (estado === "carta3") {

    black.style.transition = "opacity 1.5s ease";
    black.classList.add("active");

    musica.pause();
    musica.currentTime = 0;

    await esperar(2000);

    estado = "carta4";
    img.src = "imagenes/Carta4.png";

    btnAtras.classList.add("hidden"); // 🔥 ya no hay regreso
    btnAdelante.classList.add("hidden");

    musica2.play();

    black.classList.remove("active");
  }
};


// ===== CARTAS =====
function iniciarCarta() {

  estado = "carta1";

  img.style.transform = "scale(1)";
  img.src = "imagenes/Carta1.png";

  btnAdelante.classList.remove("hidden");
  btnAtras.classList.add("hidden");

  // ADELANTE
  btnAdelante.onclick = () => {

    estado = "carta3";
    img.src = "imagenes/Carta3.png";

    btnAdelante.classList.add("hidden");
    btnAtras.classList.remove("hidden"); // 🔥 AHORA SÍ aparece

    img.classList.add("clickable");
  };

  // ATRÁS (DESDE CARTA3)
  btnAtras.onclick = () => {

    estado = "carta1";
    img.src = "imagenes/Carta1.png";

    btnAtras.classList.add("hidden");
    btnAdelante.classList.remove("hidden");

    img.classList.remove("clickable");
  };
}


// ESPERA
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}