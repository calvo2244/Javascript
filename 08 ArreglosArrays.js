// Lista de compras
var listaDeCompras = []
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); // adiciona campo al final del arreglo
colores.unshift('Verde'); // adiciona campo al inicio del arreglo

console.log(colores);

// POP y SHIFT
colores.shift(); // elimina primer campo del arreglo
colores.pop(); // elimina ultimo campo del arreglo

console.log(colores);

// INCLUDES 
// sirve para determinar si incluye un elemento devuelve true false 
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY 
// si todos los elementos cumplen con una condicion 
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT 
//convierte un string en un arreglo,
// donde cada elemento contendrá un sub-string, 
// dependiendo del parámetro divisor que indiquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop(); // elimina la ultima letra
palabraSeparada.push("y") // agregamos al final 
console.log(palabraSeparada);

// JOIN 
// convierte un arreglo en un string, 
// uniendo todos los elementos de este en una misma cadena.
var palabraArreglada = palabraSeparada.join('');

console.log("join: " + palabraArreglada);

// FOREACH 
//nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log("foreach: " + num) } )
numeros.forEach( (num) => {  
    if (num == 3 ){
        console.log( "foreach2: " + num);
    }
}
)

// MAP 
//nos permite recorrer un arreglo y realizar una acción por cada elemento. 
//La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return "map: " + num + 1 } );

console.log(masUno);