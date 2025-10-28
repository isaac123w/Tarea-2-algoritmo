/*
Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)
*/

/*
1. Promedio de calificaciones mayores a 70
*/
function promedioCalificaciones70() {
    let n = parseInt(prompt("Ingresar la cantidad de calificaciones deseadas"));
    let calificaciones = [];
    let suma = 0;
    let contador = 0;

    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt(`Ingresar la calificacion ${i+1}`));
        calificaciones.push(nota);
        if (nota >= 70) {
            suma += nota;
            contador++;
        }
    }

    if (contador > 0) {
        let promedio = suma / contador;
        console.log(`Notas >=70: ${calificaciones.join(",")} Promedio: ${promedio.toFixed(2)}`);
    } else {
        console.log(`Notas: ${calificaciones.join(", ")}\nNo hay notas mayores o iguales a 70.`);
    }
}
promedioCalificaciones70()

/* Pseudocódigo:
Inicio
    n = leer("Cantidad de calificaciones")
    calificaciones = []
    suma = 0
    contador = 0
    Para i = 0 hasta n-1 hacer
        nota = leer("Calificación " + (i+1))
        agregar nota a calificaciones
        Si nota >= 70 entonces
            suma = suma + nota
            contador = contador + 1
        FinSi
    FinPara
    Si contador > 0 entonces
        promedio = suma / contador
        imprimir("Notas >=70: " + calificaciones + " Promedio: " + promedio)
    Sino
        imprimir("Notas: " + calificaciones + " No hay notas >=70")
    FinSi
Fin
*/

/*
2. Contar números negativos en una lista
*/
function contarNegativosLista() {
    let n = parseInt(prompt("Ingresar la cantidad de numeros deseada"));
    let numeros = [];
    let contador = 0;

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingresar el ${i+1} numero`));
        numeros.push(num);
        if (num < 0) {
            contador++;
        }
    }

    console.log(`Numeros: ${numeros}`);
    console.log(`Cantidad de negativos: ${contador}`);
}
contarNegativosLista()

/* Pseudocódigo:
Inicio
    n = leer("Cantidad de números")
    numeros = []
    contador = 0
    Para i = 0 hasta n-1 hacer
        num = leer("Número " + (i+1))
        agregar num a numeros
        Si num < 0 entonces
            contador = contador + 1
        FinSi
    FinPara
    imprimir("Numeros: " + numeros)
    imprimir("Cantidad de negativos: " + contador)
Fin
*/

/*
3. Promedio de edades: mayores vs menores de edad
*/
function promedioMayorYMenor() {
    let n = parseInt(prompt("Ingresar la cantidad de edades deseadas"));
    let edades = [];
    let sumaMayores = 0;
    let sumaMenores = 0;
    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < n; i++) {
        let edad = parseInt(prompt(`Ingresar la edad ${i + 1}`));
        edades.push(edad);
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

    console.log(`Las edades son: ${edades.join(", ")}`);
    console.log(`Promedio de mayores de edad: ${promedioMayores}`);
    console.log(`Promedio de menores de edad: ${promedioMenores}`);
}
promedioMayorYMenor()

/* Pseudocódigo:
Inicio
    n = leer("Cantidad de edades")
    edades = []
    sumaMayores = 0
    sumaMenores = 0
    c1 = 0
    c2 = 0
    Para i = 0 hasta n-1 hacer
        edad = leer("Edad " + (i+1))
        agregar edad a edades
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
    imprimir("Las edades son: " + edades)
    imprimir("Promedio de mayores de edad: " + promedioMayores)
    imprimir("Promedio de menores de edad: " + promedioMenores)
Fin
*/

/*
4. Mostrar tablas de multiplicar de varios números
*/
function multiplicacionDeNumerosArreglo() {
    let n = parseInt(prompt("Ingresar la cantidad de numeros deseada"));
    let numeros = [];

    for (let i = 0; i < n; i++) {
        numeros.push(parseInt(prompt(`Ingresar el numero ${i + 1}`)));
    }

    for (let i = 0; i < numeros.length; i++){
        console.log(`\nTabla del ${numeros[i]}:`);
        for (let j = 1; j <= 10; j++){
           let multiplicacion = numeros[i] * j;
           console.log(`${numeros[i]} x ${j} = ${multiplicacion}`);
        }
    }
}
multiplicacionDeNumerosArreglo()

/* Pseudocódigo:
Inicio
    n = leer("Cantidad de números")
    numeros = []
    Para i = 0 hasta n-1 hacer
        num = leer("Número " + (i+1))
        agregar num a numeros
    FinPara
    Para cada num en numeros hacer
        imprimir("Tabla del " + num)
        Para j = 1 hasta 10 hacer
            imprimir(num + " x " + j + " = " + (num*j))
        FinPara
    FinPara
Fin
*/

/*
5. Promedio de números pares e impares
*/
function promedioParesImpares() {
    let n = parseInt(prompt("Ingresar la cantidad de numeros deseados"));
    let numeros = [];
    let pares = 0;
    let impares = 0;
    let c = 0;
    let c2 = 0;

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingresar el numero ${i+1}`));
        numeros.push(num);
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

    console.log(`Valores: ${numeros}`);
    console.log(`Promedio de pares: ${promedioPares}`);
    console.log(`Promedio de impares: ${promedioImpares}`);
}
promedioParesImpares()

/* Pseudocódigo:
Inicio
    n = leer("Cantidad de números")
    numeros = []
    pares = 0
    impares = 0
    c = 0
    c2 = 0
    Para i = 0 hasta n-1 hacer
        num = leer("Número " + (i+1))
        agregar num a numeros
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
    imprimir("Valores: " + numeros)
    imprimir("Promedio de pares: " + promedioPares)
    imprimir("Promedio de impares: " + promedioImpares)
Fin
*/
