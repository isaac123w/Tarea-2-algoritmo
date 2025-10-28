/*
Bloque 2: Ejercicios con Arreglos y Cadenas
*/

/*
1. Contar caracteres de varias frases publicitarias
Entrada:
["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
Salida:
"La tecnología avanza" → 19 caracteres  
"Innovar para crecer" → 20 caracteres  
"Calidad garantizada" → 21 caracteres
*/
function contarFrasesArreglos() {
    let frases = [];
    let n = parseInt(prompt("Ingresar la cantidad de frases"));

    for (let i = 0; i < n; i++) {
        frases.push(prompt(`Ingresar la frase ${i+1}`));
    }

    for (let i = 0; i < frases.length; i++) {
        let frase = frases[i].trim(); // eliminamos espacios al inicio y final
        console.log(`"${frase}" → ${frase.length} caracteres`);
    }
}
contarFrasesArreglos()

/* Pseudocódigo tipo programación:
Inicio
    frases = []
    n = leer("Ingresar la cantidad de frases")
    Para i = 0 hasta n-1 hacer
        frases[i] = leer("Ingresar la frase " + (i+1))
    FinPara
    Para i = 0 hasta frases.length - 1 hacer
        frase = eliminarEspacios(frases[i])
        imprimir('"' + frase + '" → ' + frase.length + ' caracteres')
    FinPara
Fin
*/

/*
2. Contar apariciones de una vocal en cada título
Entrada:
["Programación avanzada", "Desarrollo web", "Análisis de datos"]
vocal = 'a'
Salida:
"Programación avanzada" → 5 veces la 'a'  
"Desarrollo web" → 1 vez la 'a'  
"Análisis de datos" → 4 veces la 'a'
*/
function contarVocalArreglo() {
    let titulos = [];
    let n = parseInt(prompt("Ingresar la cantidad de títulos"));
    let vocal = prompt("Ingresar la vocal deseada").toLowerCase();

    for (let i = 0; i < n; i++) {
        titulos.push(prompt(`Ingresar el título ${i + 1}`));
    }

    for (let i = 0; i < titulos.length; i++) {
        let c = 0;
        let titulo = titulos[i].toLowerCase();

        for (let j = 0; j < titulo.length; j++) { 
            if (titulo[j] === vocal) {
                c++;
            }
        }

        console.log(`"${titulos[i]}" → ${c} ${c === 1 ? "vez" : "veces"} la '${vocal}'`);
    }
}
contarVocalArreglo()

/* Pseudocódigo tipo programación:
Inicio
    titulos = []
    n = leer("Cantidad de títulos")
    vocal = minuscula(leer("Vocal deseada"))
    Para i = 0 hasta n-1 hacer
        titulos[i] = leer("Ingresar el título " + (i+1))
    FinPara
    Para i = 0 hasta titulos.length-1 hacer
        c = 0
        titulo = minuscula(titulos[i])
        Para j = 0 hasta titulo.length-1 hacer
            Si titulo[j] == vocal entonces
                c = c + 1
            FinSi
        FinPara
        imprimir('"' + titulos[i] + '" → ' + c + " " + (c==1?"vez":"veces") + " la '" + vocal + "'")
    FinPara
Fin
*/

/*
3. Invertir los nombres de varios productos
Entrada:
["Laptop", "Celular", "Tablet"]
Salida:
"Laptop" → "potpaL"  
"Celular" → "raluleC"  
"Tablet" → "telbaT"
*/
function inveritirArreglo() {
    let nombres = [];
    let n = parseInt(prompt("Ingresar la cantidad de nombres deseada"));

    for (let i = 0; i < n; i++) {
        nombres.push(prompt(`Ingresar el nombre ${i+1}`));
    }
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        let invertidos = "";
        
        for (let j = nombre.length - 1; j >= 0; j--) {
            invertidos += nombre[j];
        }
        console.log(`"${nombres[i]}" = "${invertidos}"`);
    }
}
inveritirArreglo()

/* Pseudocódigo tipo programación:
Inicio
    nombres = []
    n = leer("Cantidad de nombres")
    Para i = 0 hasta n-1 hacer
        nombres[i] = leer("Ingresar el nombre " + (i+1))
    FinPara
    Para i = 0 hasta nombres.length - 1 hacer
        nombre = nombres[i]
        invertido = ""
        Para j = nombre.length - 1 hasta 0 paso -1 hacer
            invertido = invertido + nombre[j]
        FinPara
        imprimir('"' + nombre + '" = "' + invertido + '"')
    FinPara
Fin
*/

/*
4. Comparar longitudes de nombres de ciudades
Entrada:
["Milagro", "Guayaquil", "Quito", "Cuenca"]
Salida:
"La ciudad con más letras es 'Guayaquil' (9 letras)."
*/
function compararLongitudesArreglo() {
    let ciudades = [];
    let ciudadMasLarga = "";
    let n = parseInt(prompt("Ingresar la cantidad de ciudades"));

    for (let i = 0; i < n; i++) {
        ciudades.push(prompt(`Ingresar la ciudad ${i+1}`));
    }

    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].length > ciudadMasLarga.length) {
            ciudadMasLarga = ciudades[i];
        }
    }
    console.log(`La ciudad con más letras es ${ciudadMasLarga}`);
}
compararLongitudesArreglo()

/* Pseudocódigo tipo programación:
Inicio
    ciudades = []
    ciudadMasLarga = ""
    n = leer("Cantidad de ciudades")
    Para i = 0 hasta n-1 hacer
        ciudades[i] = leer("Ingresar ciudad " + (i+1))
    FinPara
    Para i = 0 hasta ciudades.length-1 hacer
        Si ciudades[i].length > ciudadMasLarga.length entonces
            ciudadMasLarga = ciudades[i]
        FinSi
    FinPara
    imprimir("La ciudad con más letras es " + ciudadMasLarga)
Fin
*/

/*
5. Obtener iniciales de varios cargos profesionales
Entrada:
["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
Salida:
"Director General Académico" → D.G.A.  
"Jefe de Laboratorio" → J.D.L.  
"Asistente Administrativo" → A.A.
*/
function inicialesCargosArreglos() {
    let cargos = [];
    let n = parseInt(prompt("Ingresar la cantidad de cargos"));

    for (let i = 0; i < n; i++) {
        cargos.push(prompt(`Ingresar el cargo profesional ${i+1}`));
    }

    for (let i = 0; i < cargos.length; i++) {
        let palabraDeCargo = cargos[i].split(" ");
        let siglas = "";

        for (let j = 0; j < palabraDeCargo.length; j++) {
            siglas += palabraDeCargo[j][0].toUpperCase() + ".";   
        }
        console.log(siglas);
    }
}
inicialesCargosArreglos()

/* Pseudocódigo tipo programación:
Inicio
    cargos = []
    n = leer("Cantidad de cargos")
    Para i = 0 hasta n-1 hacer
        cargos[i] = leer("Ingresar el cargo " + (i+1))
    FinPara
    Para i = 0 hasta cargos.length - 1 hacer
        palabras = dividir(cargos[i], " ")
        siglas = ""
        Para j = 0 hasta palabras.length - 1 hacer
            siglas = siglas + mayuscula(palabras[j][0]) + "."
        FinPara
        imprimir(siglas)
    FinPara
Fin
*/
