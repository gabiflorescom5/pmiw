class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vel = 5;
    this.aspecto = loadImage("data/img/spiderman.png");
    this.alto = 70;
    this.ancho= 50;
    this.bala = new Bala();
    this.vida = true;
  }

  actualizar() {
    
    this.mover();
    this.dibujar();
   
  }

  dibujar() {
    
    this.bala.dibujar();
    push();
    translate(this.posX, this.posY);
    imageMode(CENTER);
    image(this.aspecto, 0, 0, this.ancho, this.alto);
    pop();
    
  }

  mover() {
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.posX-=this.vel;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.posX+=this.vel;
      } else if (keyCode===UP_ARROW) {
        this.posY-=this.vel;
      } else if (keyCode===DOWN_ARROW) {
        this.posY+=this.vel;
      } else if (keyCode===ENTER) {
        this.dispararBala();
        sonidoTela.play();
      }
      //para no salirme de los limites
      this.posX = constrain(this.posX, 30, width-30);
      this.posY = constrain(this.posY, -100, height-30);
    }
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar();
  }
  haDisparadoBala() {
    return(this.bala.disparar);
  }
  fueraDeLimites() {
    return(this.posY < 0);
  }
  
}
