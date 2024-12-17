class Juego {
  constructor(cantidadEnemigos) {
    this.contador=0;
    this.estado = "inicio";
    this.cantidadEnemigos= cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.imgFondo=loadImage("data/img/fondo.png");
    this.imgInicio=loadImage("data/img/inicio.jpg");
    this.imgGanaste=loadImage("data/img/ganaste.jpg");
    this.imgPerdiste=loadImage("data/img/perdiste.jpg");
    this.imgCreditos=loadImage("data/img/creditos.jpg");
    this.imgReglas=loadImage("data/img/reglas.jpg");
    this.botonJugar = new Boton("JUGAR", width/2, height*0.70, 100, 40);
    this.botonCreditos = new Boton("CREDITOS", width/2+110, height*0.70, 100, 40);
    this.botonReglas = new Boton("REGLAS", width/2-110, height*0.70, 100, 40);
    this.botonInicio = new Boton("INICIO", width/2, height*0.90, 100, 40);
    this.botonSonidoSi= new Boton("play sound", 40, height-30, 70, 30);
    this.botonSonidoNo= new Boton("stop sound", width-40, height-30, 70, 30);
  }

  colisionBotones() {
    //metodo del clik del mouse dentro de la clase Juego
    if ( this.estado==="inicio") {
      if (this.botonJugar.colisionMouse() ) {
        this.estado = "jugando";
      } else if (this.botonCreditos.colisionMouse() ) {
        this.estado = "creditos";
      }
      if (this.botonReglas.colisionMouse()) {
        this.estado = "reglas"
      }
      //botones de sonidos


      if (this.botonSonidoSi.colisionMouse()) {
        if (!sonidoMusica.isPlaying()) {
          sonidoMusica.play();
        }
      } else if (this.botonSonidoNo.colisionMouse()) {
        sonidoMusica.stop();
      }
    }
    if (this.estado=== "creditos" || this.estado==="reglas"||this.estado==="perdiste"||this.estado==="ganaste") {
      if (this.botonInicio.colisionMouse()) {
        this.estado="inicio";
        this.reiniciarJuego();
      }
    }
  }
  actualizar() {
    if ( this.estado==="inicio") {
      //muestro la pantalla inicial
      this.pantallaInicio();
      this.botonJugar.actualizar();
      this.botonCreditos.actualizar();
      this.botonReglas.actualizar();
      this.botonSonidoSi.actualizar();
      this.botonSonidoNo.actualizar();
    } else if ( this.estado==="jugando") {

      //dibujo mi fondo y personajes:
      this.fondo();
      this.personaje.actualizar();
      this.dibujarEnemigos();
      this.controlarDisparosAEnemigos();
      this.checkCollision();
      //muestro el tiempo:
      fill(255);
      textSize(20);
      text("tiempo "+this.contador, 10, height-30);
      this.contador++;
      if (this.contador === 900) {
        this.estado="perdiste";
      }
      if (this.personaje.fueraDeLimites()) {
        this.estado="ganaste";
      }
    }

    if (this.estado==="creditos") {
      this.pantallaCreditos();
    } else if (this.estado==="reglas") {
      this.pantallaReglas();
    }


    if (this.estado==="perdiste") {
      this.pantallaPerdiste();
    } else if (this.estado==="ganaste") {
      this.pantallaGanaste();
    }
  }
  dibujarEnemigos() {
    for (let i=0; i<this.cantidadEnemigos; i++) {
      this.enemigos[i].actualizar();
    }
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
    this.personaje.mover(keyCode)
  }
  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i=0; i<this.cantidadEnemigos; i++) {
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
      }
    }
  }
  checkCollision() {
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.enemigos[i].vivo && this.enemigos[i].haTocadoPersonaje(this.personaje)) {
        this.estado = "perdiste";
        break;
      }
    }
  }

  //  **** P A N T A L L A S ****

  pantallaInicio() {
    push();
    image(this.imgInicio, 0, 0, width, height);
    pop();

    fill(247, 255, 28);
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    text("SPIDER-MAN", width/2, height/2);
    pop();
  }

  pantallaGanaste() {
    push();
    image(this.imgGanaste, 0, 0, width, height);
    textAlign(CENTER);
    text("Excelente trabajo, Parker. ¡Sigue así!", width/2, height/2);
    pop();
    this.botonInicio.actualizar();
  }

  pantallaPerdiste() {
    push();
    image(this.imgPerdiste, 0, 0, width, height);
    pop();
    push();
    fill(247, 255, 28);
    textSize(30);
    textAlign(CENTER);
    text("Perdiste Peter Parker\n¡Ahora tomaré la ciudad y nadie me detendrá!", width/2, height/2);
    pop();

    push();
    textSize(20);
    this.botonInicio.actualizar();
    pop();
  }

  pantallaCreditos() {
    push();
    image(this.imgCreditos, 0, 0, width, height);
    fill(0, 0, 0, 190);
    rectMode(CENTER);
    rect(width/2, height/2+20, 620, 110);
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text("Hecho por el alumno: Flores Gabriel \nLegajo: 95517/5 \nComisión 3 - Profe David Bedoian", width/2, height/2);
    pop();
    this.botonInicio.actualizar();
  }

  pantallaReglas() {

    push();
    image(this.imgReglas, 0, 0, width, height);
    this.botonInicio.actualizar();
    fill(0, 0, 0, 190);
    rectMode(CENTER);
    rect(width/2, height/2+20, width, 110);
    textAlign(CENTER);
    textSize(23);
    fill(255);
    text("Derrota los enemigos lanzando telaraña con la tecla ENTER \n y escapa de alli con las flechas del teclado(huye hacia arriba)\n¡Cuidado! Si los tocas morirás. Y no te quedes sin tiempo!", width/2, height/2);
    pop();
  }
  fondo() {
    push();
    image(this.imgFondo, 0, 0, width, height);
    pop();
  }

  reiniciarJuego() {
    this.contador = 0;
    this.crearPersonaje();
    this.crearEnemigos();
  }
}
