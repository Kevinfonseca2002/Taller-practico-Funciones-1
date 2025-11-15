const lista = [5, 2, 9, 1];


function numeroMayor(listaNumeros){
let mayorNumero= listaNumeros[0]

for(let i=0;i<listaNumeros.length;i++){
    if(listaNumeros[i]>mayorNumero){
        mayorNumero=listaNumeros[i]
    }
}
return mayorNumero
}

numeroMayor(lista)