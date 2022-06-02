/**
 * Menú de programa
 * a) secuencia de fibonacci
 * b) saludos infinitos
 * 
 * Los resultados aparecen en la consola del navegador
 */
alert("Por favor de validar la infromación en la consola del navegador");
let operacion = parseInt(prompt("1) secuencia de fibonacci || 2) saludos infinitos"));
    switch (operacion) {
        case 1:
            /** secuencia de fibonacci
            * Inicialisar variables
            */
            let a = 0;
            let b = 1;
            let suma = 0;
            //Entrada de datos
            let contador = parseInt(prompt("Ingrese la cantidad de secuencia de fibonacci a imprimir"));
            //Ciclo para repetir el resultado
            for (let i = 1; i <= contador; i++) {
                console.log(a);
                
                suma = a + b;
                a = b;
                b = suma;
            }
            break;
        case 2:
            let contadorSaludos = parseInt(prompt("Ingrese la cantidad desaludos que desea repetir"));
            let nombre = prompt("Ingresa un nombre para perzonalizar el mensaje");
            let j = 0;
            while (j < contadorSaludos) {
                console.log("Saludos " + nombre);
                j++;
            }
            break;
        default:
            alert("Operacion invalida, por favor vuelva a intentar");

    }




