// *********** Lista de compras
var listaDeCompras = []
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// *********** Ver lista de compras
var elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

// *********** Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
//console.log(nombres);

// *********** PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); // adiciona campo al final del arreglo
colores.unshift('Verde'); // adiciona campo al inicio del arreglo

//console.log(colores);

// *********** POP y SHIFT
colores.shift(); // elimina primer campo del arreglo
colores.pop(); // elimina ultimo campo del arreglo

//console.log(colores);

// *********** SPLICE
//nos permite eliminar un elemento en una posición específica.
const jsLibraries = ['react', 'redux', 'vue', 'D3', 'Chart']
jsLibraries.splice(2,1) //( posicion inicial , cantidad campos )
console.log(jsLibraries);

// *********** INCLUDES 
// sirve para determinar si incluye un elemento devuelve true false 
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

//console.log(existeDali);

// *********** EVERY 
// si todos los elementos cumplen con una condicion 
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

//console.log(cumplenCondicion);

// *********** SPLIT 
//convierte un string en un arreglo,
// donde cada elemento contendrá un sub-string, 
// dependiendo del parámetro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop(); // elimina la ultima letra
palabraSeparada.push("y") // agregamos al final 
//console.log(palabraSeparada);

// ********** JOIN 
// convierte un arreglo en un string, 
// uniendo todos los elementos de este en una misma cadena.
var palabraArreglada = palabraSeparada.join('');

//console.log("join: " + palabraArreglada);

// ********** FOREACH 
//nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log("foreach: " + num) } )
numeros.forEach( (num) => {  
    if (num == 3 ){
        //console.log( "foreach2: " + num);
    }
}
)

// *********** SET
//El objeto Set le permite almacenar valores únicos de cualquier tipo, 
//ya sea valores primitivos o referencias a objetos.
arreglo = [1, 2, 4, 2, 3, 1, 1, 5, 7];
var nuevoArray = new Set(arreglo);
  let sinDuplicados = [...nuevoArray];
  console.log(sinDuplicados)

const set = new Set(array);
console.assert(set.size == array.length); // [ 1, 2, 4, 3, 5, 7 ]

// ********** FILTER() - Array.prototype.filter()

 // crea un nuevo array con todos los elementos que cumplan la condición 
 //implementada por la función dada.

 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

 const result = words.filter(word => word.length > 6);
 
 //console.log(result);
 // Expected output: Array ["exuberant", "destruction", "present"]
 
 
 
 
  // *********** MAP  - Array.prototype.map()
 
  //crea un nuevo array con los resultados de la 
  //llamada a la función indicada aplicados a cada uno de sus elementos.
 
  var numbers = [1, 5, 10, 15];
  var doubles = numbers.map(function(x) {
     return x * 2;
  });
  //console.log(doubles);
  // doubles is now [2, 10, 20, 30]
  // numbers is still [1, 5, 10, 15]
  
  var numbers = [1, 4, 9];
  var roots = numbers.map(function(num) {
      return Math.sqrt(num);
  });
  //console.log(roots);
  // roots is now [1, 2, 3]
  // numbers is still [1, 4, 9]


// ********** MAP 
//nos permite recorrer un arreglo y realizar una acción por cada elemento. 
//La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return "map: " + num + 1 } );

//console.log(masUno);