class Personaje {
  constructor(posX,posY) {
    this.posX = posX;
    this.posY = posY;
    this.vel = 2;
    this.vida = 3;
    this.aspecto= loadImage("data/img/spiderman.png");
    this.alto = 70;
    this.ancho= 50;
    this.bala = new Bala();
  }
  dibujar() {
    this.bala.dibujar();

    push();
    translate(this.posX, this.posY);
    imageMode(CENTER);

    image(this.aspecto, 0, 0, this.ancho, this.alto);
    pop();
  }
  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == ENTER) {
      this.dispararBala();
    }
  }
  moverIzquierda() {
    this.posX -=30;
  }
  moverDerecha() {
    this.posX +=30;
  }
  dispararBala(){
  this.bala = new Bala(this.posX,this.posY);
  this.bala.disparar();
  }
  haDisparadoBala(){
  return   this.bala.disparar;
  }
}
