const lista=[5, 3, 8, 4, 2, 1, 7, 6];

const listaOrganizada=[lista[0]]

for(let i=0;i<lista.length;i++){
    if(lista[i]>lista[i+1]){
        lista[i+1]=lista[i]
    }
}

console.log(listaOrganizada)