const lista=["a", "b","c", "d","e","f","g"]


function invertirValores(listaValores){
const listaInvertida=[];

for(let i=0;i<listaValores.length;i++){

    listaInvertida.unshift(listaValores[i])
}

return listaInvertida

}

invertirValores(lista)

