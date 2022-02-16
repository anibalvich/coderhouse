
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero: "));
console.log(ingresarNumero);
// let vueltas = parseInt(prompt("Ingrese cantidad de vueltas: "));
 let saltear = parseInt(prompt("Ingrese resultado a saltear: "));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 0; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    if( resultado == saltear){
        console.log("El resultado es 30, se saltea.");
        continue;
    } else {
        console.log(ingresarNumero +" X "+ i +" = "+ resultado);
    }
}

// Si queremos multiplicar solo por numeros pares??. 

// Si queremos multiplicar solo por numeros impares??.
