class Bala {
  constructor(posX, posY) {
    this.posX= posX;
    this.posY= posY;
    this.disparada = false;
    
  }
  dibujar() {
    if (this.disparada) {
      fill(255);
      ellipse(this.posX, this.posY, 10, 10);
      this.mover();
    }
  }
  
  mover() {
    this.posY-=20;
  }
  disparar() {
    this.disparada=true;
  }
}
