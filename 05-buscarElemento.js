const lista=["azul","rojo","verde","amarillo","lila","naranja","cafe"]

function buscarColor(listaObjetos){
const buscar=prompt(`Busca un color`).toLowerCase();
let resultado=""
for(let i=0; i<listaObjetos.length; i++){
    if(listaObjetos[i]===buscar){
        resultado=`El color ${buscar} sí se encuentra en la lista.`
        break;
    }
    
}
return resultado
}


buscarColor(lista);
