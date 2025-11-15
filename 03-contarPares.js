const lista= [3, 8, 2, 10, 5, 9, 4, 12, 10];


function numerosPares(listaNumeros){
let pares=0;

for(let i= 0; i<listaNumeros.length;i++){

    if(listaNumeros[i]%2==0){
        pares++
    }


}

return pares}

numerosPares(lista)