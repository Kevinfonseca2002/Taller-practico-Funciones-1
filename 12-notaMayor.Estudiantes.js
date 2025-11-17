const estudiantes=[{ nombre: "Ana", nota: 40 },
{ nombre: "Pedro", nota: 10 },
{ nombre: "Sergio", nota: 50 }]

for(let i=0;i<estudiantes.length;i++){
    let notas=estudiantes[i].nota
    let estudiante=estudiantes[i].nombre
    let mayorNota=0;

    if(mayorNota<notas) mayorNota=notas; break;

    // console.log(`La mayor nota le pertenece a ${estudiante} siendo de ${notas} `)
console.log(notas)

}