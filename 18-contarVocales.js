const palabra= prompt(`Escribe una palabra y contaremos las vocales`).toLowerCase()
const vocales=[ "a","e","i", "o", "u"]
let totalVocales=0;


for(let i=0; i<palabra.length;i++){
    for(let j=0;j<vocales.length;j++){
        if(palabra[i]==vocales[j]){
            totalVocales++
        }
    }

}
console.log(totalVocales)