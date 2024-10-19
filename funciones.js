//ASIGNAMOS NUESTRAS FUNCIONES

//INICIAMOS LA PANTALLA 0
function todosLosTextos() {
  estado = 0;
  
  //textos de las pantallas
textos[0]="EL ASOMBROSO \nSPIDER-MAN";
botonA[0]="EMPEZAR";
botonB[0]="CRÉDITOS";

textos[1]="Pelicula: SPIDER-MAN \nAlumnos: FLORES GABRIEL y SERRANO LEANDRO(Comisión 3)\nPersonaje creado por STAN LEE y STEVE DITKO en 1962 \nPelicula dirigida por SAM RAIMI";
botonB[1]="INICIO";

textos[2]="Peter Parker, un joven de Nueva York tímido y brillante \nque estudia en una escuela de ciencia, \nfue mordido por una araña radiactiva en una excursión";
botonB[2]="SIGUIENTE";

textos[3]="Al dia siguiente Peter Parker se despierta \nen su habitación sintiendo algo extraño. \nMira a su alrededor y se da cuenta que puede, \nver con una claridad perfecta sin sus lentes, \nfuerza en sus brazos y piernas y una agilidad increíble";
botonB[3]="SIGUIENTE";

textos[4]="De repente, su tia May entra a la habitación, preocupada por los ruidos. \n¿Qué debería hacer peter con sus poderes ante su tia?";
botonA[4]="OCULTARLO";
botonB[4]="CONTARLE";

textos[5]="Peter disimula que no ha pasado nada \ny va la escuela como si nada hubiera ocurrido";
botonB[5]="SIGUIENTE";


textos[6]="Decide contarle, y su tia decide apoyarle y guiarlo por el buen camino. \nentrenandolo y haciendole un traje";
botonB[6]="SIGUIENTE";

textos[7]="La tia May es secuestrada por un villano de spiderman \nquien le ordena dejar de ser un superheroe \n¿Que debería hacer peter?";
botonA[7]="RENDIRSE";
botonB[7]="PELEAR";

textos[8]="En clases Peter empieza a sufrir acoso \npor parte de Flash Thompson, el típico matón escolar. \nUsa sus poderes para defenderse. Sin darse cuenta de su nueva fuerza, \nderriba a Flash con un solo golpe, sorprendiendo a todos.";
botonB[8]="SIGUIENTE";

//FINAL 1
textos[9]="La ciudad se vuelve todo un caos \npero peter y su familia están a salvo \nFIN. ";
botonB[9]="INICIO";

//FINAL 2
textos[10]="Peter decide no rendirse y pelear, \npero la tia May fallece por culpa del villano, sin antes enseñarle a peter \nque un gran poder conlleva una gran responsabilidad. \nFIN.";
botonB[10]="INICIO";

textos[11]="Cuando sale de la escuela Peter parker empieza a diseñar \nun traje para salir a salvar al mundo como un super heroe";
botonB[11]="SIGUIENTE";

//FINAL 3
textos[12]="Peter Parker se apoda Spiderman y sale a buscar criminales\n para hacer justicia. De la nada encuentra un banco que a sido robado \ny va a luchar contra todos los delicuentes que se encuentra \npara tener una ciudad mas tranquila.\nFIN.";
botonB[12]="INICIO";


  
}

function dibujaBoton(txt, x, y, w, h ) {
  //dibuja un boton centrado:
  push();
  rectMode(CENTER);
 //cambio de color con mouse
  if ( colisionBoton( x, y, w, h ) ) {
    fill(3, 29, 255);
  } else {
    fill(50);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}
function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaInicio() {
  push();
  image(imgs[estado], 0, 0,width,height); // Mostramos la imagen que corresponde al valor de 'pantalla'
  fill(255,255,0);
  textAlign(CENTER);
  textSize(25);
  text(textos[0], width/2, height/2);

  //botones:
  dibujaBoton(botonA[0], width/2, height*0.75, 200, 40);
  dibujaBoton(botonB[0], width/2, height*0.75+60, 200, 40);
  botonSonido( "PLAY", 50, 50, 50, 50);
  botonSonido( "STOP", width-50, 50, 50, 50);
  pop();
}

function pantallaHistoriaDosBotones( txt_pantalla , txt_btn_A , txt_btn_B ) {
  push();
  image(imgs[estado], 0, 0,width,height); // Mostramos la imagen que corresponde al valor de 'pantalla'
  fill(250,255,0);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2+30);
  //botones:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);
  dibujaBoton(txt_btn_B, width/2+200, height*0.75+60, 200, 40);
  botonSonido( "PLAY", 50, 50, 50, 50);
  botonSonido( "STOP", width-50, 50, 50, 50);
  pop();
}


//mis pantallas con solo un boton
function pantallaHistoriaUnBoton( txt_pantalla , txt_btn_A ) {
  push();
  image(imgs[estado], 0, 0,width,height); // Mostramos la imagen que corresponde al valor de 'pantalla'
  fill(250,255,0);
  textAlign(CENTER);
  textSize(24);
  text(txt_pantalla, width/2, height/2);

  //boton:
  dibujaBoton(txt_btn_A, width/2, height*0.75+60, 200, 40);
  botonSonido( "PLAY", 50, 50, 50, 50);
  botonSonido( "STOP", width-50, 50, 50, 50);

  pop();
}
//Botón para el sonido
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
