const obj={1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7}


const contarPropiedades=(objeto)=>{
    let acumulador=0;
    for (const propiedad in objeto) {
        acumulador++

    }
    return acumulador
}

contarPropiedades(obj)