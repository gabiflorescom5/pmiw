//TP#Final — Video Juego Web [Etapa 2]
//ALUMNO: Flores Gabriel. LEGAJO: 95517/5
//DOCENTE: Bedoian David (COMISIÓN 3)
//intento 2
let objJuego;
let sonidoMusica;

function setup() {
  createCanvas(640,480);
  objJuego = new Juego(10);
    sonidoMusica = document.getElementById("sonido-musica");

}


function draw() {
  
 background(0);
  objJuego.actualizar();
  botonSonido( "play sound", 40, height-30, 70, 30);
  botonSonido( "stop sound", width-40, height-30, 70, 30);
  
}
function mousePressed(){
objJuego.mousePressed();
//SONIDO
  if ( colisionBoton(40, height-30, 70, 30) ) { //boton de play
    sonidoMusica.currentTime=0;
    sonidoMusica.play();
  }
  if ( colisionBoton(width-40, height-30, 70, 30) ) { //boton de stop
    sonidoMusica.pause();
  }
  
}

function keyPressed(){
objJuego.teclaPresionada(keyCode);
}
function botonSonido(str_,x_,y_,ancho_,alto_){
  push();
  rectMode(CENTER);
  if (  colisionBoton( x_, y_, ancho_, alto_ ) ) {
    fill(198, 2, 4);
  } else {
    fill(0);
  }
  rect(x_, y_, ancho_, alto_);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(12);
  text(str_, x_, y_);

pop();

}
function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}
