let numero = Number(prompt("Ingresa un número para calcular su factorial"));
let factorial=[]
let resultado=numero


for(let i=numero;i>=1;i--){
    
    factorial.push(i);
    resultado= (resultado-1)*i
}

console.log(factorial)
console.log(resultado)