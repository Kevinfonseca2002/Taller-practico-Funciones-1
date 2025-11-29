//1. agregar todos los valores a nueva lista
//2. comparar cada uno de los valores con for anidado
//3. si el valor ya existe, eliminarlo.

const duplicados=[1, 2, 2, 3, 4, 4, 5, 2, 1];



for(let i= 0; i < duplicados.length; i++){
    for(let n = i+1; n<duplicados.length;n++){
        if(duplicados[i]==duplicados[n]){
        delete duplicados[n]}
    }

}

console.log(duplicados)


// const listaLimpia=[...new Set(duplicados)]


// console.log(listaLimpia)


