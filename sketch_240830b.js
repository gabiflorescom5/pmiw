//tp1: opArt. (pmiw)
//Alumno: Flores Gabriel -legajo:95517/5
//Profesor: David Bedoian (comisión 3)
//link al video explicativo: https://youtu.be/cx194SYbs9E

let img;
let avanzar = false;
let despX;
let cantX;
let cantY;
let anchoRect;
let colorRect1,colorRect2;
let rojo,verde,azul;
 let miColor;

function preload(){
 img = loadImage("data/F_45.jpeg");
}

function setup() {

createCanvas(800,400); 
//asignaciones:
 despX =0;
 cantX =6;
 cantY =6;
 colorRect1=200;
 colorRect2=0;
 anchoRect =74;
 rojo=255;
 verde=255;
 azul=255;
 miColor= ColorAleatorio();
 //tamaño de los rectangulos rotados 
 let d=dist(0,72,54,22);
 print(d); 
}


function draw() {
//color del fondo  
 background(rojo,verde,azul);
 cambioColorUnaVez();

//invocacion de imagen
 image(img,0,0, width/2, height); 
//invocacion de funciones
rectangulosRotados();
animacionDeColores();



}

//funcion movimiento de rectangulos rotados
function mousePressed(){
  print(mouseX,","+mouseY);
  if(avanzar){
  avanzar=false;
  }else{avanzar=true; }
  //despX=0;
    }


//fucion de rectangulos rotados
function rectangulosRotados(){
 for(let x=0; x<cantX; x++){       
  for(let y=0; y<cantY;y++){
   if(x%2==0){
    fill(colorRect1);
    }else{fill(colorRect2);}      
    if(avanzar){
    if ( y%2==0 ){
        despX = (frameCount/2)%anchoRect*2; 
        }
    }
    
    quad(400+x*anchoRect+despX,0+y*anchoRect,452+x*anchoRect+despX,-52+y*anchoRect, 504+x*anchoRect+despX,0+y*anchoRect,452+x*anchoRect+despX,52+y*anchoRect);
    }   
 }
}


//funcion cambio de colores
function animacionDeColores(){
//pintar el fondo a colores random e intercambio de colores
if(key=='d'){
   
  colorRect1--;
  colorRect2++;
  rojo=random(0,255);
  verde=random(0,255);
  azul=random(0,255);
  
  }
//regresar a la normalidad
  if(key=='f'){
  colorRect1=200;
  colorRect2=0; 
  rojo=255;
  verde=255;
  azul=255;
  despX=0;
  }  
}
function cambioColorUnaVez(){
  if(key=='g'){
background(miColor);

}
 
}
 function ColorAleatorio(){
return color(random(0,255),random(0,255), random(0,255));

}
