console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 4);
console.log(4 == 7);
console.log(4 != 7);

// operadores de igualdad o asignacion 
// = asignacion //==  ===  igualdad 

console.log(3 === "3"); //false no es el mismo tipo dato
console.log(3 == "3"); //true verifica valor 

// Asociativa
    // en la igualdad asociatividad siempre inicia en derecha 
var a =1;
var b = 2;
var c = (a = b);
console.log(a); //2
console.log(b); //2
console.log(c); //2 primero a=b donde a queda 2 y despues c se le asigna ese 2 
    // division en la igualdad asociatividad siempre inicia en izquierda 
    console.log(32 / 2 / 4);


