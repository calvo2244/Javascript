// Bucle for ( for (variable iteracion; condicion cumplimiento ; que sucede con variable de iteracion ))
var suma = 0 ;
for (let i = 0; i < 5; i++) {
   suma = suma + i;
   console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

// bucle while while(condicion para que se ejecute){ condicion que hace que se repita a una condicion}
var sumaWhile = 0;
while(sumaWhile < 3) {
    sumaWhile = sumaWhile + 1;
        console.log("resultado while"+sumaWhile);
    };

// switch
var foo = 2;
switch (foo) {
  case -1:
    console.log('1 negativo');
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log("switch " + 0)
    // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log("switch " + 1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log("switch " + 2);
    break;
  default:
    console.log("switch " + 'default');
}

// do while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log("do while " + result);
// Expected output: "12345"
