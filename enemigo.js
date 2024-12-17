class Enemigo {
  constructor(posX, posY) {
    this.tipo = int(random(0, 2));
    this.aspecto = loadImage("data/img/venom_"+this.tipo+".png");
    this.vivo= true;
    this.posX= posX;
    this.posY= posY;
    this.contador= 0;
    this.despX = 0;
    this.despY = 5;
    this.lado = 60;
    this.puntos=0;
  }
  actualizar() {
    if (this.vivo) {
      this.dibujar();
    }
  }
  dibujar() {
    push();
    imageMode(CENTER);
    image(this.aspecto, this.posX, this.posY, 50, 70);
    pop();
  }

  matar() {
    this.vivo=false;
    sonidoMuerte.play();
  }

  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY)<15) {
      this.matar();
    }
  }
  haTocadoPersonaje(personaje) {
    let d = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    return this.vivo && (d < 35); // Ajusta esta distancia según tus necesidades }
  }
  }
