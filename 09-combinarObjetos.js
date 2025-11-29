const objeto1={ a: 1 };
const objeto2={ b: 2 };


function combinacion(obj1,obj2){
    objetoFinal={}
    objetoFinal.a=obj1.a
    objetoFinal.b=obj2.b

    return objetoFinal
}


combinacion(objeto1,objeto2)