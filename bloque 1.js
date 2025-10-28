/*
Bloque 1: Ejercicios con Cadenas
*/
/*
1. Contar caracteres de una frase publicitaria
Entrada: "La tecnología avanza" 
Salida: "La frase tiene 18 caracteres."
*/

function contarCaracteres() {
    let frase= prompt("ingresar la frase publicitaria");
    let caracteres= 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== " ")
        caracteres++;
    }
    console.log(`La frase tiene ${caracteres} caracteres`)
}
contarCaracteres()

/*
2. Contar apariciones de una vocal en un título
Entrada: "Programación avanzada"
Salida: "La vocal 'a' aparece 5 veces."
*/ 

function contarVocal() {
    let titulo= prompt("ingresar el titulo deseado");
    let vocal= prompt("ingresar la vocal que quieras contar");
    let contador= 0;
    for (i = 0; i < titulo.length; i++) {
        if (titulo[i] === vocal) 
        contador++;
    }
    console.log(`La vocal ${vocal} aparece ${contador} veces`);
}
contarVocal()

/*
3. Invertir un nombre de producto
Entrada: "Laptop"
Salida: "potpaL"
*/

function invertirNombreProducto() {
let producto= prompt("ingresar el nombre del producto");
let invertido= "";
for (let i = producto.length-1; i >= 0; i--) {
    invertido= invertido+producto[i];
}
console.log(`La palabra ${producto} invertida es ${invertido}`)
}
invertirNombreProducto()

/*
4. Comparar nombres de ciudades por longitud
Entrada: "Milagro" y "Guayaquil"
Salida: "La palabra 'Guayaquil' tiene más letras."
*/

function compararPalabras() {
    let palabra1= prompt("ingresar la primera ciudad");
    let palabra2= prompt("ingresar la segunda ciudad");
    if (palabra1.length>palabra2.length) {
        console.log(`La palabra ${palabra1} tiene mas letras`);
    } else if (palabra2.length>palabra1.length) {
        console.log(`La palabra ${palabra2} tiene mas letras`);
    } else {
        console.log("Las palabras son iguales");
    }
}
compararPalabras()

/*
5. Obtener iniciales de un cargo profesional
Entrada: "Director General Académico"
Salida: "D.G.A."
*/

function obtenerIniciales() {
    let palabraDeCargo= prompt("ingresar el cargo profesional");
    let siglas= ""
    let palabras= palabraDeCargo.split(" ");
    for (i = 0; i < palabras.length; i++) {
    siglas= siglas + palabras[i][0].toUpperCase() + ".";
 }
    console.log(siglas);
}
obtenerIniciales()
