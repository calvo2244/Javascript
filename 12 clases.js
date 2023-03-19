// FUNCIÓN CONSTRUCTORA - forma antigua
// function Auto(puertas, color, marca, año, ruedas) {
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;

//     this.informacion = function(){
//         console.log("este es un " + this.marca + " de color" + this.color)
//     }
//  }
//  var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
//  //console.log(miPrimerAuto);
//  //console.log(miPrimerAuto.marca);
//  miPrimerAuto.informacion();

 // EXPRESIÓN DE CLASE
 class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
    informacion(){
        console.log("este es un " + this.marca + " de color" + this.color)
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
//  console.log(miSegundoAuto);
//  console.log(miSegundoAuto.marca);
//miSegundoAuto.informacion();

class football{
    constructor(jugador){
        this.jugador = jugador;
    }

    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new football("messi");
var brasil = new football("pele");

argentina.obtenerNombre();
brasil.obtenerNombre();