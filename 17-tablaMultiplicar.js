const tablaSeleccionada=Number(prompt("Ingresa la tabla de multiplicar que deseas ver"));

for(let i=1;i<=10;i++){
    console.log(`El resultado de ${tablaSeleccionada}*${i}= ${(tablaSeleccionada*i)}`)
}