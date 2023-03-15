// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// ejemplo
function encontrarLetraP(string){
    var letras = string.split(""); // se pasa string a un arreglo
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === "p"){
            console.log("si conttiene a P");
        }
     }

}
encontrarLetraP("javascript");
encontrarLetraP("henry");

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);

