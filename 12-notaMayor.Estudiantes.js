const estudiantes=[{ nombre: "Ana", nota: 69 },
{ nombre: "Pedro", nota: 78 },
{ nombre: "Sergio", nota: 80 }]


function notaMayor(lista){
let estudianteGanador="";
let mayorNota=0;
for(let i=0;i<lista.length;i++){
    let notas=lista[i].nota
    let estudiante=lista[i].nombre
    

    if(mayorNota<notas){
        mayorNota=notas;
        estudianteGanador=estudiante}



}
    return console.log(`La mayor nota le pertenece a ${estudianteGanador} siendo de ${mayorNota}`)}

notaMayor(estudiantes)