let estado = "posterior";

const img = document.getElementById("imagen");
const btnAdelante = document.getElementById("btnAdelante");
const btnAtras = document.getElementById("btnAtras");
const musica = document.getElementById("musica");
const black = document.getElementById("black");


// IR AL FRENTE
btnAdelante.onclick = () => {
  estado = "frontal";
  img.src = "imagenes/Sobre_Frontal1.jpg";

  btnAdelante.classList.add("hidden");
  btnAtras.classList.remove("hidden");

  img.classList.add("clickable");
};

// VOLVER ATRÁS
btnAtras.onclick = () => {
  estado = "posterior";
  img.src = "imagenes/Sobre_Posterior1.jpg";

  btnAtras.classList.add("hidden");
  btnAdelante.classList.remove("hidden");

  img.classList.remove("clickable");
};


// CLICK SOBRE EL SOBRE
img.onclick = async () => {

  if (estado === "frontal") {

    // ocultar botones
    btnAtras.classList.add("hidden");
    btnAdelante.classList.add("hidden");

    img.classList.remove("clickable");

    // música
    musica.play();

    // animación
    img.style.transform = "scale(1.05)";
    img.src = "imagenes/Sobre_Frontal2.jpg";

    await esperar(2500);

    img.style.transform = "scale(1.1)";
    img.src = "imagenes/Sobre_Frontal3.png";

    await esperar(2500);

    // negro inmediato
    black.style.transition = "none";
    black.classList.add("active");

    await esperar(800);

    iniciarCarta();

    // fade suave
    black.style.transition = "opacity 2s ease";
    black.classList.remove("active");
  }

  // CLICK EN CARTA REVERSO
  if (estado === "carta2") {
    const mensaje = encodeURIComponent("Confirmo mi asistencia a la cita, prevista para el día 5 de junio, para pintar el cuadro de los gatos, muchas gracias por la invitación.");
    window.open("https://wa.me/59178877874?text=" + mensaje, "_blank");
  }
};


// CARTA
function iniciarCarta() {

  estado = "carta1";

  img.style.transform = "scale(1)";
  img.src = "imagenes/Carta1.png";

  btnAdelante.classList.remove("hidden");
  btnAtras.classList.add("hidden");

  btnAdelante.onclick = () => {
    estado = "carta2";
    img.src = "imagenes/Carta2.png";

    btnAdelante.classList.add("hidden");
    btnAtras.classList.remove("hidden");
  };

  btnAtras.onclick = () => {
    estado = "carta1";
    img.src = "imagenes/Carta1.png";

    btnAtras.classList.add("hidden");
    btnAdelante.classList.remove("hidden");
  };
}


// ESPERA
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}