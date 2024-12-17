//TP#Final — Video Juego Web [Etapa 2](recuperatorio)
//ALUMNO: Flores Gabriel. LEGAJO: 95517/5
//DOCENTE: Bedoian David (COMISIÓN 3)
//intento 5
//link al video: https://youtu.be/JQCBCKSdWAw
let objJuego;
let sonidoMusica;
let sonidoTela;
let sonidoMuerte;
function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(10);
}
function preload() {
  sonidoMusica = loadSound("data/sonidos/musica.mp3");
  sonidoTela = loadSound("data/sonidos/telarana.mp3");
  sonidoMuerte = loadSound("data/sonidos/noo.mp3");
}

function draw() {

  objJuego.actualizar();
}
function mousePressed() {
  objJuego.colisionBotones();
}
