// HAS OWN PROPERTY

//hasOwnProperty() nos permitirá especificar un nombre, y verificar si 
//este existe como una propiedad dentro de un objeto. 
//En cada caso devolverá true o false.

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

//console.log(tienePropiedad);

// KEYS

//devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

//console.log(todasLasPropiedades);

//FOR IN

//os permite iterar sobre un objeto utilizando dos variables pivot. 
//Una representa el objeto que recorremos, y la otra la propiedad en 
//la que se está realizando la iteración. Utilizando ambos valores podremos 
//acceder al valor de cada propiedad del objeto.
var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (let prop in mundo) {
    //console.log('Esta es la propiedad: ', prop);
    //console.log('Este es el valor: ', mundo[prop]);
 };

 //THIS

 //nos permite manipular el contexto en el que las funciones y 
 //la información está siendo ejecutada. De esta forma podremos 
 //tener un alcance más preciso dentro de nuestro código.

var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un  ' + this.raza);
    },
 }; 
 mascota.info();

 