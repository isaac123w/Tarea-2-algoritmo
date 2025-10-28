/*
Bloque 1: Ejercicios con Cadenas
*/

/*
1. Contar caracteres de una frase publicitaria
Entrada: "La tecnología avanza" 
Salida: "La frase tiene 18 caracteres."
*/
function contarCaracteres() {
    let frase = prompt("Ingresar la frase publicitaria");
    let caracteres = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== " ")
            caracteres++;
    }
    console.log(`La frase tiene ${caracteres} caracteres`);
}
contarCaracteres()

/* Pseudocódigo :
Inicio
    frase = leer("Ingresar la frase publicitaria")
    caracteres = 0
    Para i = 0 hasta frase.length - 1 hacer
        Si frase[i] != " " entonces
            caracteres = caracteres + 1
        FinSi
    FinPara
    imprimir("La frase tiene " + caracteres + " caracteres")
Fin
*/

/*
2. Contar apariciones de una vocal en un título
Entrada: "Programación avanzada"
Salida: "La vocal 'a' aparece 5 veces."
*/
function contarVocal() {
    let titulo = prompt("Ingresar el título deseado");
    let vocal = prompt("Ingresar la vocal que quieras contar");
    let contador = 0;
    for (let i = 0; i < titulo.length; i++) {
        if (titulo[i] === vocal)
            contador++;
    }
    console.log(`La vocal ${vocal} aparece ${contador} veces`);
}
contarVocal()

/* Pseudocódigo :
Inicio
    titulo = leer("Ingresar el título deseado")
    vocal = leer("Ingresar la vocal a contar")
    contador = 0
    Para i = 0 hasta titulo.length - 1 hacer
        Si titulo[i] == vocal entonces
            contador = contador + 1
        FinSi
    FinPara
    imprimir("La vocal " + vocal + " aparece " + contador + " veces")
Fin
*/

/*
3. Invertir un nombre de producto
Entrada: "Laptop"
Salida: "potpaL"
*/
function invertirNombreProducto() {
    let producto = prompt("Ingresar el nombre del producto");
    let invertido = "";
    for (let i = producto.length - 1; i >= 0; i--) {
        invertido += producto[i];
    }
    console.log(`La palabra ${producto} invertida es ${invertido}`);
}
invertirNombreProducto()

/* Pseudocódigo :
Inicio
    producto = leer("Ingresar el nombre del producto")
    invertido = ""
    Para i = producto.length - 1 hasta 0 paso -1 hacer
        invertido = invertido + producto[i]
    FinPara
    imprimir("La palabra " + producto + " invertida es " + invertido)
Fin
*/

/*
4. Comparar nombres de ciudades por longitud
Entrada: "Milagro" y "Guayaquil"
Salida: "La palabra 'Guayaquil' tiene más letras."
*/
function compararPalabras() {
    let palabra1 = prompt("Ingresar la primera ciudad");
    let palabra2 = prompt("Ingresar la segunda ciudad");
    if (palabra1.length > palabra2.length) {
        console.log(`La palabra ${palabra1} tiene más letras`);
    } else if (palabra2.length > palabra1.length) {
        console.log(`La palabra ${palabra2} tiene más letras`);
    } else {
        console.log("Las palabras son iguales");
    }
}
compararPalabras()

/* Pseudocódigo :
Inicio
    ciudad1 = leer("Ingresar la primera ciudad")
    ciudad2 = leer("Ingresar la segunda ciudad")
    Si ciudad1.length > ciudad2.length entonces
        imprimir("La palabra " + ciudad1 + " tiene más letras")
    SinoSi ciudad2.length > ciudad1.length entonces
        imprimir("La palabra " + ciudad2 + " tiene más letras")
    Sino
        imprimir("Las palabras son iguales")
    FinSi
Fin
*/

/*
5. Obtener iniciales de un cargo profesional
Entrada: "Director General Académico"
Salida: "D.G.A."
*/
function obtenerIniciales() {
    let palabraDeCargo = prompt("Ingresar el cargo profesional");
    let siglas = "";
    let palabras = palabraDeCargo.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        siglas += palabras[i][0].toUpperCase() + ".";
    }
    console.log(siglas);
}
obtenerIniciales()

/* Pseudocódigo :
Inicio
    cargo = leer("Ingresar el cargo profesional")
    siglas = ""
    palabras = dividir(cargo, " ")
    Para i = 0 hasta palabras.length - 1 hacer
        siglas = siglas + mayuscula(palabras[i][0]) + "."
    FinPara
    imprimir(siglas)
Fin
*/
