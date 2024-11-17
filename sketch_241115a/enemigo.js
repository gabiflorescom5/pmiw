class Enemigo {
  constructor(posX, posY) {
    this.vida= true;
    this.posX= posX;
    this.posY= posY;
    this.aspecto= loadImage("data/img/venom.png");
  }
  dibujar() {
    if (this.vida) {
      imageMode(CENTER);
      image(this.aspecto, this.posX, this.posY, 50, 70);
    }
  }
  matar() {
    this.vida=false;
  }
  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY)<15) {
      this.matar(); 
    }
  }
}
