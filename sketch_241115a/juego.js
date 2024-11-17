class Juego {
  constructor(cantidadEnemigos) {
    this.estado = "inicio";
    this.cantidadEnemigos= cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.imgFondo=loadImage("data/img/fondo.png");
    this.imgInicio=loadImage("data/img/inicio.jpg");
    this.imgGanaste=loadImage("data/img/ganaste.jpg");
    this.imgPerdiste=loadImage("data/img/perdiste.jpg");
    this.imgCreditos=loadImage("data/img/creditos.jpg");
    this.puntos=0;
    this.botonInicio = new Boton("INICIAR", width/2, height*0.75, 100, 40);
  }
  mousePressed() {
    //metodo del clik del mouse dentro de la clase Juego
    if ( this.estado==="inicio") {
      if (this.botonInicio.colisionMouse() ) {
        //flujo de estado de panta de inicio a empezar a jugar
        //PONER EN CERO TODOS LOS VALORES INICIALES DEL JUEGO
        //vidas en 3... tiempo en 100... enemigos fuera de la pantalla... etc
        this.estado = "jugando";
      }
    }
  }
  actualizar() {
    if ( this.estado==="inicio") {
      this.pantallaInicio();
    } else if ( this.estado=="jugando") {

      //dibujo mi fondo y personajes:
      this.fondo();
      this.personaje.dibujar();

      for (let i=0; i<this.cantidadEnemigos; i++) {
        this.enemigos[i].dibujar();
      }
      this.controlarDisparosAEnemigos();



      //muestro los puntos:
      fill(0);
      textSize(40);
      text(this.puntos, 10, 50);
    }
  }


  dibujar() {
  }
  crearEnemigos() {
    this.enemigos = [];
    for (let i=0; i<this.cantidadEnemigos; i++) {
      this.enemigos[i]= new Enemigo(i*63+30, 50);
    }
  }
  crearPersonaje() {
    this.personaje = new Personaje(width/2, height-70);
  }
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode)
  }
  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i=0; i<this.cantidadEnemigos; i++) {
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }
  pantallaInicio() {
    push();
    image(this.imgInicio, 0, 0, width, height);
        this.botonInicio.actualizar();

    pop();

    fill(247,255,28);
    push();
    textAlign(CENTER,CENTER);
    textSize(25);
    text("\nSPIDERMAN Reglas: debes matar a todos los \nsimbiontes antes de que te maten a ti",width/2,height/2);
    pop();
  }
  pantallaGanaste(){
  push();
  image();
  pop();
  }
  pantallaPerdiste(){
  push();
  image();
  pop();
  }
  pantallaCreditos(){
  
  }
  fondo() {
    push();
    image(this.imgFondo, 320, 240, width, height);
    pop();
  }
  
}

/*** CLASE BOTON ****/

class Boton {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    //propiedades:
    //tamaño:
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(0, 20, 110);
    this.colorOver = color(255, 0, 0);
    this.txt = txt_ ;
  }
  //metodos:
  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
  
}

class texto {
  constructor() {
  }
}
