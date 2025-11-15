const lista= [1, 2, 3];


function sumarNumeros(listaNumeros){
let listaSumada=0;

for(let i=0;i<listaNumeros.length;i++){
    listaSumada+=listaNumeros[i]

}
return listaSumada
}

sumarNumeros(lista)