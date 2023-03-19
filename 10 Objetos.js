var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
 console.log(deportes)

 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

//crear funciones con objetos
var misFunciones ={
    saludar: function (){
        console.log("hola");
    }
}
misFunciones.saludar();

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
//console.log(atuendos);

var comidas ={};
var diferenciaDeNotaciones = function(propUno,propDos){
    comidas[propUno] =["Frutas","Vegetales"];
    comidas[propDos] =["Hamburguesa","Papas Fritas"];
}
diferenciaDeNotaciones("saludable","nosaludable");
console.log(comidas);


