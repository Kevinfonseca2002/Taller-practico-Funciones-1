const estudiantes=[{ nombre: "Ana", notas: [80, 90, 70] },
{ nombre: "Pedro", notas: [10, 75, 70] },
{ nombre: "Ana", notas: [50, 86, 120] }]


// 1. Iterar objeto por objeto
// 2. Iterar unicamente notas y sumarlas
// 3. Promediar Notas
// 4. Nombre de estudiante y promedio en consola

function sumarNotas(notas){
    let resultado=0;
    for(let i=0;i<notas.length;i++ ){
        resultado+=notas[i]
    }
    return resultado
}

function promediar(suma,notas){
    return (suma/notas.length).toFixed(1)
}

function notaFinal(lista){
for(let i=0;i<lista.length;i++){

    let nombreEstudiante= lista[i].nombre
    let notas=lista[i].notas

    const suma=sumarNotas(notas)
    const promedio=promediar(suma,notas)

    console.log(`El estudiante ${nombreEstudiante} obtuvo un promedio de ${promedio}}`)

}}

notaFinal(estudiantes);