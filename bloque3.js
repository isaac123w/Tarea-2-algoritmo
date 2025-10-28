/*
Bloque 3: Ejercicios Individuales con Ciclos
*/

/*
1. Promedio de calificaciones mayores a 70
*/
function promedioCalificaciones70() {
    let n = parseInt(prompt("Ingresar la cantidad de calificaciones deseadas"));
    let suma = 0;
    let contador = 0;
    let notasTexto = ""; 
    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt(`Ingresar la calificación ${i + 1}`));
        notasTexto += nota + (i < n - 1 ? ", " : "");
        if (nota >= 70) {
            suma += nota;
            contador++;
        }
    }

    if (contador > 0) {
        let promedio = suma / contador;
        console.log(`Notas >=70: ${notasTexto}  Promedio: ${promedio.toFixed(2)}`);
    } else {
        console.log(`Notas: ${notasTexto}\nNo hay notas mayores o iguales a 70.`);
    }
}
promedioCalificaciones70()

/* Pseudocódigo tipo programación:
Inicio
    n = leer("Cantidad de calificaciones")
    suma = 0
    contador = 0
    notasTexto = ""
    Para i = 0 hasta n-1 hacer
        nota = leer("Ingresar calificación " + (i+1))
        notasTexto = notasTexto + nota + ", "
        Si nota >= 70 entonces
            suma = suma + nota
            contador = contador + 1
        FinSi
    FinPara
    Si contador > 0 entonces
        promedio = suma / contador
        imprimir("Notas >=70: " + notasTexto + " Promedio: " + promedio)
    Sino
        imprimir("Notas: " + notasTexto + " No hay notas >=70")
    FinSi
Fin
*/

/*
2. Contar cuántos números negativos se ingresan
*/
function contarNegativos() {
    let n = parseInt(prompt("Ingresar la cantidad de números deseada"));
    let contador = 0;
    let numerosTexto = ""; 

    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt(`Ingresar el número ${i + 1}`));
        numerosTexto += numero + (i < n - 1 ? ", " : "");
        if (numero < 0) {
            contador++;
        }
    }

    console.log(`Números: ${numerosTexto}`);
    console.log(`Cantidad de negativos: ${contador}`);
}
contarNegativos()

/* Pseudocódigo tipo programación:
Inicio
    n = leer("Cantidad de números")
    contador = 0
    numerosTexto = ""
    Para i = 0 hasta n-1 hacer
        numero = leer("Número " + (i+1))
        numerosTexto = numerosTexto + numero + ", "
        Si numero < 0 entonces
            contador = contador + 1
        FinSi
    FinPara
    imprimir("Números: " + numerosTexto)
    imprimir("Cantidad de negativos: " + contador)
Fin
*/

/*
3. Promedio de edades: mayores vs menores de edad
*/
function promedioMayorYMenor() {
    let n = parseInt(prompt("Ingresar la cantidad de edades deseadas"));
    let sumaMayores = 0;
    let sumaMenores = 0;
    let c1 = 0;
    let c2 = 0;
    let edadesTexto = ""; 

    for (let i = 0; i < n; i++) {
        let edad = parseInt(prompt(`Ingresar la edad ${i + 1}`));
        edadesTexto += edad + (i < n - 1 ? ", " : "");
        if (edad >= 18) {
            sumaMayores += edad;
            c1++;
        } else {
            sumaMenores += edad;
            c2++;
        }
    }

    let promedioMayores = c1 > 0 ? (sumaMayores / c1).toFixed(2) : 0;
    let promedioMenores = c2 > 0 ? (sumaMenores / c2).toFixed(2) : 0;

    console.log(`Las edades son: ${edadesTexto}`);
    console.log(`Promedio de mayores de edad: ${promedioMayores}`);
    console.log(`Promedio de menores de edad: ${promedioMenores}`);
}
promedioMayorYMenor()

/* Pseudocódigo tipo programación:
Inicio
    n = leer("Cantidad de edades")
    sumaMayores = 0
    sumaMenores = 0
    c1 = 0
    c2 = 0
    edadesTexto = ""
    Para i = 0 hasta n-1 hacer
        edad = leer("Edad " + (i+1))
        edadesTexto = edadesTexto + edad + ", "
        Si edad >= 18 entonces
            sumaMayores = sumaMayores + edad
            c1 = c1 + 1
        Sino
            sumaMenores = sumaMenores + edad
            c2 = c2 + 1
        FinSi
    FinPara
    promedioMayores = (c1 > 0) ? sumaMayores / c1 : 0
    promedioMenores = (c2 > 0) ? sumaMenores / c2 : 0
    imprimir("Las edades son: " + edadesTexto)
    imprimir("Promedio de mayores: " + promedioMayores)
    imprimir("Promedio de menores: " + promedioMenores)
Fin
*/

/*
4. Mostrar la tabla de multiplicar de un número
*/
function tablaMultiplicarNumero() {
    let numero = parseInt(prompt("Ingresar el número deseado"));
    console.log(`Tabla del ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tablaMultiplicarNumero()

/* Pseudocódigo tipo programación:
Inicio
    numero = leer("Número")
    imprimir("Tabla del " + numero)
    Para i = 1 hasta 10 hacer
        imprimir(numero + " x " + i + " = " + (numero*i))
    FinPara
Fin
*/

/*
5. Promedio de números pares e impares
*/
function promedioParesImpares() {
    let n = parseInt(prompt("Ingresar la cantidad de números deseada"));
    let impares = 0;
    let pares = 0;
    let c = 0;   
    let c2 = 0;  
    let textoNumeros = ""; 

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingresar el número ${i + 1}`));
        textoNumeros += num + (i < n - 1 ? ", " : "");
        if (num % 2 === 0) {
            pares += num;
            c++;
        } else {
            impares += num;
            c2++;
        }
    }

    let promedioPares = c > 0 ? (pares / c).toFixed(2) : 0;
    let promedioImpares = c2 > 0 ? (impares / c2).toFixed(2) : 0;

    console.log(`Valores: ${textoNumeros}`);
    console.log(`Promedio de pares: ${promedioPares}`);
    console.log(`Promedio de impares: ${promedioImpares}`);
}
promedioParesImpares()

/* Pseudocódigo tipo programación:
Inicio
    n = leer("Cantidad de números")
    pares = 0
    impares = 0
    c = 0
    c2 = 0
    textoNumeros = ""
    Para i = 0 hasta n-1 hacer
        num = leer("Número " + (i+1))
        textoNumeros = textoNumeros + num + ", "
        Si num % 2 == 0 entonces
            pares = pares + num
            c = c + 1
        Sino
            impares = impares + num
            c2 = c2 + 1
        FinSi
    FinPara
    promedioPares = (c>0)? pares / c : 0
    promedioImpares = (c2>0)? impares / c2 : 0
    imprimir("Valores: " + textoNumeros)
    imprimir("Promedio de pares: " + promedioPares)
    imprimir("Promedio de impares: " + promedioImpares)
Fin
*/
