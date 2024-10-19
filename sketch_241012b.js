// TP#Final — Aventura Gráfica Interactiva Web [1]
// Profesor: David Bedoian.  (Comisión 3)
// Alumno: Flores Gabriel
// link al video explicativo: https://youtu.be/0Ngf9HHfGXs
let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imgs   = [];
let sonidoMusica;

function preload(){
   

  for (let i = 0; i < 13; i++) {
    //carga de imagenes
    imgs[i] = loadImage("data/imagenes/img_0"+nf(i)+".jpg");
   }
}

function setup() {
  createCanvas(800, 400);
  todosLosTextos();
  sonidoMusica = document.getElementById("sonido-musica");
}


function draw() {
  if (estado === 0) {
    pantallaInicio();   
   //pregunto por todas las pantallas con 2 botones:
  } else if ( estado===4 || estado===7) {
    pantallaHistoriaDosBotones(textos[estado], botonA[estado], botonB[estado] );    
    //pregunto por todas las pantallas con 1 boton:
  } else if ( estado===1 || estado===2 || estado===3|| estado===5 || estado===6|| estado===8|| estado===9|| estado===10|| estado===11|| estado===12 ) {
    pantallaHistoriaUnBoton(textos[estado], botonB[estado]);
    
  }
}

function mousePressed() {
  if (estado === 0) {
    if ( colisionBoton(width/2, height*0.75, 200, 40) ) { //Botón EMPEZAR
      //flujo de estado:
      estado=2;             
    } else if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { // Botón CREDITOS
      //flujo de estado:
      estado=1;
    }
  } else if ( estado === 1 || estado === 9 || estado === 10|| estado === 12) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS Y FINALES
      //flujo de estado:
      estado=0;
    }
  } else if ( estado===2 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //A pantalla 3
      //flujo de estado:
      estado=3;    
    } 
  } else if ( estado===3 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //a pantalla 4
      //flujo de estado:
      estado=4;
    }
  } else if ( estado===4 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //OPCION A (pantalla 5)
      //flujo de estado:
      estado=5;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { // OPCION B (pantalla 6)
      //flujo de estado:
      estado=6;
    }
  } else if ( estado===6 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //A pantalla 7
      //flujo de estado:
      estado=7;
    }
  }else if ( estado===7 ) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //OPCION A(a pantalla 9)
      //flujo de estado:
      estado=9;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { // OPCION B (a pantalla 10)
      //flujo de estado:
      estado=10;
    }
  } else if ( estado===5 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //A pantalla 8
      //flujo de estado:
      estado=8;
    } 
  } else if ( estado===8 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //A pantalla 11
      //flujo de estado:
      estado=11;
    } 
  } else if ( estado===11 ) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //A pantalla 12
      //flujo de estado:
      estado=12;
    } 
  }
  console.log("estado: "+estado);
  //SONIDO
  if ( colisionBoton(50, 50, 50, 50) ) { //boton de play
    sonidoMusica.currentTime=0;
    sonidoMusica.play();
  }
  if ( colisionBoton(width-50, 50, 50, 50) ) { //boton de stop
    sonidoMusica.pause();
  }
  
}
