let contrasenia = prompt("Ingresa una contraseña");

function validarNumero(a){
if(!isNaN(Number(a))){
    alert(`No tiene un numero`)
}else{alert(`Hay Numero`)}
}

function validarMayuscula(a){
return /A-Z/.test(a)
}


function contraseniaValidada(a){

    let mayuscula= validarMayuscula(a);
    let numero=validarNumero(a);

    if(!mayuscula) return console.log(`Ingresa al menos 1 mayuscula`);
    if(!numero) return console.log(`Ingresa al menos 1 numero`)

    console.log(`Contraseña válida`)
}

contraseniaValidada(contrasenia)

